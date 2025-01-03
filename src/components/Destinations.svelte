<script>
    import { dest_1, dest_2, dest_3 } from '../helpers/Routes'
    export let currentLanguage
</script>

<section class="section__container destination__container" id="about">
    <h2 class="section__header">Popular Destination</h2>
    <p class="section__description">
        Discover the Most Loved Destinations Around the Globe
    </p>
    <div class="destination__grid">
        <div class="destination__card">
            <img src={dest_1} alt="destination" />
            <div class="destination__card__details">
                <div>
                    <h4>Tradition and Futurism</h4>
                    <p>New York City, USA</p>
                </div>
                <div class="destination__rating">
                    <span><i class="ri-star-fill"></i></span>
                    4.7
                </div>
            </div>
        </div>
        <div class="destination__card">
            <img src={dest_2} alt="destination" />
            <div class="destination__card__details">
                <div>
                    <h4>The City of Lights</h4>
                    <p>Paris, France</p>
                </div>
                <div class="destination__rating">
                    <span><i class="ri-star-fill"></i></span>
                    4.5
                </div>
            </div>
        </div>
        <div class="destination__card">
            <img src={dest_3} alt="destination" />
            <div class="destination__card__details">
                <div>
                    <h4>Island of the Gods</h4>
                    <p>Bali, Indonesia</p>
                </div>
                <div class="destination__rating">
                    <span><i class="ri-star-fill"></i></span>
                    4.8
                </div>
            </div>
        </div>
    </div>
</section>
