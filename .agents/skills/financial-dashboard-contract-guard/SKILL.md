---
name: Financial Dashboard Contract Guard
description: Guardrail workflow for preventing backend-frontend contract drift in the financial dashboard by validating API shapes, date handling, localization consistency, and required test/build checks.
---

# Financial Dashboard Contract Guard

Use this skill to keep financial dashboard changes contract-safe across backend routes, frontend specs, and UI computations.

## Use when

- Changing API routes, response fields, filters, or aggregation behavior.
- Updating financial data models, frontend parsing, or KPI/chart computations.
- Editing date-window logic, reporting period labels, or locale-facing strings.
- Refactoring code that can affect backend/frontend compatibility.

## Trigger phrases

- "update dashboard contract"
- "change metrics payload"
- "modify financial types"
- "adjust date range logic"
- "refactor routes and frontend parser"
- "validate backend frontend compatibility"
- "run contract guard"

## Do not use when

- The change is fully cosmetic and does not affect data contracts or user-facing data text.
- You are only editing isolated non-dashboard utilities unrelated to API payloads.

## Sources of truth

1. Backend API contract source: `backend/app/routes.py`
2. Frontend contract/spec context: `frontend/specs/**/*`
3. Project guardrails: `.agents/rules/**/*`
4. Project context and known risks: `memory-bank/current-status.md`, `memory-bank/tech-stack.md`

## Blocking conditions (fail-fast)

Mark contract status as `fail` immediately if any of the following is true:

1. Backend response shape changed without corresponding frontend type/schema update.
2. Frontend enum/domain values diverge from backend literals.
3. Date input/output formats no longer match documented contract (`YYYY-MM-DD` where required).
4. Validation command in the required sequence fails.
5. User-facing dashboard data flow mixes locales in the same interaction path without intentional localization strategy.

When blocked:

- Stop and report the exact mismatch with file references.
- Propose the smallest concrete fix set.

## Contract checks

1. Verify API payload shape changes against frontend assumptions and parser/schema logic.
2. Confirm enum/value compatibility (operation type, category, business type) across backend and frontend.
3. Ensure date parsing and grouping behavior is deterministic and consistent for reporting periods.
4. Ensure user-facing dashboard text is locale-consistent (avoid mixed-language regression in same flow).
5. Validate empty-state and error-state behavior when payloads are missing or malformed.

## Execution protocol

1. Read contract sources before making edits.
2. Compare backend route models and response payload fields with frontend schemas/parsers.
3. Compare specs with implemented filters and enum constraints.
4. Run required validation commands.
5. Report pass/fail matrix and follow-ups.

## Required validation sequence

Run these after relevant changes:

1. Frontend lint: `cd frontend && npm run lint`
2. Frontend typecheck: `cd frontend && npx tsc -b --pretty false`
3. Frontend tests: `cd frontend && npm run test`
4. Frontend build: `cd frontend && npm run build`
5. Backend tests when API contract/route behavior changes: `cd backend && pytest`

If the task explicitly requests a full guard test run, execute backend tests regardless.

## Output format

Return a concise checklist summary:

- Contract status: pass/fail
- Compatibility risks: pass/fail with file references
- Validation commands run and results
- Remaining follow-ups, if any

### Pass/Fail matrix

- Payload shape alignment: pass/fail
- Enum/value alignment: pass/fail
- Date handling alignment: pass/fail
- Locale consistency: pass/fail
- Validation sequence: pass/fail

## Notes

- Prefer schema-based runtime validation for external data boundaries.
- Use minimal, targeted changes to preserve existing behavior outside the contract scope.
- If backend contract changes are intentional, update frontend specs and tests in the same change set.
