import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const sites = JSON.parse(readFileSync(resolve(root, "sites.json"), "utf8"));
const output = resolve(root, "dist/deploy");
const labels = {
  "traefik.enable": "true",
  "traefik.docker.network": "traefik",
  "traefik.http.services.laloupe-annuaire.loadbalancer.server.port": "80",
  "traefik.http.services.laloupe-annuaire.loadbalancer.passhostheader": "true",
};

let nginx = `server {
    listen 80 default_server;
    server_name _;
    location = /healthz {
        default_type text/plain;
        return 200 "ok\\n";
    }
    location / {
        return 404;
    }
}
`;

rmSync(output, { recursive: true, force: true });
mkdirSync(resolve(output, "sites"), { recursive: true });

for (const [site, domain] of Object.entries(sites)) {
  cpSync(resolve(root, "apps", site, "dist"), resolve(output, "sites", site), { recursive: true });
  const router = `traefik.http.routers.laloupe-${site}`;
  labels[`${router}.rule`] = `Host(\`${domain}\`)`;
  labels[`${router}.entrypoints`] = "websecure";
  labels[`${router}.tls.certresolver`] = "letsencrypt";
  labels[`${router}.service`] = "laloupe-annuaire";
  nginx += `
server {
    listen 80;
    server_name ${domain};
    root /usr/share/nginx/html/${site};
    index index.html;
    server_tokens off;
    add_header X-Content-Type-Options nosniff always;
    location /assets/ {
        try_files $uri =404;
    }
    location / {
        try_files $uri $uri/ /index.html;
    }
}
`;
}

const compose = {
  services: {
    web: {
      image: "${ANNUAIRE_IMAGE:?ANNUAIRE_IMAGE is required}",
      restart: "unless-stopped",
      expose: ["80"],
      networks: ["traefik"],
      security_opt: ["no-new-privileges:true"],
      labels,
      healthcheck: {
        test: ["CMD", "wget", "-q", "-O", "/dev/null", "http://127.0.0.1/healthz"],
        interval: "10s",
        timeout: "3s",
        retries: 5,
        start_period: "10s",
      },
      logging: {
        driver: "json-file",
        options: { "max-size": "10m", "max-file": "3" },
      },
    },
  },
  networks: { traefik: { external: true, name: "traefik" } },
};

writeFileSync(resolve(output, "nginx.conf"), nginx);
writeFileSync(resolve(output, "docker-compose.json"), `${JSON.stringify(compose, null, 2)}\n`);
cpSync(resolve(root, "sites.json"), resolve(output, "sites.json"));
console.log(`Prepared ${Object.keys(sites).length} sites for the existing Traefik network in ${output}`);