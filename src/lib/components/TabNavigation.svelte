<script>
  import { page } from '$app/stores';
  import { onMount, afterUpdate } from 'svelte';

  const tabs = ['Models', 'Agents', 'Tools', 'Pipelines', 'Projects'];

  let currentPath = '';

  onMount(() => {
    currentPath = $page.url.pathname;
  });

  afterUpdate(() => {
    if (currentPath !== $page.url.pathname) {
      currentPath = $page.url.pathname;
      console.log('Route changed:', currentPath);
    }
  });
</script>

<nav class="tab-navigation">
  {#each tabs as tab}
    <a
      href="/{tab.toLowerCase()}"
      class="tab-link"
      class:tab-link-active={currentPath === `/${tab.toLowerCase()}` || (currentPath === '/' && tab === 'Models')}
    >
      {tab}
    </a>
  {/each}
</nav>

<style>
  .tab-navigation {
    display: flex;
    border-bottom: 2px solid var(--border-color);
  }

  a {
    flex: 1;
    padding: 10px 20px;
    border: 2px solid var(--border-color);
    background: var(--background-color);
    color: var(--text-color);
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
  }

  a:hover {
    background: var(--text-color);
    color: var(--background-color);
  }

  a.active {
    background: var(--text-color);
    color: var(--background-color);
  }

  .tab-link {
    /* ... existing styles ... */
  }

  .tab-link-active {
    background: var(--text-color);
    color: var(--background-color);
  }
</style>