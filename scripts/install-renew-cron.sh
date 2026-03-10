#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CRON_CMD="0 3 * * * cd ${ROOT_DIR} && ${ROOT_DIR}/scripts/certbot-renew.sh >> ${ROOT_DIR}/certbot/renew.log 2>&1"

( crontab -l 2>/dev/null | grep -Fv "${ROOT_DIR}/scripts/certbot-renew.sh"; echo "${CRON_CMD}" ) | crontab -

echo "Installed cron job:" 
echo "${CRON_CMD}"
