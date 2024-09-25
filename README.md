# Gensei - GenAI Learning Platform

Gensei is a GenAI learning platform that allows users to create, manage, and interact with various AI models. The platform includes features for managing user profiles, AI models, agents, tools, projects, and more.

## Project Structure

The project is structured as follows:
- Frontend: Svelte with SvelteKit
- Backend: FastAPI
- Database: PostgreSQL (managed through SQLAlchemy)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/gensei.git
   cd gensei
   ```

2. Create and activate the Conda environment:
   ```sh
   conda env create -f environment.yml
   conda activate gensei
   ```

3. Install Node.js dependencies:
   ```sh
   npm install
   ```

4. Set up the database and run migrations:
   ```sh
   bash deploy/local_setup.sh
   ```

## Usage

1. Start the FastAPI backend server:
   ```sh
   uvicorn backend.main:app --reload
   ```

2. For development, start the Vite dev server:
   ```sh
   npm run dev
   ```

3. For production, build the Svelte app and start the server:
   ```sh
   npm run build
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- User Profile Management
- AI Model Management
- Agent Management
- Tool Management
- Project Management
- Dojo Environment for Training and Testing AI Models

## API Endpoints

The FastAPI backend provides the following endpoints:

- User Profile: `/api/userprofile/{user_id}`
- AI Models: `/api/genai_models/`
- Agents: `/api/agents/`
- Tools: `/api/tools/`
- Projects: `/api/projects/`
- Dojo: `/api/dojo/`

For detailed API documentation, run the backend server and visit `/docs`.

## Frontend Components

The Svelte frontend is organized into the following main components:

- Layout (`src/routes/+layout.svelte`): Main layout component
- TabNavigation (`src/lib/components/TabNavigation.svelte`): Navigation tabs
- ChatBar (`src/lib/components/ChatBar.svelte`): Chat interface
- Route Components:
  - Models (`src/routes/models/+page.svelte`)
  - Agents (`src/routes/agents/+page.svelte`)
  - Tools (`src/routes/tools/+page.svelte`)
  - Projects (`src/routes/projects/+page.svelte`)
  - Dojo (`src/routes/dojo/+page.svelte`)

State management is handled using Svelte stores (`src/lib/stores/`).

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

(gensei) primed@3Demon:~/localcode/gensei$ tree --filelimit 30
.
├── README.md
├── alembic
│   ├── __pycache__
│   │   └── env.cpython-39.pyc
│   └── env.py
├── alembic.ini
├── backend
│   ├── __pycache__
│   │   ├── config.cpython-39.pyc
│   │   ├── db.cpython-39.pyc
│   │   ├── dbmodels.cpython-39.pyc
│   │   ├── main.cpython-39.pyc
│   │   ├── models.cpython-39.pyc
│   │   └── schemas.cpython-39.pyc
│   ├── config.py
│   ├── db.py
│   ├── dbmodels.py
│   ├── main.py
│   ├── routers
│   │   ├── __pycache__
│   │   │   ├── agents.cpython-39.pyc
│   │   │   ├── aimodels.cpython-39.pyc
│   │   │   ├── dojo.cpython-39.pyc
│   │   │   ├── items.cpython-39.pyc
│   │   │   ├── models.cpython-39.pyc
│   │   │   ├── projects.cpython-39.pyc
│   │   │   ├── subscription.cpython-39.pyc
│   │   │   ├── tools.cpython-39.pyc
│   │   │   └── userprofile.cpython-39.pyc
│   │   ├── agents.py
│   │   ├── aimodels.py
│   │   ├── dojo.py
│   │   ├── items.py
│   │   ├── projects.py
│   │   ├── tools.py
│   │   └── userprofile.py
│   ├── schemas.py
│   └── server.js
├── context.md
├── deploy
│   ├── local_setup.sh
│   ├── production_deploy.sh
│   └── staging_deploy.sh
├── environment.yml
├── frontend
│   ├── public
│   │   ├── index.html
│   │   ├── js
│   │   └── styles
│   │       └── main.css
│   └── src
│       ├── App.js
│       ├── App.vue
│       ├── main.js
│       ├── modules
│       │   ├── agents.js
│       │   ├── aiModels.js
│       │   ├── chatBar.js
│       │   ├── darkMode.js
│       │   ├── demoHelper.js
│       │   ├── dojo.js
│       │   ├── pipelines.js
│       │   ├── projects.js
│       │   ├── resizeHandle.js
│       │   ├── sidebar.js
│       │   ├── subscription.js
│       │   ├── tabs.js
│       │   ├── tools.js
│       │   └── userProfile.js
│       ├── router
│       │   └── index.js
│       └── store
│           └── index.js
├── genseiUI.jpg
├── node_modules  [115 entries exceeds filelimit, not opening dir]
├── package-lock.json
├── package.json
├── requirements.txt
├── server.js
└── webpack.config.js

16 directories, 64 files