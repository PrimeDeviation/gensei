<script>
  import '../app.css';
  import ChatBar from '$lib/components/ChatBar.svelte';
  import TabNavigation from '$lib/components/TabNavigation.svelte';
  import { onMount } from 'svelte';

  let isDarkMode = false;
  let chatWidth = 20;

  onMount(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      isDarkMode = JSON.parse(savedDarkMode);
    }
  });

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }

  function startResize(e) {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
  }

  function resize(e) {
    const app = document.getElementById('app');
    chatWidth = (e.clientX / app.offsetWidth) * 100;
  }

  function stopResize() {
    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
  }
</script>

<div id="app" class:dark-mode={isDarkMode} style="--chat-width: {chatWidth}%;">
  <div class="layout">
    <ChatBar />
    <div class="resizer" on:mousedown={startResize}></div>
    <main class="main-content">
      <TabNavigation />
      <div class="content-wrapper">
        <slot></slot>
      </div>
    </main>
  </div>
  <button class="dark-mode-toggle" on:click={toggleDarkMode}>
    {isDarkMode ? '☼' : '☾'}
  </button>
  <a href="/settings" class="settings-gear">⚙️</a>
</div>

<style>
  @font-face {
    font-family: 'Virgil';
    src: url('/fonts/Virgil.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  #app {
    font-family: 'Virgil', cursive, sans-serif;
    height: 100vh;
    width: 100vw;
    background-color: var(--background-color);
    color: var(--text-color);
    position: relative;
  }

  .layout {
    display: flex;
    height: 100%;
  }

  .resizer {
    width: 5px;
    cursor: ew-resize;
    background: var(--border-color);
  }

  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: calc(100% - var(--chat-width) - 5px);
    background-color: var(--background-color);
    color: var(--text-color);
  }

  .content-wrapper {
    flex-grow: 1;
    overflow-y: auto;
    padding: 20px;
  }

  .dark-mode-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: none;
    border: 2px solid var(--text-color);
    color: var(--text-color);
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s, color 0.3s;
  }

  .dark-mode-toggle:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  :global(.content-wrapper) {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  :global(.main-content) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .settings-gear {
    position: fixed;
    top: 70px;  /* Adjust this value to position it below the projects tab */
    right: 20px;
    font-size: 24px;
    text-decoration: none;
    color: var(--text-color);
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1000;
  }

  .settings-gear:hover {
    opacity: 0.8;
  }
</style>