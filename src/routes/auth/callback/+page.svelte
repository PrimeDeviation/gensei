<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Auth callback received:', window.location.search);
    // Here you'll handle the OAuth callback
  });
</script>

<h1>Processing authentication...</h1>