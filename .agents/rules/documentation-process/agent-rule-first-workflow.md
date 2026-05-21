---
title: Agent Rule First Workflow
scope: project
globs:
  - 'AGENTS.md'
  - '.agents/rules/**/*'
  - 'memory-bank/**/*'
content:
  - Project rules and memory must be reviewed before non-trivial implementation work
  - Rules or memory must be updated when recurring issues or new conventions are discovered
  - Rule and memory updates are part of done criteria for iterative work
  - Trivial edits may skip rule updates unless they introduce new behavior
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
---