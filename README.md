# Gensei

Gensei is a powerful AI orchestration platform that allows users to create, manage, and deploy AI models, agents, tools, and pipelines.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with Google and GitHub OAuth
- Create and manage AI models
- Design and deploy AI agents
- Integrate various AI tools
- Build complex AI pipelines
- Organize work with projects
- Responsive and intuitive user interface

## Tech Stack

- Frontend: Svelte with SvelteKit
- Backend: FastAPI (Python)
- Database: PostgreSQL
- ORM: SQLAlchemy
- Authentication: OAuth 2.0
- API Documentation: Swagger UI
- Containerization: Docker
- CI/CD: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Python (v3.9 or later)
- PostgreSQL
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/gensei.git
   cd gensei
   ```

2. Set up the backend:
   ```
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Set up the frontend:
   ```
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the root directory and add necessary environment variables:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5433/gensei
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

5. Initialize the database:
   ```
   cd ../backend
   alembic upgrade head
   ```

## Usage

1. Start the backend server:
   ```
   cd backend
   uvicorn main:app --reload
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`


## Deployment

1. Build the dev server
   ```
   cd frontend
   npm run dev
   ```

## License

This project is licensed under the MIT License 