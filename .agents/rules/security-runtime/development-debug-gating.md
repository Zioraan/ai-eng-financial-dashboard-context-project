---
title: Development Debug Gating
scope: project
globs:
  - 'backend/Dockerfile'
  - 'docker-compose.yml'
content:
  - Debug tooling and auto-reload must be development-only
  - Default runtime settings must be production-safe by design
  - Debug ports must be disabled outside development profiles
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---