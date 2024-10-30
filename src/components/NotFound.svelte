<script lang="ts">
    import { goto } from '$app/navigation';
	import SectionWrapper from './SectionWrapper.svelte';
    function goHome() {
      goto('/');
    }
</script>
  
<SectionWrapper id='NotFound'>
    <section class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <p class="text-xl mb-6">Page Not Found</p>
        <p class="text-xl mb-6">This page is in progress</p>
        <button on:click={goHome} 
          class="px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200">
          Go to Homepage
        </button>
    </section>
</SectionWrapper>
  
<style>
    section {
        text-align: center;
    }
</style>
  