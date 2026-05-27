---
name: Example Project Skill
description: Template skill for repository-specific Copilot workflows.
---

# Example Project Skill

Use this template to create new skills in `.agents/skills`.

## Use when

- The task is repeated often.
- The repository has specific conventions that need enforcement.
- A standard workflow can reduce mistakes and rework.

## Do not use when

- The task is trivial and one-off.
- Existing global Copilot behavior already handles the request well.

## Workflow

1. Read relevant rules in `.agents/rules`.
2. Review context in `memory-bank` before implementation.
3. Apply repository conventions during edits.
4. Validate changes with the appropriate tests.
5. Update docs/memory when conventions or behavior change.

## Outputs

- Updated code and/or docs aligned to repo rules.
- Brief summary of what changed and how it was validated.

## Notes

- Keep this file concise and specific.
- Prefer deterministic commands and reproducible workflows.
