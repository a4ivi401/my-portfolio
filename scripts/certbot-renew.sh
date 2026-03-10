#!/usr/bin/env bash
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is not installed or not in PATH" >&2
  exit 1
fi

docker compose run --rm certbot renew --webroot -w /var/www/certbot --quiet

docker compose exec nginx nginx -s reload
