---
title: Safe CORS Policy
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Wildcard origins must not be combined with credentialed CORS
  - Allowed origins must come from explicit environment configuration
  - Permissive CORS is allowed only in controlled local development mode
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---