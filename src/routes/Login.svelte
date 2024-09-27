<script>
  import { goto } from '$app/navigation';

  function loginWithGoogle() {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
      scope=https%3A//www.googleapis.com/auth/userinfo.profile%20https%3A//www.googleapis.com/auth/userinfo.email&
      access_type=offline&
      include_granted_scopes=true&
      response_type=code&
      state=state_parameter_passthrough_value&
      redirect_uri=${encodeURIComponent(window.location.origin + '/auth/google')}&
      client_id=YOUR_GOOGLE_CLIENT_ID`;
  }

  function loginWithGithub() {
    window.location.href = `https://github.com/login/oauth/authorize?
      client_id=YOUR_GITHUB_CLIENT_ID&
      redirect_uri=${encodeURIComponent(window.location.origin + '/auth/github')}`;
  }
</script>

<button on:click={loginWithGoogle}>Login with Google</button>
<button on:click={loginWithGithub}>Login with GitHub</button>