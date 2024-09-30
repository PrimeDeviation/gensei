<script>
  import { goto } from '$app/navigation';

  function loginWithGoogle() {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
      scope=https%3A//www.googleapis.com/auth/userinfo.profile%20https%3A//www.googleapis.com/auth/userinfo.email&
      access_type=offline&
      include_granted_scopes=true&
      response_type=code&
      state=state_parameter_passthrough_value&
      redirect_uri=${encodeURIComponent('http://localhost:5173/auth/google/callback')}&
      client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}`;
  }

  function loginWithGithub() {
    window.location.href = `https://github.com/login/oauth/authorize?
      client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&
      redirect_uri=${encodeURIComponent('http://localhost:5173/auth/github/callback')}`;
  }
</script>

<div class="login-container">
  <h1>Login</h1>
  <button on:click={loginWithGoogle}>Login with Google</button>
  <button on:click={loginWithGithub}>Login with GitHub</button>
</div>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>