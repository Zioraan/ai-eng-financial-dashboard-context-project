# Product Overview

## What this project is
This project is a full-stack financial metrics dashboard used as an iteration baseline for AI-assisted development workflows.
It combines a React + TypeScript frontend with a FastAPI backend and uses deterministic mock financial movement data.

## Product purpose
- Provide an executive-style view of financial performance over time.
- Show key metrics for income, outcome, and profitability.
- Enable future iteration on analytics, filters, and reporting behaviors.
- Serve as a practical sandbox for defining agent rules and memory-bank practices.

## Core user value
- Quick visibility into financial health through KPI cards.
- Trend insight through income vs outcome and profit margin charts.
- Reliable demo behavior from seeded data generation.
- Easy local startup with Docker Compose and Vite proxy integration.

## Current product surface
- Backend endpoints for health, metrics listing, facets, summaries, top categories, period comparison, alerts, and business-type slices.
- Frontend dashboard page with header, KPI row, chart row, loading skeletons, and error handling.
- Utility-layer calculations for KPI totals and monthly aggregation on the frontend.

## Product constraints right now
- Data is mock-generated on request rather than persisted.
- Frontend currently consumes a base metrics endpoint and computes visual aggregates client-side.
- Reporting period label behavior and date handling need hardening for long-term correctness.
