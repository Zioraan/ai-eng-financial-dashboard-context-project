---
title: Enforce Query Constraints
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Numeric query parameters must define explicit bounds or document why one-sided bounds are required
  - New filters must define allowed values through documentation or typed enums
  - Boundary tests must cover minimum, maximum, and out-of-range behavior
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---