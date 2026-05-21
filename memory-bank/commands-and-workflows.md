# Commands and Workflows

## Canonical local startup (recommended)
From repository root:

```bash
docker compose up --build
```

Service URLs:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- Backend API docs: http://localhost:8000/docs

## Frontend workflows
From `frontend/`:

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Test
```bash
npm test
```

### Test (watch)
```bash
npm run test:watch
```

### Test coverage
```bash
npm run test:coverage
```

## Backend workflows
From `backend/`:

### Install dependencies
```bash
pip install -r requirements.txt
```

### Run development API
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

### Run tests
```bash
pytest -q
```

### Run tests with coverage
```bash
pytest --cov=app --cov-report=term-missing
```

## Integrated workflow notes
- Frontend requests use `/api` and are proxied by Vite to backend service in dev.
- If backend target needs override, configure `VITE_API_BASE_URL` in frontend `.env`.
- Docker Compose is the preferred end-to-end path for consistent environment behavior.

## Practical troubleshooting notes
- If frontend tests fail with `vitest: not found`, run `npm install` in `frontend/`.
- If backend tests fail with missing FastAPI modules, run `pip install -r requirements.txt` in `backend/`.
- If ports are occupied, stop existing processes or remap ports in compose for local overrides.

## Recommended iteration workflow
1. Start stack with Docker Compose for baseline verification.
2. Make scoped change in frontend or backend.
3. Run app-specific lint and tests for changed area.
4. Run relevant integration smoke checks against running stack.
5. Update memory-bank and rule files when conventions or behavior changes.

## Command consistency policy reference
To align with project rules:
- Keep these commands synchronized with README and CI configuration.
- Treat this file as the operational source of truth for day-to-day contributor workflows.
