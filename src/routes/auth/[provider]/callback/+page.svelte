<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  onMount(async () => {
    const provider = $page.params.provider;
    const code = $page.url.searchParams.get('code');
    const code_verifier = sessionStorage.getItem(`${provider}_code_verifier`);

    if (code) {
      try {
        const response = await fetch(`/api/auth/${provider}/callback`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code, code_verifier }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Authentication successful', data);
          // Store the token or user data as needed
          localStorage.setItem('auth_token', data.access_token);
          // Redirect back to the settings page
          goto('/settings');
        } else {
          console.error('Authentication failed');
          goto('/settings?error=auth_failed');
        }
      } catch (error) {
        console.error('Error during authentication', error);
        goto('/settings?error=auth_error');
      }
    } else {
      console.error('Missing code');
      goto('/settings?error=missing_code');
    }
  });
</script>

<p>Processing authentication...</p>