---
title: Pin Runtime Dependencies
scope: project
globs:
  - 'backend/requirements.txt'
  - 'frontend/package.json'
content:
  - Runtime dependency versions must be pinned or constrained for reproducible builds
  - Python dependencies must use a pinned or constraints-based strategy
  - Dependency upgrades must follow scheduled maintenance rather than ad hoc drift
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---