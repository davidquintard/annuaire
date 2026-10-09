import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const sites = JSON.parse(readFileSync(resolve(root, "sites.json"), "utf8"));
const directories = readdirSync(resolve(root, "apps"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

assert.deepEqual(Object.keys(sites).sort(), directories, "Every app must have a domain entry");
assert.equal(new Set(Object.values(sites)).size, directories.length, "Domains must be unique");

for (const [site, domain] of Object.entries(sites)) {
  assert.match(site, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.match(domain, /^(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)?laloupe\.net$/);
  const directory = resolve(root, "apps", site);
  const manifest = JSON.parse(readFileSync(resolve(directory, "package.json"), "utf8"));
  assert.equal(manifest.name, `@laloupe/${site}`);
  assert.equal(manifest.private, true);
  assert.ok(manifest.scripts?.build, `Missing build script for ${site}`);

  if (process.argv.includes("--built")) {
    assert.ok(statSync(resolve(directory, "dist/index.html")).size > 0);
    assert.ok(
      readdirSync(resolve(directory, "dist/assets")).some((file) => file.endsWith(".js")),
      `Missing JavaScript bundle for ${site}`,
    );
  }

  console.log(`${site.padEnd(30)} ${domain}`);
}

console.log(`\n${directories.length} sites validated${process.argv.includes("--built") ? " with production builds" : ""}.`);