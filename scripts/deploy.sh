#!/usr/bin/env bash
set -euo pipefail

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is not installed or not in PATH" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is not installed or not in PATH" >&2
  exit 1
fi

npm ci
npm run build

docker compose up -d nginx

docker compose exec nginx nginx -s reload

echo "Deploy complete"
