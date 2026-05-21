---
title: Avoid Endpoint Duplication
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Near-duplicate endpoints that differ only by one filter must be avoided
  - Shared filtering and query logic must be extracted before adding a second variant endpoint
  - Composable query parameters should be preferred over route proliferation
  - Separate endpoints are allowed only when an external API contract requires distinct paths
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
---