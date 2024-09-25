<script>
  import { page } from '$app/stores';

  const tabs = ['Models', 'Agents', 'Tools', 'Pipelines', 'Projects'];
</script>

<nav class="tab-navigation">
  {#each tabs as tab}
    <a
      href="/{tab.toLowerCase()}"
      class:active={$page.url.pathname === `/${tab.toLowerCase()}` || ($page.url.pathname === '/' && tab === 'Models')}
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
    cursor: pointer;
    margin-right: -2px;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
  }

  a:last-child {
    margin-right: 0;
  }

  a.active {
    background: var(--text-color);
    color: var(--background-color);
  }
</style>