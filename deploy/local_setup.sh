#!/bin/bash

# Load environment variables
set -a
source .env
set +a

# Install dependencies
pip install -r requirements.txt

# Set up the database
psql -c "CREATE DATABASE gensei_local;"
alembic upgrade head

# Start the development server
uvicorn backend.main:app --reload