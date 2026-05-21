---
title: Avoid Endpoint Duplication
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Do not create near-duplicate endpoints that differ only by one filter
  - Reuse shared filtering and query functions for variants like business segments
  - Prefer composable query parameters over route proliferation
---