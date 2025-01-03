<script>
    import { language } from '../helpers/languageStore'
    import { languages } from '../helpers/languages'

    export let currentLanguage

    // State to toggle dropdown visibility
    let showDropdown = false;

    // Function to change language
    function setLanguage(lang) {
        language.set(lang)
    }

    // Toggle dropdown visibility
    function toggleDropdown() {
        showDropdown = !showDropdown;
    }
</script>

<div class="flag-component">
    <div class="dropdown">
        <!-- Button to open/close the dropdown -->
        <button class="dropbtn" on:click={toggleDropdown} aria-label="Change language">
            <img
                src={languages[currentLanguage].flag}
                alt={languages[currentLanguage].name}
                class="flag"
            />
        </button>

        <!-- Dropdown content that is toggled -->
        <ul class="dropdown-content" class:show={showDropdown}>
            {#each Object.keys(languages) as lang}
                <li>
                    <button on:click={() => setLanguage(lang)} aria-label={`Select ${languages[lang].name}`}>
                        <img
                            src={languages[lang].flag}
                            alt={languages[lang].name}
                            class="flag"
                        />
                    </button>
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    /* Dropdown button rotates when open */
    /* .dropdown:hover .dropbtn img {
        transform: rotate(180deg);
    } */
</style>
