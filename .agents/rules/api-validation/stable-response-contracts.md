---
title: Stable Response Contracts
scope: project
globs:
  - 'backend/app/**/*.py'
  - 'backend/tests/**/*.py'
  - 'README.md'
content:
  - API response shapes must be defined with typed models
  - Any response contract change requires corresponding test updates
  - Breaking API behavior changes must be documented in project docs
---