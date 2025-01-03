<script>
    import { languages } from '../helpers/languages'
    export let currentLanguage
</script>

<section class="section__container journey__container" id="tour">
    <h2 class="section__header">{languages[currentLanguage].journey.header}</h2>
    <p class="section__description">
        {languages[currentLanguage].journey.description}
    </p>
    <div class="journey__grid">
        {#each languages[currentLanguage].journey.cards as { title, subtitle, text }}
            <div class="journey__card">
                <div class="journey__card__bg">
                    <span><i class="ri-bookmark-3-line"></i></span>
                    <h4>{title}</h4>
                </div>
                <div class="journey__card__content">
                    <span><i class="ri-bookmark-3-line"></i></span>
                    <h4>{subtitle}</h4>
                    <p>{text}</p>
                </div>
            </div>
        {/each}
    </div>    
</section>
