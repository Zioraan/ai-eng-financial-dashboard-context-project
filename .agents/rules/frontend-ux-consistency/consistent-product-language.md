---
title: Consistent Product Language
scope: project
globs:
  - 'frontend/src/**/*.tsx'
  - 'frontend/src/**/*.ts'
  - 'README.md'
  - 'README.es.md'
content:
  - User-facing copy must remain consistent for the selected locale
  - A single primary locale must be used per build target
  - Mixed-language UI is allowed only when intentional i18n is enabled
  - Multilingual strings must be centralized in translation resources
  - Exceptions require a short PR rationale and a follow-up task when debt is introduced
---