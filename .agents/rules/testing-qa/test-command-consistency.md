---
title: Test Command Consistency
scope: project
globs:
  - 'README.md'
  - 'backend/**'
  - 'frontend/**'
content:
  - Each app must define one canonical documented test command path
  - Local and containerized workflows must both be documented and validated
  - CI test commands must match documented commands
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---