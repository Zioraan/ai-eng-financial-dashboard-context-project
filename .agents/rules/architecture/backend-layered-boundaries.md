---
title: Backend Layered Boundaries
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Routing, business logic, and data providers must live in separate modules
  - Route handlers must orchestrate only and must not include aggregation loops for financial metrics
  - Route handlers must delegate business calculations to service or provider functions
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---