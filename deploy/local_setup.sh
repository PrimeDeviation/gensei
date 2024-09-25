#!/bin/bash

# Activate the Conda environment
source activate gensei

# Set the environment (local or production)
export ENVIRONMENT=local

# Run database migrations
alembic upgrade head

# Seed initial data (if any)
# python backend/seed_data.py  # Commented out since the file does not exist

echo "Local setup completed."