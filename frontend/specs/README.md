# Frontend Specs: API Contracts for Three Features

This folder documents the frontend data contracts for:
1. Date range reference and B2B vs B2C view
2. Anomaly table
3. Top categories comparison table

Contract verification source:
- FastAPI docs at /docs
- Backend route signatures in backend/app/routes.py

## Shared Value Constraints

### Enumerations
- operation_type: income | outcome
- category: suppliers | sales | operational | administrative | others
- business_type: B2B | B2C
- group_by: day | week | month

### Date format
- start_date and end_date are strings in YYYY-MM-DD format.
- Date fields in response payloads are serialized as YYYY-MM-DD.

### Validation constraints from backend
- threshold must be >= 0.
- limit must be an integer between 1 and 20.
- Missing required query params (for required endpoints) return HTTP 422.
- Invalid enum values or malformed dates return HTTP 422.

## Feature 1: Date Range Reference and B2B vs B2C View

### Endpoints consumed
- GET /api/metrics/facets
- GET /api/metrics/b2b
- GET /api/metrics/b2c

### TypeScript types used
- Request params:
  - DateRangeFilter from frontend/specs/param-types.ts
- Response:
  - FacetsResponse from frontend/specs/api-types.ts
  - FinancialMovement[] from frontend/src/lib/financial-types.ts for b2b and b2c metric lists

### Parameter constraints
- start_date and end_date are optional on b2b/b2c routes.
- category filter values for b2b/b2c: suppliers, sales, operational, administrative, others.
- operation_type values for b2b/b2c: income, outcome.

### Edge cases and expected UI behavior
1. Facets endpoint succeeds but b2b and b2c return empty arrays for the selected window.
Expected UI: keep filters visible, show empty-state comparison panel, no crash.
2. User selects start_date after end_date.
Expected UI: block request and show inline date-range validation message.
3. Backend returns 422 due to malformed date.
Expected UI: preserve user-entered values and show validation error state.

## Feature 2: Anomaly Table

### Endpoint consumed
- GET /api/metrics/alerts

### TypeScript types used
- Request params:
  - AlertsParams from frontend/specs/param-types.ts
- Response:
  - AlertsResponse and AlertEntry from frontend/specs/api-types.ts

### Parameter constraints
- threshold is optional, default 0.3, and must be >= 0.
- group_by is optional, default month, values day|week|month.
- business_type is optional, values B2B|B2C.
- start_date and end_date are optional and must use YYYY-MM-DD if provided.

### Edge cases and expected UI behavior
1. Alerts endpoint returns an empty list.
Expected UI: render no-anomalies state in table body with controls still enabled.
2. threshold is sent as a negative number and backend returns 422.
Expected UI: show threshold-specific validation feedback and keep prior successful table data visible.
3. group_by changes between day/week/month.
Expected UI: period labels update only, table columns remain stable.

## Feature 3: Top Categories Comparison Table

### Endpoint consumed
- GET /api/metrics/categories/top

### TypeScript types used
- Request params:
  - TopCategoriesParams from frontend/specs/param-types.ts
- Response:
  - TopCategoriesResponse and CategoryEntry from frontend/specs/api-types.ts

### Parameter constraints
- operation_type is optional, default outcome, values income|outcome.
- limit is optional, default 5, integer min 1 and max 20.
- business_type is optional, values B2B|B2C.
- start_date and end_date are optional and must use YYYY-MM-DD if provided.

### Edge cases and expected UI behavior
1. limit set above 20 or below 1 triggers backend 422.
Expected UI: display control-level error and do not clear current table rows until a valid retry.
2. Valid filters return fewer rows than requested limit.
Expected UI: render available rows only without fake placeholders.
3. Response contains categories with equal totals.
Expected UI: preserve backend order and show deterministic ranking numbers.

## Notes on Validation Errors

FastAPI validation failures return HTTP 422 with a detail array.
Frontend should parse detail entries when available and map them to specific controls.
