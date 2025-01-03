<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<footer id="contact">
    <div class="section__container footer__container">
        <div class="footer__col">
            <div class="footer__logo">
                <a href="#" class="logo">BRUGE VOYAGES</a>
            </div>
            <p>
               { languages[currentLanguage].footer.description}
            </p>
            <ul class="footer__socials">
                <li>
                    <a
                        href="https://www.facebook.com/p/Bruge-Voyage-100037505722371/"
                        ><i class="ri-facebook-fill"></i></a
                    >
                </li>
                <li>
                    <a href="#"><i class="ri-instagram-line"></i></a>
                </li>
                <li>
                    <a href="#"><i class="ri-youtube-line"></i></a>
                </li>
            </ul>
        </div>
        <div class="footer__col">
            <h4>Quick Links</h4>
            <ul class="footer__links">
                {#each languages[currentLanguage].footer.quick_links as { text, link }}
                    <li><a href={link}>{text}</a></li>
                {/each}
            </ul>
        </div>
        <div class="footer__col">
            <h4>Contact Us</h4>
            <ul class="footer__links">
                <li>
                    <a href="#">
                        <span><i class="ri-phone-fill"></i></span> +22233353400
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><i class="ri-record-mail-line"></i></span> brugetravel@gmail.com
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span><i class="ri-map-pin-2-fill"></i></span> 4249+WG Nouakchott,
                        Mauritania
                    </a>
                </li>
            </ul>
        </div>
        <div class="footer__col">
            <h4>{languages[currentLanguage].footer.subscribe.title}</h4>
            <form action="/">
                <input type="text" placeholder="{languages[currentLanguage].footer.subscribe.text}" />
                <button class="btn">{languages[currentLanguage].footer.subscribe.button_text}</button>
            </form>
        </div>
    </div>
    <div class="footer__bar">
        {languages[currentLanguage].footer.footer_bar.text}
    </div>
</footer>
