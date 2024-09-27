<script>
  import { onMount } from 'svelte';
  import { fetchModels, createModel, updateModel } from '$lib/api.js';

  let models = [];
  let newModel = {
    endpoint: '',
    version: '',
    name: '',
    api_key: ''
  };
  let isLoading = true;
  let error = null;

  onMount(async () => {
    try {
      models = await fetchModels();
    } catch (e) {
      error = e.message;
    } finally {
      isLoading = false;
    }
  });

  async function saveModel() {
    try {
      const savedModel = await createModel(newModel);
      models = [...models, savedModel];
      newModel = { endpoint: '', version: '', name: '', api_key: '' };
    } catch (e) {
      error = e.message;
    }
  }

  async function editModel(model) {
    try {
      const updatedModel = await updateModel(model.id, model);
      models = models.map(m => m.id === updatedModel.id ? updatedModel : m);
    } catch (e) {
      error = e.message;
    }
  }
</script>

<div class="container">
  <div class="models-container">
    <section class="create-model">
      <h2>Create New Model</h2>
      <form on:submit|preventDefault={saveModel}>
        <input type="text" bind:value={newModel.endpoint} placeholder="https://yourendpoint.openai.azure.com/" required>
        <input type="text" bind:value={newModel.version} placeholder="2024-03-06" required>
        <input type="text" bind:value={newModel.name} placeholder="Model Name" required>
        <input type="password" bind:value={newModel.api_key} placeholder="sk-******************" required>
        <button type="submit">Save</button>
      </form>
    </section>

    <section class="models-list">
      <h2>Models</h2>
      {#if isLoading}
        <p>Loading models...</p>
      {:else if error}
        <p class="error">{error}</p>
      {:else}
        <table>
          <thead>
            <tr>
              <th>Model Name</th>
              <th>Model Version</th>
              <th>Model Endpoint</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {#each models as model}
              <tr>
                <td>{model.name}</td>
                <td>{model.version}</td>
                <td>{model.endpoint}</td>
                <td><button on:click={() => editModel(model)}>Edit</button></td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    </section>
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .models-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
  }

  .create-model, .models-list {
    width: 100%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, button {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
  }

  button {
    background-color: var(--background-color);
    color: var(--text-color);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    text-align: left;
    padding: 0.5rem;
    border-bottom: 1px solid var(--border-color);
  }

  th {
    font-weight: bold;
  }

  .models-list {
    overflow-x: auto;
  }

  .error {
    color: red;
  }
</style>