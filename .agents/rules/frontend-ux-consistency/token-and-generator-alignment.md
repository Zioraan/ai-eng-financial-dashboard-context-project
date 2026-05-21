---
title: Token and Generator Alignment
scope: project
globs:
  - 'frontend/components.json'
  - 'frontend/src/index.css'
content:
  - Tooling configuration must match the active styling strategy
  - If CSS variables drive theming, generator settings must reflect CSS variable usage
  - Configuration drift must be corrected in the same PR that identifies it
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---