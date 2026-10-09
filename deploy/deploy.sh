#!/usr/bin/env bash
set -euo pipefail

deployment_path=${1:?Deployment path is required}
release_id=${2:?Release ID is required}
[[ "$deployment_path" =~ ^(/|[a-zA-Z0-9_])[a-zA-Z0-9_./-]*$ ]] || exit 1
[[ "$release_id" =~ ^[a-f0-9]{40}-[0-9]+-[0-9]+$ ]] || exit 1

mkdir -p "$deployment_path"
deployment_path=$(cd "$deployment_path" && pwd -P)
exec 9>"$deployment_path/deploy.lock"
flock -n 9 || { printf 'Another deployment is running.\n' >&2; exit 1; }

release_path="$deployment_path/releases/$release_id"
image="laloupe-annuaire:$release_id"
[[ -f "$release_path/docker-compose.json" && -f "$release_path/image.tar.gz" ]] || exit 1
docker network inspect traefik >/dev/null

previous_path=""
if [[ -L "$deployment_path/current" ]]; then
  previous_path=$(readlink -f "$deployment_path/current")
elif [[ -e "$deployment_path/current" ]]; then
  printf 'current must be a symlink; nothing has been replaced.\n' >&2
  exit 1
fi

docker image load --input "$release_path/image.tar.gz"
docker run --rm "$image" nginx -t
printf 'ANNUAIRE_IMAGE=%s\n' "$image" >"$release_path/.env"

compose_release() {
  env -u ANNUAIRE_IMAGE docker compose --project-name laloupe-annuaire \
    --file "$1/docker-compose.json" --env-file "$1/.env" \
    up -d --wait --wait-timeout 120
}

if ! compose_release "$release_path"; then
  printf 'New release failed its health check.\n' >&2
  if [[ -n "$previous_path" && -f "$previous_path/.env" ]]; then
    printf 'Restoring previous release: %s\n' "$previous_path" >&2
    compose_release "$previous_path"
  fi
  exit 1
fi

ln -sfn "$release_path" "$deployment_path/current.next"
mv -Tf "$deployment_path/current.next" "$deployment_path/current"
printf 'Deployed %s behind the existing Traefik instance.\n' "$release_id"