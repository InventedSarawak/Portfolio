<script lang="ts">
	import { onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	
    let greetings = [
        "Photographer",
        "Designer",
        "Video Editor",
        "Photographer",
        "CTF Enthusiast",
        "ML Enthusiast",
        "Low Level Coder",
        "Frontend Developer"
    ];	let index = 0;
	let roller : number | undefined;
	let isGlowing = false;

	function startRolling() {
		isGlowing = true; // Start glowing
		roller = setInterval(() => {
			index = (index + 1) % greetings.length;
		}, 750);
	}

	function stopRolling() {
		clearInterval(roller);
		isGlowing = false; // Stop glowing
	}

	onDestroy(() => {
		clearInterval(roller);
	});
</script>

{#key index}
	<span
		transition:slide
		class="transition-shadow duration-300 ease-in-out text-5xl sm:text-6xl md:text-7xl lg:text-7xl max-w-[1200px] mx-auto w-full font-semibold text-indigo-400 block"
		class:isGlowing={"shadow-glow"}
		on:mouseenter={startRolling}
		on:mouseleave={stopRolling}
	>
		{greetings[index]}!
</span>
{/key}
