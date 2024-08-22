# Quick Setup

## 1. Install Docker and Docker-Compose

- [Docker & Docker-Compose Install documentation](https://github.com/lSukiChanl/docker/tree/main/docker-installation "Docker && Docker-Compose Install documentation")

## 2. Create a docker-compose.yml file similar to this:

```yaml
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80' # Do not change, required for SSL certificate generation
      - '8000:81'
      - '443:443' # Do not change, required for SSL certificate generation
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

This is the bare minimum configuration required. See the documentation for more.

## 3. Bring up your stack by running

```bash
docker-compose up -d
```

## 4. Log in to the Admin UI
When your docker container is running, connect to it on port 8000 for the admin interface. Sometimes this can take a little bit because of the entropy of keys.

- [http://your-ip:8000](http://your-ip:8000 "http://your-ip:8000")

Default Admin User:

| Email | Password  |
| ------------ | ------------ |
| admin@example.com  | changeme  |

Immediately after logging in with this default user you will be asked to modify your details and change your password.

## 5. Example

- [My Nginx-Proxy-Manager](https://npm.ichimonogatari.com/login "My Nginx-Proxy-Manager")