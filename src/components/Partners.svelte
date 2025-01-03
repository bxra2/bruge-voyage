<script>
    import { airlineImages1, airlineImages2 } from '../helpers/Routes'
    export let currentLanguage

</script>

<section>
    <h2 class="section__header">Our Partners</h2>
    <div class="logos__marquee loop_right">
        <div class="marquee__logos">
            {#each airlineImages1 as { src, alt, height, width, fit }}
                <div class="partner">
                    <img style=" {fit}" {src} {alt} {height} {width} />
                    <div class="hover-text">{alt}</div>
                </div>
            {/each}
        </div>
    </div>
    <br /><br />
    <div class="logos__marquee">
        <div class="marquee__logos loop_left">
            {#each airlineImages2 as { src, alt, width, height, fit }}
                <div class="partner">
                    <img style=" {fit}" {src} {alt} {width} {height} />
                    <div class="hover-text">{alt}</div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .hover-text {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100px;
        text-align: center;
        background-color: rgba(18, 18, 18, 0.8);
        color: white;
        padding: 2px;
        font-size: 12px;
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 5px;
    }

    .partner {
        position: relative;
    }

    .partner:hover .hover-text {
        opacity: 0.7;
    }

    .partner:hover img {
        opacity: 1;
    }

    .marquee__logos {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        min-width: 130%;
    }

    .logos__marquee {
        display: flex;
        overflow-x: hidden;
        user-select: none;
    }

    .loop_right {
        animation: loopRight 20s linear infinite;
    }

    .loop_left {
        animation: loopLeft 20s linear infinite;
    }
    .marquee__logos img {
        display: block;
        margin-inline: 2rem;
    }

    @keyframes loopRight {
        from {
            transform: translateX(90%);
        }
        to {
            transform: translateX(-10%);
        }
    }
    @keyframes loopLeft {
        from {
            transform: translateX(-90%);
        }
        to {
            transform: translateX(10%);
        }
    }
</style>
