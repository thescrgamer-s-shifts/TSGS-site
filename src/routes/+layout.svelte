<script>
    import "../../static/style.css"
    import Navbar from "./navbar.svelte"
    import Footer from "./footer.svelte"
    import Hero from "./Hero.svelte"
</script>

<Navbar />
<Hero />
<slot />
<Footer />