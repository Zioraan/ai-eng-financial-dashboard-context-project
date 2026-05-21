---
title: Pin Base Image Strategy
scope: project
globs:
  - 'backend/Dockerfile'
  - 'frontend/Dockerfile'
  - 'docker-compose.yml'
content:
  - Use stable pinned image tags for predictable environments
  - Avoid floating latest-style tags in project defaults
  - Review and update base image versions on a planned cadence
---