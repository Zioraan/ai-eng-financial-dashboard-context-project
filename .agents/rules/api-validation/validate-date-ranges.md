---
title: Validate Date Ranges
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Any endpoint with start_date and end_date must validate start_date <= end_date
  - Invalid ranges must return HTTP 422 with a stable error message shape
  - Every affected endpoint must include at least one invalid-range test
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---