const BASE_URL = 'http://localhost:3000/api'; // Update this line

export async function fetchModels() {
  const response = await fetch(`${BASE_URL}/models`);
  if (!response.ok) throw new Error('Failed to fetch models');
  return response.json();
}

export async function createModel(model) {
  const response = await fetch(`${BASE_URL}/models`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(model),
  });
  if (!response.ok) throw new Error('Failed to create model');
  return response.json();
}

export async function updateModel(id, model) {
  const response = await fetch(`${BASE_URL}/models/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(model),
  });
  if (!response.ok) throw new Error('Failed to update model');
  return response.json();
}

// Add other API functions here