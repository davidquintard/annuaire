import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { request } from "node:http";
import { resolve } from "node:path";
import { setTimeout } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const sites = JSON.parse(readFileSync(resolve(root, "sites.json"), "utf8"));
const base = process.env.SMOKE_URL || "http://127.0.0.1:18080";

function get(path, domain) {
  return new Promise((resolveResponse, rejectResponse) => {
    const outgoing = request(new URL(path, base), {
      headers: domain ? { Host: domain } : {},
      signal: AbortSignal.timeout(5000),
    }, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("error", rejectResponse);
      response.on("end", () => resolveResponse({ status: response.statusCode, body: Buffer.concat(chunks) }));
    });
    outgoing.on("error", rejectResponse);
    outgoing.end();
  });
}

for (let attempt = 0; ; attempt++) {
  try {
    const response = await get("/healthz");
    assert.equal(response.status, 200);
    assert.equal(response.body.toString(), "ok\n");
    break;
  } catch (error) {
    if (attempt === 19) throw error;
    await setTimeout(250);
  }
}

for (const [site, domain] of Object.entries(sites)) {
  const directory = resolve(root, "apps", site, "dist");
  const html = readFileSync(resolve(directory, "index.html"), "utf8");
  const routes = ["/", "/route-directe"];
  if (site === "annuaire") routes.push("/categories", "/businesses");
  if (["pizza-napoli", "kebab-ada-delices"].includes(site)) routes.push("/commande");
  for (const route of routes) {
    const response = await get(route, domain);
    assert.equal(response.status, 200, `${domain}${route}`);
    assert.equal(response.body.toString(), html, `Incorrect site served for ${domain}${route}`);
  }
  for (const asset of readdirSync(resolve(directory, "assets"))) {
    const response = await get(`/assets/${asset}`, domain);
    assert.equal(response.status, 200, `${domain}/assets/${asset}`);
    assert.deepEqual(
      response.body,
      readFileSync(resolve(directory, "assets", asset)),
      `${domain}/assets/${asset}`,
    );
  }
  const missing = await get("/assets/missing.js", domain);
  assert.equal(missing.status, 404, `Missing assets must not return HTML for ${domain}`);
  console.log(`${domain}: HTML, SPA routes and assets OK`);
}

const unknown = await get("/", "unknown.laloupe.net");
assert.equal(unknown.status, 404);
console.log("All 15 virtual hosts validated; unknown hosts return 404.");