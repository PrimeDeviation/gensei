<script>
  import { onMount } from 'svelte';

  let user = {
    name: 'John Doe',
    email: 'john@example.com',
    googleConnected: false,
    githubConnected: false,
    // Add other user properties as needed
  };

  let darkMode = false; // Assume we have a global dark mode setting

  onMount(async () => {
    // Fetch user data from your API
    // This is a placeholder - replace with actual API call
    // user = await fetchUserData();
  });

  function saveSettings() {
    // Implement save functionality
    console.log('Saving settings:', user);
  }

  function connectGoogle() {
    // Implement Google OAuth connection
    console.log('Connecting to Google');
  }

  function disconnectGoogle() {
    // Implement Google disconnection
    console.log('Disconnecting from Google');
    user.googleConnected = false;
  }

  function connectGithub() {
    // Implement GitHub OAuth connection
    console.log('Connecting to GitHub');
  }

  function disconnectGithub() {
    // Implement GitHub disconnection
    console.log('Disconnecting from GitHub');
    user.githubConnected = false;
  }

  function toggleDarkMode() {
    darkMode = !darkMode;
    // Implement dark mode toggle functionality
    console.log('Dark mode:', darkMode);
  }
</script>

<div class="container">
  <h1>User Settings</h1>
  
  <section>
    <h2>Profile Information</h2>
    <form on:submit|preventDefault={saveSettings}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={user.name} required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={user.email} required>
      </div>
      <button type="submit">Save Profile</button>
    </form>
  </section>

  <section>
    <h2>Connected Accounts</h2>
    <div class="oauth-buttons">
      {#if user.googleConnected}
        <button on:click={disconnectGoogle} class="disconnect">Disconnect Google</button>
      {:else}
        <button on:click={connectGoogle}>Connect Google</button>
      {/if}

      {#if user.githubConnected}
        <button on:click={disconnectGithub} class="disconnect">Disconnect GitHub</button>
      {:else}
        <button on:click={connectGithub}>Connect GitHub</button>
      {/if}
    </div>
  </section>

  <section>
    <h2>Preferences</h2>
    <div class="form-group">
      <label>
        <input type="checkbox" bind:checked={darkMode} on:change={toggleDarkMode}>
        Dark Mode
      </label>
    </div>
    <!-- Add other global user configuration options here -->
  </section>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 20px;
  }

  h1, h2 {
    margin-bottom: 1rem;
  }

  section {
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--border-color);
  }

  button {
    background-color: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  button:hover {
    background-color: var(--text-color);
    color: var(--background-color);
  }

  .oauth-buttons {
    display: flex;
    gap: 1rem;
  }

  .disconnect {
    background-color: #ff4444;
    color: white;
  }

  .disconnect:hover {
    background-color: #cc0000;
  }
</style>