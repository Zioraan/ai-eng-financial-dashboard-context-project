---
title: Dynamic Reporting Periods
scope: project
globs:
  - 'frontend/src/**/*.tsx'
content:
  - UI period labels must be derived from data range, not hardcoded text
  - Displayed reporting period must match the currently loaded dataset
  - Update period labels when filters or date windows change
---