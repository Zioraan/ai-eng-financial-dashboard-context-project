---
title: Enforce Query Constraints
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Numeric query parameters must define explicit bounds
  - New filters require documented allowed values or typed enums
  - Add boundary tests for min and max values
---