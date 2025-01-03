<script>
    import { plane } from '../helpers/Routes'
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<header id="home">
    <div class="header__container">
        <div class="header__content">
            <p>
                Planification et vente des services de transport, d'hébergement,
                d'assurance et autres services de
            </p>
            <h1>{languages[currentLanguage].hero.slogan}</h1>
            <div class="header__btns">
                <button class="btn">Book A Trip Now</button>
                <!-- <a href="#">
                    <span><i class="ri-play-circle-fill"></i></span>
                </a> -->
            </div>
        </div>
        <div class="header__image">
            <img src={plane} alt="header" />
        </div>
    </div>
</header>
