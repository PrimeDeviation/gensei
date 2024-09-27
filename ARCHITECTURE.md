# Gensei Application Architecture

This document provides a comprehensive overview of the Gensei application's architecture, detailing both the frontend and backend components.

## Table of Contents

1. [Overview](#overview)
2. [Frontend Architecture](#frontend-architecture)
3. [Backend Architecture](#backend-architecture)
4. [Database](#database)
5. [Authentication](#authentication)
6. [API Integration](#api-integration)
7. [Deployment](#deployment)

## Overview

Gensei is a web application built with a Svelte frontend and a FastAPI backend, using PostgreSQL as the database. The application implements OAuth for authentication and integrates with various AI models.

## Frontend Architecture

The frontend is built using Svelte and SvelteKit, providing a responsive and interactive user interface.

### Directory Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── ChatBar.svelte
│   │   ├── TabNavigation.svelte
│   │   └── ... (other reusable components)
│   ├── stores/
│   │   └── ... (Svelte stores for state management)
│   └── utils/
│       └── ... (utility functions)
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── models/
│   │   └── +page.svelte
│   ├── agents/
│   │   └── +page.svelte
│   ├── tools/
│   │   └── +page.svelte
│   ├── pipelines/
│   │   └── +page.svelte
│   ├── projects/
│   │   └── +page.svelte
│   └── settings/
│       └── +page.svelte
└── app.html
```

### Key Components

- `src/lib/components/`: Contains reusable Svelte components.
- `src/routes/`: Contains the main pages and layouts of the application.
- `src/lib/stores/`: Manages application state using Svelte stores.
- `src/lib/utils/`: Contains utility functions used across the application.