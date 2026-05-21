# Tech Stack

## Frontend
- Framework: React 19
- Language: TypeScript
- Build tool: Vite 8
- Styling: Tailwind CSS v4 with CSS variable tokens
- Charting: Recharts
- UI utilities: class-variance-authority, clsx, tailwind-merge
- Icons: lucide-react
- Testing: Vitest
- Linting: ESLint with TypeScript + React hooks plugins

## Backend
- Framework: FastAPI
- Language: Python (container uses Python 3.13 slim image)
- Validation/modeling: Pydantic
- ASGI server: Uvicorn
- Debug support: debugpy
- Testing: pytest, httpx, FastAPI TestClient

## Infra and Tooling
- Orchestration: Docker Compose
- Frontend container: Node 24 Alpine
- Backend container: Python 3.13 slim
- Local integration: Vite dev server proxy routes /api to backend service
- Repository process support: project-level agent rules under .agents/rules and root validation checklist in RULES-TEST.md

## Key dependencies to track closely
- Frontend runtime: react, react-dom, recharts
- Frontend DX/testing: vite, vitest, typescript, eslint
- Backend runtime: fastapi, uvicorn
- Backend test/debug: pytest, pytest-cov, httpx, debugpy

## Notes for maintainability
- Dependency and base image pinning strategy should remain enforced by project rules.
- Shared date parsing and API contract consistency should be treated as cross-cutting concerns.
