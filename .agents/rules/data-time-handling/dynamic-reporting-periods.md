---
title: Dynamic Reporting Periods
scope: project
globs:
  - 'frontend/src/**/*.tsx'
content:
  - UI period labels must be derived from dataset bounds, not hardcoded text
  - Displayed reporting periods must match the currently loaded dataset and active filters
  - Empty datasets must show a defined fallback period label
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
  - Changes are complete only after matching tests and docs are updated when applicable
---