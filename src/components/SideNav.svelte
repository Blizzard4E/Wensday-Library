<script>
    import { page } from '$app/stores'

    let categories = [
        'Fiction',
        'Story'
    ]

    $page.url.searchParams.get('ref')
    let showSideNav = false;
</script>

<nav>
    <button class="menu-btn" on:click={() => showSideNav = !showSideNav }>
        <img src="/images/menu_btn.png" alt="">
    </button>
    <div class="black-paint" class:fadeIn={showSideNav} class:fadeOut={!showSideNav}>
        <div class="bg">
            <img src="/images/menu_bg.png" alt="">
        </div>
        <div class="menu">
            <a href="/search">Books</a>
            <a href="/profile">Profile</a>
            <a>Categories</a>
            <ul>
                {#each categories as category}
                <li>
                    <div class="pointer"></div>
                    <h2><a href="/search?category={category}">{category}</a></h2>
                </li>
                {/each}
            </ul>
        </div>
        <div class="black-gradient"></div>
    </div>
</nav>

<style lang="scss">
    .black-paint {
        opacity: 0;
    }
    .fadeIn {
        pointer-events: auto;
        transition: 0.6s ease-out;
        opacity: 1;
    }
    .fadeOut {
        pointer-events: none;
        transition: 0.6s ease-in-out;
        opacity: 0;
    }
    .black-gradient {
        position: absolute;
        bottom: -5rem;
        left: -8rem;
        background: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, .4), rgba(0, 0, 0, .8), rgba(0, 0, 0, 1));
        height: 20rem;
        z-index: 7;
        width: 110vw;
        pointer-events: none;
    }
    .menu-btn {
        cursor: pointer;
        position: absolute;
        top:1rem;
        left: 7vw;
        border: none;
        background: none;
        z-index: 7;

        img {
            width: 40px;
        }
    }
    nav {
        position: absolute;
        top: 0;
        left: 0;
        height: 650px;
        z-index: 3;
    }
    ul {
        margin-top: 2rem;
        overflow: scroll;
        margin-left: 2.5rem;
        min-height: 20rem;
        max-height: 20rem;
        li {
            margin-top: 1rem;
            display: flex;
            align-items: end;
        }
    }
    ul::-webkit-scrollbar {
        display: none;
    }
    .menu {
        position: absolute;
        z-index: 3;
        margin-left: 7vw;
        display: grid;
        .pointer {
            width: 30px;
            height: 35px;
            border-left: .3rem solid #8D8686;
            border-bottom: .3rem solid #8D8686;
            transform: translateY(-.6rem);
            margin-right: .75rem;
        }

        h2 {
            font-weight: normal;
            font-family: 'GlacialIndifference-Bold', sans-serif;
            color: white;
            text-transform: uppercase;
            font-size: 1.5rem;
            letter-spacing: .5rem;
        }
    }
    a {
        margin-top: 3rem;
        text-decoration: none;
        font-weight: normal;
        font-family: 'GlacialIndifference-Bold', sans-serif;
        color: white;
        text-transform: uppercase;
        font-size: 2.5rem;
        letter-spacing: .75rem;

        &:first-child {
            margin-top: 6rem;
        }
    }
    .bg {
        width: 80vw;
        position: absolute;

        img {
            pointer-events: none;
            display: block;
            width: 150%;
            transform: translate(-10%,-35%) rotate(-45deg);
        }
    }
</style>