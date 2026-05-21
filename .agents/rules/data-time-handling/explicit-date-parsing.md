---
title: Explicit Date Parsing
scope: project
globs:
  - 'frontend/src/**/*.ts'
  - 'frontend/src/**/*.tsx'
content:
  - Do not rely on implicit local timezone parsing for date-only strings
  - Use explicit parsing helpers for deterministic month and day grouping
  - Add tests for cross-timezone and cross-year date aggregation behavior
---