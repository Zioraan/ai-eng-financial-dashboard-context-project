# Component Specifications

This document defines frontend component contracts for the three requested features.
It is a design and data specification only.

## 1. Date Range Reference and B2B vs B2C View

### Purpose
Provide shared filter context and side-by-side business segment comparison for movements in the selected date window.

### Backend endpoints
- GET /api/metrics/facets
- GET /api/metrics/b2b
- GET /api/metrics/b2c

### Data contracts
- FacetsResponse from frontend/specs/api-types.ts
- DateRangeFilter from frontend/specs/param-types.ts
- FinancialMovement[] from frontend/src/lib/financial-types.ts for each segment response

### Suggested component breakdown
- DateRangeFilterBar
- Inputs: start_date, end_date
- Data source for defaults and limits: FacetsResponse.min_date and FacetsResponse.max_date
- SegmentComparisonPanel
- Two synchronized sections: B2B series and B2C series
- Reuses movement row shape to keep chart and table renderers consistent

### Behavioral requirements
- Must prevent invalid user intent where start_date is after end_date.
- Must allow open-ended filtering where only one bound is set.
- Must render a stable empty state when one or both segment responses return an empty list.
- Must render loading placeholders for both segments while either request is pending.

## 2. Anomaly Table

### Purpose
Show outcome spikes above a configurable threshold relative to historical baseline.

### Backend endpoint
- GET /api/metrics/alerts

### Data contracts
- AlertsParams from frontend/specs/param-types.ts
- AlertsResponse and AlertEntry from frontend/specs/api-types.ts

### Suggested component breakdown
- AlertsToolbar
- Controls: threshold, group_by, optional business_type, optional start/end dates
- AlertsTable
- Columns: period, outcome_total, baseline_average, increase_ratio

### Behavioral requirements
- Must display increase_ratio as percentage while preserving raw decimal in internal state.
- Must handle empty response as "no anomalies detected" instead of an error.
- Must map HTTP 422 responses to field-level validation messages when possible.
- Must support day, week, and month bucket labels without changing table schema.

## 3. Top Categories Comparison Table

### Purpose
Display ranked categories by total amount for selected operation type and filters.

### Backend endpoint
- GET /api/metrics/categories/top

### Data contracts
- TopCategoriesParams from frontend/specs/param-types.ts
- TopCategoriesResponse and CategoryEntry from frontend/specs/api-types.ts

### Suggested component breakdown
- TopCategoriesToolbar
- Controls: operation_type, limit, optional business_type, optional start/end dates
- TopCategoriesTable
- Columns: rank, category, operation_type, total_amount

### Behavioral requirements
- Must keep rows sorted by total_amount descending.
- Must show exactly up to the requested limit, never exceeding 20 rows.
- Must display a clear empty state if the filtered dataset has no matching rows.
- Must handle 422 validation errors for invalid limit values or malformed dates.
