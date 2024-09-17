#!/bin/bash

# Pull the latest changes
git pull origin main

# Install or update dependencies
pip install -r requirements.txt

# Run database migrations (if you're using them)
# alembic upgrade head

# Restart the application server (assuming you're using systemd)
sudo systemctl restart gensei-production