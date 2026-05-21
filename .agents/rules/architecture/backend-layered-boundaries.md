---
title: Backend Layered Boundaries
scope: project
globs:
  - 'backend/app/**/*.py'
content:
  - Keep routing, business logic, and data providers in separate modules
  - Route handlers should orchestrate only and avoid embedding analytics logic
  - If a route function grows beyond simple orchestration, extract service functions
---