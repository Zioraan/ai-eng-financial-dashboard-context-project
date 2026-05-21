---
title: Standard Widget States
scope: project
globs:
  - 'frontend/src/components/**/*.tsx'
content:
  - Every data-driven widget must support loading, error, empty, and success states
  - Widgets must not render blank output when data is unavailable
  - State behavior must remain consistent across KPI cards and chart components
  - Each state must be covered by at least one test assertion
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
---