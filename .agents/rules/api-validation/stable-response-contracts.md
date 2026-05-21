---
title: Stable Response Contracts
scope: project
globs:
  - 'backend/app/**/*.py'
  - 'backend/tests/**/*.py'
  - 'README.md'
content:
  - API response shapes must be defined with typed models
  - Additive contract changes must include matching test updates in the same PR
  - Breaking contract changes must include migration notes and docs updates in the same PR
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---