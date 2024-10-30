<script lang="ts">
	import NotFound from '../../components/NotFound.svelte';
    import '../../app.css';
	let { children } = $props();
</script>

{@render children()}

