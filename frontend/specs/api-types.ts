import type {
  BusinessType,
  Category,
  OperationType,
} from "../src/lib/financial-types";

/**
 * Date string in YYYY-MM-DD format as returned by FastAPI date serialization.
 */
export type DateString = string;

/**
 * Filter options and global date bounds returned by GET /api/metrics/facets.
 */
export interface FacetsResponse {
  /**
   * Supported operation types accepted by operation_type query filters.
   * Valid values: "income", "outcome".
   */
  operation_types: OperationType[];
  /**
   * Supported business segments accepted by business_type query filters.
   * Valid values: "B2B", "B2C".
   */
  business_types: BusinessType[];
  /**
   * Supported movement categories accepted by category query filters.
   * Valid values: "suppliers", "sales", "operational", "administrative", "others".
   */
  categories: Category[];
  /**
   * Earliest available movement date in YYYY-MM-DD format.
   */
  min_date: DateString;
  /**
   * Latest available movement date in YYYY-MM-DD format.
   */
  max_date: DateString;
}

/**
 * Single anomaly row returned by GET /api/metrics/alerts.
 */
export interface AlertEntry {
  /**
   * Time bucket identifier.
   * Format depends on group_by: YYYY-MM-DD (day), YYYY-Www (week), or YYYY-MM (month).
   */
  period: string;
  /**
   * Total outcome amount for the period.
   */
  outcome_total: number;
  /**
   * Rolling average of prior periods used as anomaly baseline.
   */
  baseline_average: number;
  /**
   * Relative increase over baseline as a decimal ratio.
   * Example: 0.35 means a 35% increase.
   */
  increase_ratio: number;
}

/**
 * Alerts payload returned by GET /api/metrics/alerts.
 */
export type AlertsResponse = AlertEntry[];

/**
 * Single ranked category item returned by GET /api/metrics/categories/top.
 */
export interface CategoryEntry {
  /**
   * Category label represented in the ranking row.
   * Valid values: "suppliers", "sales", "operational", "administrative", "others".
   */
  category: Category;
  /**
   * Operation type the ranking was computed for.
   * Valid values: "income", "outcome".
   */
  operation_type: OperationType;
  /**
   * Aggregated amount for the category within the filtered period.
   */
  total_amount: number;
}

/**
 * Ranked category payload returned by GET /api/metrics/categories/top.
 */
export type TopCategoriesResponse = CategoryEntry[];
