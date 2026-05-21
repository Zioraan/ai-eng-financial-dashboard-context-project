---
title: Record Architecture Decisions
scope: project
globs:
  - 'README.md'
  - 'AGENTS.md'
  - 'memory-bank/**/*'
content:
  - Major technical decisions must be documented with rationale and impact
  - API contract, security, data-model, and architecture-boundary changes require a decision record
  - Decision records should be concise, searchable, and current
  - If memory-bank is absent, store decision records under docs/adr
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
---