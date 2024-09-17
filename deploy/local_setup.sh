#!/bin/bash

# Load environment variables
set -a
source .env
set +a

# Create and activate Conda environment
conda env create -f environment.yml
conda activate gensei

# Set up the database
psql -c "CREATE DATABASE gensei_local;"
alembic upgrade head

# Start the development server
uvicorn backend.main:app --reload