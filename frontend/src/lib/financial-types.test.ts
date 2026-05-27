import { describe, expect, it } from "vitest";
import { parseFinancialMovements } from "./financial-types";

describe("parseFinancialMovements", () => {
  it("accepts a valid financial movement payload", () => {
    const result = parseFinancialMovements([
      {
        create_date: "2024-03-01",
        amount: 1200,
        operation_type: "income",
        category: "sales",
        business_type: "B2B",
      },
    ]);

    expect(result).toHaveLength(1);
    expect(result[0].operation_type).toBe("income");
  });

  it("rejects invalid payloads", () => {
    expect(() =>
      parseFinancialMovements([
        {
          create_date: "not-a-date",
          amount: "1200",
          operation_type: "income",
          category: "sales",
          business_type: "B2B",
        },
      ]),
    ).toThrow();
  });
});
