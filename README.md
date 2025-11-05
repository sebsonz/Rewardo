# Rewardo - MERN Advanced (ZIP)
This archive contains the full Rewardo MVP (MERN stack) â€” advanced features:
- Authentication (JWT)
- Points system
- Offers / partner offers simulation
- Localization by country
- Admin panel (basic)
- Docker support (optional) + docker-compose for MongoDB

Quick start (local)
Backend:
  cd backend
  copy .env.example .env
  npm install
  npm run dev

Frontend:
  cd frontend
  npm install
  npm run dev

Docker (optional):
  docker-compose up --build

Note: replace JWT secret and MONGO_URI in backend/.env before running in production.
