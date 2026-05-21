---
title: Mandatory Negative Tests
scope: project
globs:
  - 'backend/tests/**/*.py'
  - 'frontend/src/**/*.test.ts'
  - 'frontend/src/**/*.test.tsx'
content:
  - Every new feature must include at least one negative-path test
  - Validate invalid inputs, empty data responses, and boundary behavior
  - Happy-path coverage alone is insufficient
---