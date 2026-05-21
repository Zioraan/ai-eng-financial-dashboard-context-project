---
title: Component Behavior Tests
scope: project
globs:
  - 'frontend/src/components/**/*.tsx'
  - 'frontend/src/**/*.test.tsx'
content:
  - Component tests must cover loading, error, and empty rendering behavior
  - Accessibility checks must include semantic roles and meaningful labels for data visualizations
  - Tests must focus on user-visible behavior rather than internal implementation details
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---