#!/usr/bin/env bash
set -euo pipefail

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is not installed or not in PATH" >&2
  exit 1
fi

read -r -p "Domains (space-separated): " DOMAINS
if [[ -z "${DOMAINS}" ]]; then
  echo "No domains provided" >&2
  exit 1
fi

read -r -p "Email for Let's Encrypt notifications: " EMAIL
if [[ -z "${EMAIL}" ]]; then
  echo "Email is required" >&2
  exit 1
fi

ARGS=""
for d in ${DOMAINS}; do
  ARGS+=" -d ${d}"
done

# Ensure nginx is running to serve the ACME challenge
docker compose up -d nginx

# Issue certificates
# shellcheck disable=SC2086
if ! docker compose run --rm certbot certonly \
  --webroot -w /var/www/certbot \
  ${ARGS} \
  --email "${EMAIL}" \
  --agree-tos --no-eff-email; then
  echo "Certbot failed" >&2
  exit 1
fi

# Enable HTTPS config if it's still disabled
if [[ -f nginx/conf.d/https.conf.disabled ]]; then
  mv nginx/conf.d/https.conf.disabled nginx/conf.d/https.conf
fi

docker compose exec nginx nginx -s reload

echo "Done. Certificates issued for: ${DOMAINS}"
