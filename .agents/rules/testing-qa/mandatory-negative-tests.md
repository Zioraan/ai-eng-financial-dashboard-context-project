---
title: Mandatory Negative Tests
scope: project
globs:
  - 'backend/tests/**/*.py'
  - 'frontend/src/**/*.test.ts'
  - 'frontend/src/**/*.test.tsx'
content:
  - Every new feature must include at least one invalid-input test and one empty-result test
  - Tests must validate boundary behavior where applicable
  - Happy-path coverage alone is insufficient
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---