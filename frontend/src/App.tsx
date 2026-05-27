import { useEffect, useState } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { KPIRow } from "@/components/dashboard/kpi-row";
import { IncomeOutcomeChart } from "@/components/dashboard/income-outcome-chart";
import { ProfitPercentChart } from "@/components/dashboard/profit-percent-chart";
import {
  type KPIMetrics,
  type MonthlyDataPoint,
  parseFinancialMovements,
} from "@/lib/financial-types";
import { computeKPIs, computeMonthlyData } from "@/lib/financial-utils";
import { env } from "@/lib/env";
import { ZodError } from "zod";

const API_BASE_URL = env.VITE_API_BASE_URL;

async function fetchFinancialData(signal: AbortSignal) {
  const response = await fetch(`${API_BASE_URL}/api/metrics`, { signal });
  if (!response.ok) {
    throw new Error(`Failed to fetch financial data: ${response.status}`);
  }

  const payload: unknown = await response.json();
  return parseFinancialMovements(payload);
}

function App() {
  const [metrics, setMetrics] = useState<KPIMetrics | null>(null);
  const [monthlyData, setMonthlyData] = useState<MonthlyDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchFinancialData(controller.signal)
      .then((movements) => {
        setMetrics(computeKPIs(movements));
        setMonthlyData(computeMonthlyData(movements));
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        if (err instanceof ZodError) {
          setError("API response did not match expected financial data format.");
          return;
        }

        setError(
          "Could not load financial data. Check backend API availability.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <a
        href="#dashboard-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-card focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        Skip to dashboard content
      </a>
      <main
        id="dashboard-content"
        className="dark min-h-screen bg-background text-foreground"
        aria-busy={loading}
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            <DashboardHeader period="2024 - Full Year" />

            {error ? (
              <div
                role="alert"
                className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive-foreground"
              >
                {error}
              </div>
            ) : null}

            <section aria-labelledby="kpi-heading">
              <h2 id="kpi-heading" className="sr-only">
                Key performance indicators
              </h2>
              <KPIRow metrics={metrics} loading={loading} />
            </section>

            <section
              aria-labelledby="charts-heading"
              className="grid grid-cols-1 gap-4 xl:grid-cols-2"
            >
              <h2 id="charts-heading" className="sr-only">
                Financial charts
              </h2>
              <IncomeOutcomeChart data={monthlyData} loading={loading} />
              <ProfitPercentChart data={monthlyData} loading={loading} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
