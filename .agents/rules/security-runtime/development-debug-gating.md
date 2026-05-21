---
title: Development Debug Gating
scope: project
globs:
  - 'backend/Dockerfile'
  - 'docker-compose.yml'
content:
  - Debug tooling and auto-reload must be development-only
  - Default runtime settings should be production-safe by design
  - Prevent accidental exposure of debug ports outside development
---