# Deployment (server)

Prerequisites:
- Docker + Docker Compose plugin
- Ports 80/443 open in firewall
- DNS A records for:
  - a4ivi4.dev
  - cafe.a4ivi4.dev
  - codaview.a4ivi4.dev

## 1) Build frontend
```
npm ci
npm run build
```

## 2) Start nginx (HTTP)
```
docker compose up -d nginx
```

## 3) Issue SSL certificates (interactive)
```
./scripts/certbot-issue.sh
```

## 4) Install auto-renew cron
```
./scripts/install-renew-cron.sh
```

## Update deploy (after code changes)
```
./scripts/deploy.sh
```
