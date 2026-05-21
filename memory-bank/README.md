# Memory Bank

This directory stores durable project context for future iterations by users and agents.

## Purpose

- Preserve key product and technical context between sessions.
- Reduce repeated discovery work.
- Keep decisions, status, and workflows easy to find.

## Files

- [product-overview.md](product-overview.md): Product goals, user value, and current surface.
- [tech-stack.md](tech-stack.md): Frontend, backend, infrastructure, and key dependencies.
- [current-status.md](current-status.md): Implemented features, known gaps, and prioritized next steps.
- [commands-and-workflows.md](commands-and-workflows.md): Canonical run, test, lint, and workflow commands.

## Update Guidelines

- Update files when behavior, architecture, or workflows change.
- Keep entries factual, concise, and implementation-aware.
- When adding new memory files, include them in this index.
- Prefer small updates in the relevant file over creating duplicates.

## Agent/User Workflow

1. Read this index first.
2. Open the specific file matching the current task.
3. Apply changes to code.
4. Update affected memory entries before closing the task.
