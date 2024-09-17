# Gensei - GenAI Learning Platform

Gensei is an interactive web application designed to teach users about Generative AI models and agents. It provides a hands-on learning experience for configuring models, building agents, and creating AI pipelines in a martial arts-themed environment.

## Features

- **Model Configuration**: Explore and configure various LLM models for use in agents.
- **Agent Builder**: Create and customize agents with different types, classes, and roles.
- **Tool Integration**: Configure and manage integrated tools like GitHub, databases, Google Drive/Docs, Obsidian, Jira, etc.
- **Dojo**: Drag-and-drop interface for creating AI pipelines and training sequences.
- **Project Management**: Save and manage your AI projects.
- **Interactive Chat**: Test your models and agents in real-time.
- **Flexible Usage**: Free for users with their own API keys, with subscription options for additional features and token allocation.

## Technology Stack

- Frontend: HTML, CSS, JavaScript (ES6+)
- Backend: Python (FastAPI)
- Database: PostgreSQL
- AI Frameworks: LangGraph, Autogen, CrewAI, and custom implementations
- Payment Processing: Stripe

## Setup

### Prerequisites

- Anaconda or Miniconda installed on your system
- PostgreSQL installed and running

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/gensei.git
   cd gensei
   ```

2. Create and activate the Conda environment:
   ```
   conda env create -f environment.yml
   conda activate gensei
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   DATABASE_URL=postgresql://username:password@localhost/gensei_local
   STRIPE_SECRET_KEY=your_stripe_secret_key
   JWT_SECRET=your_jwt_secret
   ```

4. Run the local setup script:
   ```
   bash deploy/local_setup.sh
   ```

5. Access the application at `http://localhost:8000`

## Deployment

### Staging Deployment

1. Push changes to the `staging` branch
2. The GitHub Action will automatically deploy to the staging server

### Production Deployment

1. Push changes to the `main` branch
2. The GitHub Action will automatically deploy to the production server

## Contributing

Contributions are welcome! Please read our contributing guidelines (to be added) before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the creators and contributors of LangGraph, Autogen, and CrewAI for their amazing frameworks.
- Special thanks to the open-source community for their continuous support and inspiration.