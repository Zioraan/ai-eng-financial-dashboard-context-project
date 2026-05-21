---
title: Provider Abstraction Required
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Access financial data through a provider abstraction, not direct generation in handlers
  - Mock provider is allowed for now but must be isolated behind a clear interface
  - Future persistence migration must not require route rewrites
---