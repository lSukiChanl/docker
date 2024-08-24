# Quick Setup

## 1. Install Docker and Docker-Compose

- [Docker & Docker-Compose Install documentation](https://github.com/lSukiChanl/docker/tree/main/docker-installation "Docker && Docker-Compose Install documentation")

## 2. Create a docker-compose.yml file similar to this:

```yaml
services:
  homer:
    image: b4bz/homer
    container_name: homer
    volumes:
      - ./www/assets/:/www/assets
    restart: unless-stopped
    ports:
      - '8002:8080'
    user: 1000:1000
    environment:
      - INIT_ASSETS=1
```

## 3. Bring up your stack by running

```bash
docker-compose up -d
```

## 4. Customize Homer

This Docker container comes with a somewhat simple interface, providing some example bookmarks...

To modify or add bookmarks, the file to be edited is located at: `www/assets/config.yml`

The following YAML file is the default one included with the container installation.

```yaml
title: "Homer "
subtitle: "DashBoard"
logo: "logo.png"
header: false

footer: '<p>Theme made with <span class="has-text-danger">❤</span> by <a href="https://github.com/lSukiChanl">SukiChan</a></p>'

stylesheet:
  - "assets/custom.css"

columns: "3"
theme: default
colors:
  
  light:
    highlight-primary: "#fff5f2"
    highlight-secondary: "#fff5f2"
    highlight-hover: "#bebebe"
    background: "#12152B"
    card-background: "rgba(255, 245, 242, 0.8)"
    text: "#ffffff"
    text-header: "#fafafa"
    text-title: "#000000"
    text-subtitle: "#111111"
    card-shadow: rgba(0, 0, 0, 0.5)
    link: "#3273dc"
    link-hover: "#2e4053"
    background-image: "../assets/wallpaper-light.jpeg"
  
  dark:
    highlight-primary: "#181C3A"
    highlight-secondary: "#181C3A"
    highlight-hover: "#1F2347"
    background: "#12152B"
    card-background: "rgba(24, 28, 58, 0.8)"
    text: "#eaeaea"
    text-header: "#7C71DD"
    text-title: "#fafafa"
    text-subtitle: "#8B8D9C"
    card-shadow: rgba(0, 0, 0, 0.5)
    link: "#c1c1c1"
    link-hover: "#fafafa"
    background-image: "../assets/wallpaper.jpeg"

services:
  
  - name: "♡ My Services ♡"
    icon: "fas fa-heart"
    items:
      - name: "My Github SukiChan"
        logo: "assets/tools/Menhera.png"
        subtitle: "Welcome to my Github!"
        tag: "Github"
        tagstyle: "is-sponsor"
        url: "https://github.com/lSukiChanl"
        target: "_blank"

  - name: " Youtube "
    icon: "fab fa-youtube"
    items:
      - name: "Minami 美波「LILA」MV"
        logo: "assets/tools/Youtube.png"
        subtitle: "My Favorite Song"
        tag: "Music"
        tagstyle: "is-sponsor"
        url: "https://www.youtube.com/watch?v=GQ3V50XoLOM"
        target: "_blank"

  - name: "Favorites"
    icon: "fas fa-star"
    items:
      - name: "Google"
        logo: "assets/tools/Google.png"
        subtitle: "Nothing to say... just Google"
        tag: "Search"
        tagstyle: "is-sponsor"
        url: "https://www.google.com/"
        target: "_blank"
```