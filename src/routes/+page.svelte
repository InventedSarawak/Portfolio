<script>
	import Hero from "../components/Hero.svelte";
    import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>
<main class="flex flex-col">
    <Header />
    <content>
        <Hero />
    </content>
    <Footer />
</main>