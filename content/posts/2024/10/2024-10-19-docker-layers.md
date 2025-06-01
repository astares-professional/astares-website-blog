---
title: "Optimize Docker layers"
date: 2024-10-19T09:00:00-07:00
lastmod: 2024-10-19T09:00:00-07:00
draft: false
categories: ["Docker"]
tags: ["Virtualization", "Docker", "CI/CD", "Python"]
description: "Optimize Docker layers and build time"
slug: "docker-layers"
---
# Optimize Docker layers

*[Docker](https://www.docker.com/) images are built in **layers**, with each **RUN** instruction creating a new layer. While layers help with caching and efficient rebuilds, too many layers can lead to bloated images and slower deployment times.*

## Understanding RUN in Docker

Docker uses [layers](https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/) to make images efficient, reusable, and cacheable. Each layer represents a step in the Dockerfile and helps optimize storage and performance. But sometimes too many layers might not be wanted.

Each RUN statement in a Dockerfile executes commands and **creates an own new layer** in the final docker image. For example:

```bash
RUN apt update && apt install -y git
RUN apt install -y curl
```

This results in two separate layers, which can be inefficient when rebuilding.

## Optimizing with Multi-Command RUN

Instead, you can **combine multiple commands into a single RUN instruction** to reduce layers:

```bash
RUN apt update && apt install -y git curl
```

This minimizes the number of layers, making the image smaller and faster to build

## Other tips

- **Use a Minimal Base Image** - choose *alpine* or *debian-slim* instead of full Ubuntu
- **Minimize Layers** by using fewer **RUN** instructions to combine related tasks
- **Leverage Caching** – Place frequently unchanged instructions earlier in the Dockerfile
- **Remove Unnecessary Packages** – Use ```apt clean``` to avoid redundant dependencies
- **Use [Multi-Stage Builds](https://docs.docker.com/build/building/multi-stage/)** to keep base images lightweight and use separate build stages
- **Use *.dockerignore* file** to exclude unnecessary files from your build (e.g., the large node_modules or .git folder).