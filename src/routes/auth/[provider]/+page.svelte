<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(async () => {
    const provider = $page.params.provider;
    const code = $page.url.searchParams.get('code');

    if (code) {
      try {
        const response = await fetch(`/api/auth/${provider}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        if (response.ok) {
          const data = await response.json();
          // Store the token in localStorage or a more secure place
          localStorage.setItem('token', data.access_token);
          goto('/dashboard');
        } else {
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('Error during authentication', error);
      }
    }
  });
</script>

<p>Authenticating...</p>