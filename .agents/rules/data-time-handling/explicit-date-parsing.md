---
title: Explicit Date Parsing
scope: project
globs:
  - 'frontend/src/**/*.ts'
  - 'frontend/src/**/*.tsx'
content:
  - Date-only strings must not rely on implicit local timezone parsing
  - Date parsing must use a shared helper for deterministic month and day grouping
  - Tests must cover cross-timezone and cross-year aggregation behavior
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---