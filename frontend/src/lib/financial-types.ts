import { z } from "zod";

export const OperationTypeSchema = z.enum(["income", "outcome"]);
export const CategorySchema = z.enum([
  "suppliers",
  "sales",
  "operational",
  "administrative",
  "others",
]);
export const BusinessTypeSchema = z.enum(["B2B", "B2C"]);

export const FinancialMovementSchema = z.object({
  // API sends date-like strings; enforce parseable values at runtime.
  create_date: z
    .string()
    .min(1)
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "create_date must be a valid date string",
    }),
  amount: z.number().finite(),
  operation_type: OperationTypeSchema,
  category: CategorySchema,
  business_type: BusinessTypeSchema,
});

export const FinancialMovementsSchema = z.array(FinancialMovementSchema);

export type OperationType = z.infer<typeof OperationTypeSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type BusinessType = z.infer<typeof BusinessTypeSchema>;
export type FinancialMovement = z.infer<typeof FinancialMovementSchema>;

export interface KPIMetrics {
  totalIncome: number;
  totalOutcome: number;
  profit: number;
  profitPercent: number;
}

export interface MonthlyDataPoint {
  month: string;
  income: number;
  outcome: number;
  profitPercent: number;
}

export function parseFinancialMovements(input: unknown): FinancialMovement[] {
  return FinancialMovementsSchema.parse(input);
}
