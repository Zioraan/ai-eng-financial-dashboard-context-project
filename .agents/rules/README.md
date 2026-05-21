# Rules Directory

This directory contains project-level operational and engineering rules used by users and agents.

## Purpose

- Define expected implementation standards.
- Prevent regressions in architecture, security, testing, and consistency.
- Provide predictable guardrails for AI-assisted development.

## Category Index

- [architecture](architecture): Layering boundaries, duplication control, provider patterns.
- [api-validation](api-validation): Input validation, query constraints, and response contract stability.
- [security-runtime](security-runtime): CORS safety and development/debug profile gating.
- [data-time-handling](data-time-handling): Date parsing determinism and reporting period consistency.
- [frontend-ux-consistency](frontend-ux-consistency): Widget state requirements, locale consistency, and token alignment.
- [testing-qa](testing-qa): Negative-path coverage, component behavior tests, and command consistency.
- [tooling-reproducibility](tooling-reproducibility): Dependency and base image pinning strategies.
- [documentation-process](documentation-process): Decision records, workflow governance, and exception protocol.

## How To Use

1. Read relevant category rules before making changes.
2. Apply rules during implementation and review.
3. If an exception is needed, follow the exception protocol rule and document rationale.
4. Keep tests/docs aligned when rules require it.

## Maintenance Guidelines

- Update rule wording when repeated exceptions indicate ambiguity.
- Keep requirements measurable and reviewable.
- Preserve category organization and one-rule-per-file structure.
- Add new rule files to the appropriate category only.
