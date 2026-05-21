# Rules Validation Checklist

Use this checklist in PR reviews to verify rule compliance.

## How to Use

1. Mark each item as `PASS`, `FAIL`, or `EXCEPTION`.
2. Any `FAIL` in Security or API Validation should block merge.
3. Any `EXCEPTION` must include rationale, scope, and revisit date.
4. Repeated exceptions should trigger rule revision.

## Result Template

- Reviewer:
- PR:
- Date:
- Final Decision: `PASS` | `PASS WITH EXCEPTIONS` | `BLOCKED`

## Architecture

- [ ] Separation of routing, business logic, and data access is preserved.
- [ ] Route handlers do not include aggregation/business-calculation loops.
- [ ] Similar endpoints share extracted logic before adding variants.
- [ ] Data access goes through a provider abstraction.

## API Validation

- [ ] Endpoints with `start_date` and `end_date` validate `start_date <= end_date`.
- [ ] Invalid date ranges return stable validation response shape.
- [ ] Numeric query params have explicit bounds or documented one-sided rationale.
- [ ] Response contract changes include tests and docs updates in same PR.

## Security and Runtime

- [ ] Wildcard origins are not combined with credentialed CORS.
- [ ] Allowed CORS origins are environment-configured.
- [ ] Debug tooling/reload are development-only.
- [ ] Debug ports are not exposed outside development profiles.

## Data and Time Handling

- [ ] Date-only values use explicit shared parsing utility.
- [ ] Cross-timezone/cross-year aggregation tests exist where applicable.
- [ ] Reporting period labels are derived from loaded data bounds.
- [ ] Empty dataset fallback period label is defined.

## Frontend UX and Consistency

- [ ] Data widgets implement loading, error, empty, success states.
- [ ] Widget state behavior is covered by tests.
- [ ] Product copy is locale-consistent.
- [ ] Multilingual strategy centralizes strings when enabled.
- [ ] Styling token strategy and generator config are aligned.

## Testing and QA

- [ ] New features include invalid-input tests.
- [ ] New features include empty-result tests.
- [ ] Component tests verify user-visible behavior.
- [ ] Accessibility checks exist for charts/KPIs where applicable.
- [ ] CI commands match documented test commands.

## Tooling and Reproducibility

- [ ] Runtime dependencies are pinned or constrained.
- [ ] Floating `latest` base image tags are not used.
- [ ] Base image updates follow a planned cadence.

## Documentation and Process

- [ ] Architecture-impacting changes include decision records.
- [ ] Fallback ADR path is used if memory-bank is absent.
- [ ] Rules are reviewed before non-trivial implementation.
- [ ] Trivial-change skip rationale is valid and behavior-neutral.

## Exception Protocol

- [ ] Each exception includes rationale, scope, and revisit date.
- [ ] Debt-introducing exceptions include linked follow-up task.
- [ ] Repeated exceptions trigger rule revision discussion.

## Prompt Validation Set (for agent testing)

### Architecture

1. "I want to add a new route in `backend/app/routes.py` that directly calculates metrics without using a service layer. Is this okay?"
2. "I need to create separate endpoints for `/api/metrics/b2b` and `/api/metrics/b2c` with similar logic. Should I duplicate the code?"
3. "Can I generate mock data directly in the route handler for `/api/metrics` instead of using a provider abstraction?"

### API Validation

4. "I want to allow users to query metrics with `start_date` after `end_date`. Is this valid?"
5. "Can I add a new query parameter for `limit` without specifying a maximum value?"
6. "I need to change the response model for `/api/metrics/summary` to include a new field. Do I need to update the tests and documentation?"

### Security and Runtime

7. "Can I enable wildcard origins with credentials for CORS in production?"
8. "Is it okay to leave debug ports and auto-reload enabled in the production Dockerfile?"

### Data and Time Handling

9. "Can I use JavaScript's `Date` object to parse ISO date strings for monthly aggregation?"
10. "I want to hardcode the reporting period label in the frontend to `2024`. Is this acceptable?"

### Frontend UX and Consistency

11. "Do I need to add loading, error, and empty states for a new chart component?"
12. "Can I mix English and Spanish in the UI copy for the dashboard?"
13. "The component generator config says `cssVariables: false`, but the project uses CSS variables. Is this a problem?"

### Testing and QA

14. "Do I need to add tests for invalid inputs and empty responses for a new endpoint?"
15. "Should I test the loading and error states for a new KPI card component?"
16. "Can I use a different test command locally than the one documented in the README?"

### Tooling and Reproducibility

17. "Is it okay to leave runtime dependencies unpinned in `requirements.txt` or `package.json`?"
18. "Can I use `python:latest` as the base image in the Dockerfile?"

### Documentation and Process

19. "Do I need to document a decision to change the API contract for `/api/metrics`?"
20. "Can I implement a new feature without checking or updating the `.agents/rules` directory?"
21. "Can I bypass a rule without documenting why if it speeds up delivery?"
