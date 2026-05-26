import type {
  BusinessType,
  OperationType,
} from "../src/lib/financial-types";
import type { DateString } from "./api-types";

/**
 * Grouping granularity supported by metrics summary and alerts endpoints.
 */
export type GroupBy = "day" | "week" | "month";

/**
 * Optional date window shared across metrics features.
 */
export interface DateRangeFilter {
  /**
   * Inclusive lower date bound in YYYY-MM-DD format.
   */
  start_date?: DateString;
  /**
   * Inclusive upper date bound in YYYY-MM-DD format.
   */
  end_date?: DateString;
}

/**
 * Query parameters for GET /api/metrics/alerts.
 */
export interface AlertsParams extends DateRangeFilter {
  /**
   * Minimum relative increase required to emit an alert.
   * Constraint: number >= 0. Default: 0.3.
   */
  threshold?: number;
  /**
   * Time bucket resolution used to aggregate outcomes before anomaly detection.
   * Valid values: "day", "week", "month". Default: "month".
   */
  group_by?: GroupBy;
  /**
   * Optional business segment filter.
   * Valid values: "B2B", "B2C".
   */
  business_type?: BusinessType;
}

/**
 * Query parameters for GET /api/metrics/categories/top.
 */
export interface TopCategoriesParams extends DateRangeFilter {
  /**
   * Operation side to rank categories for.
   * Valid values: "income", "outcome". Default: "outcome".
   */
  operation_type?: OperationType;
  /**
   * Maximum number of ranked categories to return.
   * Constraints: integer between 1 and 20 inclusive. Default: 5.
   */
  limit?: number;
  /**
   * Optional business segment filter.
   * Valid values: "B2B", "B2C".
   */
  business_type?: BusinessType;
}
