# TheMealDB Explorer (Java backend + React frontend)

This project contains two components:
1. **backend** - Java Spring Boot application that proxies and caches requests to TheMealDB API.
2. **frontend** - React (Vite) single-page app with a maroon-themed UI.

## Features
- Search meals by name
- Browse categories (list)
- Random meal button
- Meal details with ingredients, instructions, and YouTube embed
- Caching using Caffeine (in-memory) with expiry and max size
- RESTful endpoints under `/api/*`

## How to run

### Backend
Requirements: Java 17+, Maven

```bash
cd backend
mvn spring-boot:run
# or build: mvn package && java -jar target/themealdb-proxy-0.0.1-SNAPSHOT.jar
```

This starts the backend on port 8080. It proxies requests to TheMealDB API (uses `https://www.themealdb.com/api/json/v1/1`).

### Frontend
Requirements: Node 18+, npm

```bash
cd frontend
npm install
npm run dev
```

This starts the frontend on http://localhost:3000 and expects the backend at `http://localhost:8080/api`. You can change the API URL in `frontend/.env`.

## Notes & Extensibility
- Cache is configured in `backend/CacheConfig.java` using Caffeine; tweak `maximumSize` and `expireAfterWrite`.
- To add Redis, swap Spring Cache manager for RedisCacheManager and provide Redis configuration.
- The UI is intentionally simple and 'humanized' (friendly variable names, comments, clear layout). The theme uses maroon shades.

## Deliverables
- Source code for backend and frontend
- README with run instructions

Enjoy exploring meals! 🥘