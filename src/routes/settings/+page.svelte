<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { discoveryRequest, processDiscoveryResponse, generateRandomCodeVerifier, calculatePKCECodeChallenge } from 'oauth4webapi';

  let user = {
    name: 'John Doe',
    email: 'john@example.com',
    googleConnected: false,
    githubConnected: false,
  };

  let darkMode = false;

  onMount(async () => {
    console.log('Google Client ID:', import.meta.env.VITE_GOOGLE_CLIENT_ID);
    console.log('GitHub Client ID:', import.meta.env.VITE_GITHUB_CLIENT_ID);
    
    // Check if we have just completed authentication
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      // Fetch user data using the token
      try {
        const response = await fetch('/api/user', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        if (response.ok) {
          const userData = await response.json();
          user = {
            ...user,
            ...userData,
            googleConnected: userData.oauth_provider === 'google',
            githubConnected: userData.oauth_provider === 'github'
          };
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  });

  async function connectWithProvider(provider) {
    console.log('Connecting with provider:', provider);
    
    try {
      const clientId = provider === 'google' ? import.meta.env.VITE_GOOGLE_CLIENT_ID : import.meta.env.VITE_GITHUB_CLIENT_ID;
      console.log(`Using client ID for ${provider}:`, clientId);

      if (!clientId) {
        throw new Error(`Client ID for ${provider} is not defined`);
      }

      let authorizationEndpoint;

      if (provider === 'google') {
        const issuer = new URL('https://accounts.google.com');
        const as = await discoveryRequest(issuer).then(response => processDiscoveryResponse(issuer, response));
        authorizationEndpoint = as.authorization_endpoint;
      } else {
        authorizationEndpoint = 'https://github.com/login/oauth/authorize';
      }

      const code_verifier = generateRandomCodeVerifier();
      const code_challenge = await calculatePKCECodeChallenge(code_verifier);
      const code_challenge_method = 'S256';

      const authorizationUrl = new URL(authorizationEndpoint);
      authorizationUrl.searchParams.set('client_id', clientId);
      authorizationUrl.searchParams.set('code_challenge', code_challenge);
      authorizationUrl.searchParams.set('code_challenge_method', code_challenge_method);
      authorizationUrl.searchParams.set('redirect_uri', `${window.location.origin}/auth/${provider}/callback`);
      authorizationUrl.searchParams.set('response_type', 'code');
      authorizationUrl.searchParams.set('scope', provider === 'google' ? 'openid email profile' : 'user:email');

      console.log('Authorization URL:', authorizationUrl.toString());

      sessionStorage.setItem(`${provider}_code_verifier`, code_verifier);

      window.location.assign(authorizationUrl);
    } catch (error) {
      console.error('Error in connectWithProvider:', error);
    }
  }

  function saveSettings() {
    // Implement save functionality
    console.log('Saving settings:', user);
  }

  function connectGoogle() {
    // Implement Google OAuth connection
    console.log('Connecting to Google');
    connectWithProvider('google');
  }

  function disconnectGoogle() {
    // Implement Google disconnection
    console.log('Disconnecting from Google');
    user.googleConnected = false;
  }

  function connectGithub() {
    // Implement GitHub OAuth connection
    console.log('Connecting to GitHub');
    connectWithProvider('github');
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
</script><div class="container">
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
        <button on:click={connectGoogle}>Connect with Google</button>
      {/if}

      {#if user.githubConnected}
        <button on:click={disconnectGithub} class="disconnect">Disconnect GitHub</button>
      {:else}
        <button on:click={connectGithub}>Connect with GitHub</button>
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

