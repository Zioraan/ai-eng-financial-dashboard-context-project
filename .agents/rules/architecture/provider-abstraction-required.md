---
title: Provider Abstraction Required
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Financial data access must go through a single provider abstraction, not direct generation in handlers
  - Provider interfaces must support both mock and persistent implementations
  - Future persistence migration must not require route rewrites
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---