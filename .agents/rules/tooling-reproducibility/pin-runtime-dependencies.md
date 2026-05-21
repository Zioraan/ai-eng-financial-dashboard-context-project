---
title: Pin Runtime Dependencies
scope: project
globs:
  - 'backend/requirements.txt'
  - 'frontend/package.json'
content:
  - Pin or constrain runtime dependency versions for reproducible builds
  - Update dependency versions through scheduled maintenance, not ad hoc drift
  - Avoid broad unbounded ranges for critical runtime packages
---