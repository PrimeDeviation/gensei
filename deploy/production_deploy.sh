#!/bin/bash

# Pull the latest changes
git pull origin main

# Update Conda environment
conda env update -f environment.yml

# Activate Conda environment
conda activate gensei

# Run database migrations
alembic upgrade head

# Restart the application server (assuming you're using systemd)
sudo systemctl restart gensei-production