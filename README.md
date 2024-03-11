## Prerequisites

Install [Docker](https://docs.docker.com/get-docker) for Mac, Windows, or Linux. Docker Desktop includes Docker Compose as part of the installation.

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable sh
```

Enable docker service to run at server start

```bash
systemctl enable --now docker
```

## Production

Clone repo

```bash
cd /opt
umask 220
git clone https://github.com/ImVladislav/go-peei.git
cd go-peei


cd /opt/go-peei
# git reset --hard
git pull

```

Multistage builds are highly recommended in production. Combined with the Next [Output Standalone](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) feature, only `node_modules` files required for production are copied into the final Docker image.

First, run the production server (Final image approximately 110 MB).

```bash
# Build prod
docker compose -f docker-compose.prod.yml build

# Up prod in detached mode
docker compose -f docker-compose.prod.yml up -d
```

## Development

First, run the development server:

```bash

# НЕ запускати на сервері !


# Build dev
docker compose -f docker-compose.dev.yml build

# Up dev
docker compose -f docker-compose.dev.yml up -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Useful commands

```bash
# Stop all running containers
docker kill $(docker ps -aq) && docker rm $(docker ps -aq)

# Free space
docker system prune -af --volumes
```
