<script>
  import { onMount } from 'svelte';
  import { fetchModels } from '$lib/api';

  let models = [];
  let error = null;

  onMount(async () => {
    try {
      models = await fetchModels();
    } catch (e) {
      error = e.message;
    }
  });
</script>

<h2>Models</h2>

{#if error}
  <p>Error: {error}</p>
{:else if models.length === 0}
  <p>Loading models...</p>
{:else}
  <ul>
    {#each models as model}
      <li>{model.name}</li>
    {/each}
  </ul>
{/if}

<style>
  /* Add any necessary styles */
</style>