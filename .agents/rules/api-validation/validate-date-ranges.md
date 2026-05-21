---
title: Validate Date Ranges
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Any endpoint with start_date and end_date must validate start_date <= end_date
  - Invalid ranges must return explicit validation errors
  - Add tests for invalid ranges on every affected endpoint
---