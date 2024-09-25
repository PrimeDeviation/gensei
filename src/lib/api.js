const BASE_URL = '/api';

export async function fetchModels() {
  const response = await fetch(`${BASE_URL}/aimodels/`);
  if (!response.ok) {
    throw new Error('Failed to fetch models');
  }
  return response.json();
}

// Add other API functions here