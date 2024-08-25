# Quick Setup

## 1. Install Docker and Docker-Compose

- [Docker & Docker-Compose Install documentation](https://github.com/lSukiChanl/docker/tree/main/docker-installation "Docker && Docker-Compose Install documentation")

## 2. Create a docker-compose.yml file similar to this:

```yaml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: bitwarden
    volumes:
      - ./bitwarden:/data/
    environment:
      - SIGNUPS_ALLOWED=true 
      # true = New accounts can be create
      # false = New accounts cannot be create
    ports:
      - '8001:80'
    restart: unless-stopped

networks:
  network:
    driver: bridge
```

This is the bare minimum configuration required. See the documentation for more.

## 3. Bring up your stack by running

```bash
docker-compose up -d
```

## 4. SSL certificate for your domain

To create the SSL certificate for the website, you can go to the nginx proxy manager installation tutorial.

## 5 Create new account

When your docker container is running, connect to it on port 8001 for the admin interface. 
###### (To create a new account, your domain must have an SSL certificate.)

- [https://your-ip:8001](https://your-ip:8001 "https://your-ip:8001")

## 6 Prohibit the creation of new accounts.

Change the value of `SIGNUPS_ALLOWED=true` to `SIGNUPS_ALLOWED=false`, and rebuild the container to prevent anyone from creating new accounts on your Bitwarden domain.

```yaml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: bitwarden
    volumes:
      - ./bitwarden:/data/
    environment:
      - SIGNUPS_ALLOWED=false 
      # true = New accounts can be create
      # false = New accounts cannot be create
    ports:
      - '8001:80'
    restart: unless-stopped
```

```bash
docker-compose up -d
```

## 7. Example

- [My Homer](https://home.ichimonogatari.com "Homer")