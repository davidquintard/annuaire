import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const script = fileURLToPath(new URL("deploy.sh", import.meta.url));
const current = `${"a".repeat(40)}-123-1`;
const previous = `${"b".repeat(40)}-122-1`;

function fixture() {
  const directory = mkdtempSync(join(tmpdir(), "annuaire-deploy-"));
  const bin = join(directory, "bin");
  const root = join(directory, "deployment");
  const log = join(directory, "docker.log");
  mkdirSync(bin);
  for (const release of [current, previous]) {
    const path = join(root, "releases", release);
    mkdirSync(path, { recursive: true });
    writeFileSync(join(path, "docker-compose.json"), "{}");
    writeFileSync(join(path, "image.tar.gz"), "fixture");
    writeFileSync(join(path, ".env"), `ANNUAIRE_IMAGE=laloupe-annuaire:${release}\n`);
  }
  symlinkSync(join(root, "releases", previous), join(root, "current"));
  writeFileSync(join(bin, "docker"), `#!/usr/bin/env node
const fs = require("node:fs");
const args = process.argv.slice(2);
fs.appendFileSync(process.env.MOCK_LOG, JSON.stringify(args) + "\\n");
if (args[0] === "network" && process.env.MOCK_NO_NETWORK === "true") process.exit(1);
const file = args[args.indexOf("--file") + 1];
if (args[0] === "compose" && process.env.MOCK_FAIL && file.includes(process.env.MOCK_FAIL)) process.exit(1);
`, { mode: 0o755 });
  return {
    root,
    run(extra = {}, release = current) {
      return spawnSync("bash", [script, root, release], {
        encoding: "utf8",
        env: { ...process.env, PATH: `${bin}:${process.env.PATH}`, MOCK_LOG: log, ...extra },
      });
    },
    calls() {
      return readFileSync(log, "utf8").trim().split("\n").map((line) => JSON.parse(line));
    },
    cleanup() { rmSync(directory, { recursive: true, force: true }); },
  };
}

test("healthy release updates only the dedicated Compose project", () => {
  const context = fixture();
  try {
    const result = context.run();
    assert.equal(result.status, 0, result.stderr);
    assert.equal(realpathSync(join(context.root, "current")), join(context.root, "releases", current));
    const compose = context.calls().filter((args) => args[0] === "compose");
    assert.equal(compose.length, 1);
    assert.equal(compose[0][compose[0].indexOf("--project-name") + 1], "laloupe-annuaire");
    assert.ok(compose[0].includes("--wait"));
    assert.ok(!context.calls().some((args) => args.includes("down")));
  } finally { context.cleanup(); }
});

test("unhealthy release restores the previous version and fails deployment", () => {
  const context = fixture();
  try {
    const result = context.run({ MOCK_FAIL: current });
    assert.notEqual(result.status, 0);
    assert.equal(realpathSync(join(context.root, "current")), join(context.root, "releases", previous));
    const compose = context.calls().filter((args) => args[0] === "compose");
    assert.equal(compose.length, 2);
    assert.ok(compose[1].some((argument) => argument.includes(previous)));
  } finally { context.cleanup(); }
});

test("missing Traefik network prevents any container update", () => {
  const context = fixture();
  try {
    assert.notEqual(context.run({ MOCK_NO_NETWORK: "true" }).status, 0);
    assert.ok(!context.calls().some((args) => args[0] === "compose"));
    assert.equal(realpathSync(join(context.root, "current")), join(context.root, "releases", previous));
  } finally { context.cleanup(); }
});

test("invalid release ID is rejected before Docker is called", () => {
  const context = fixture();
  try {
    assert.notEqual(context.run({}, "../invalid").status, 0);
    assert.equal(realpathSync(join(context.root, "current")), join(context.root, "releases", previous));
  } finally { context.cleanup(); }
});