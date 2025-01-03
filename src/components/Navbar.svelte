<script>
    import { languages } from '../helpers/languages'
    import Flag from './Flag.svelte'

    export let currentLanguage
</script>

<nav>
    <div class="nav__header">
        <div class="nav__logo">
            <a href="#" class="logo">BRUGE VOYAGES</a>
        </div>
        <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
        </div>
    </div>
    <ul class="nav__links" id="nav-links">
        <li>
            <a href="#home">
                {languages[currentLanguage].navbar.home.toUpperCase()}
            </a>
        </li>
        <li><a href="#about">{languages[currentLanguage].navbar.about.toUpperCase()}</a></li>
        <li><a href="#tour">{languages[currentLanguage].navbar.tour.toUpperCase()}</a></li>
        <li><a href="#package">{languages[currentLanguage].navbar.package.toUpperCase()}</a></li>
        <li><a href="#contact">{languages[currentLanguage].navbar.contact.toUpperCase()}</a></li>
        <li><a href="#">{languages[currentLanguage].navbar.book.toUpperCase()}</a></li>
    </ul>
    <div class="nav__btns">
        <button class="btn">BOOK TRIP</button>
    </div>
    <Flag {currentLanguage} />
</nav>

<style>
    
</style>
