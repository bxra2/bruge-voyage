<script>
    import { writable } from 'svelte/store'
    import { language } from './helpers/languageStore.js'

    import Navbar from './components/Navbar.svelte'
    import Hero from './components/Hero.svelte'
    import Destinations from './components/Destinations.svelte'
    import Journey from './components/Journey.svelte'
    import Showcase from './components/Showcase.svelte'
    import Banner from './components/Banner.svelte'
    import Partners from './components/Partners.svelte'
    import Discover from './components/Discover.svelte'
    import Client from './components/Client.svelte'
    import Footer from './components/Footer.svelte'
    import './app.css'

    let currentLanguage
    language.subscribe((value) => {
        currentLanguage = value
    })
</script>

<main>
    <Navbar {currentLanguage} />
    <Hero {currentLanguage} />
    <Destinations {currentLanguage}/>
    <Journey {currentLanguage}/>
    <Showcase {currentLanguage}/>
    <Banner {currentLanguage} />
    <Partners {currentLanguage}/>
    <Discover {currentLanguage}/>
    <Client {currentLanguage}/>
    <Footer {currentLanguage} />
</main>

<style>
    main {
        max-width: 100vw;
        overflow-x: hidden;
    }
</style>
