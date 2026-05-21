---
title: Pin Base Image Strategy
scope: project
globs:
  - 'backend/Dockerfile'
  - 'frontend/Dockerfile'
  - 'docker-compose.yml'
content:
  - Base images must use stable pinned tags for predictable environments
  - Floating latest-style tags are not allowed in project defaults
  - Base image versions must be reviewed and updated on a planned cadence
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---