---
title: Safe CORS Policy
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Do not combine wildcard origins with credentialed CORS
  - Use explicit origin allowlists from environment configuration
  - Keep permissive CORS only for controlled local development modes
---