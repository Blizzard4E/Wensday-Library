<script>
    import { onMount } from "svelte";
    import AddAuthor from "../components/AddAuthor.svelte";
    import AddCategory from "../components/AddCategory.svelte";
    import AddPublisher from "../components/AddPublisher.svelte";
    import AddLanguage from "../components/AddLanguage.svelte";
    import RowOfBooks from "../components/RowOfBooks.svelte";
    import SideNav from "../components/SideNav.svelte";
    import UserEdit from "../components/UserEdit.svelte";
    import { admin, user } from "../store.js"
    import { goto } from "$app/navigation"
    import { browser } from "$app/environment"

    let adminInfo;

    if (browser) {
        adminInfo = JSON.parse(localStorage.getItem('user_data'));
    }

	admin.subscribe(value => {
		adminInfo = value;
	});

</script>

{#if adminInfo != null}
    <div class="admin">
        <UserEdit/>
        <AddAuthor/>
        <AddPublisher/>
        <AddCategory/>
        <AddLanguage/>
    </div>
{:else}
<SideNav/>
<section class="hero" style="background: linear-gradient(rgba(41, 23, 23, 0.6),rgba(41, 23, 23, 0.6)), url('images/paragon.jpeg');">
    <div class="hero-text">
        <div>
            <h1>Wensday Library</h1>
            <p>is a comfortable, quiet place to study in. It hosts a vast collection of books, journals and magazines related to English pedagogy, science, technology, business, marketing, management, history, engineering, economics and administrative science.</p>
        </div>
        <div class="go-down">
            <a href="#new-books">
                <img src="/images/circle-button.png" alt="">
            </a>
        </div>
    </div>
    <div class="hero-img">
        <img src="/images/davinci.jpg" alt="">
    </div>
</section>

<div class="brown-wrap">
    <section id="new-books">
        <h1>New Books</h1>
        <h2>Explore the newest and most recently added books</h2>
        <RowOfBooks/>
    </section>
    <section class="naruto">
        <div class="black-bar"></div>
        <div class="grid container">
            <div style="display:flex;justify-content:end"><img src="images/naruto_panel_1_pc.webp" alt=""></div>
            <p>“Books are <br> a uniquely <br> portable magic.”</p>
        </div>
    </section>
</div>
{/if}

<style lang="scss">
    .admin {
        padding: 2rem 0;
        background-color: #533829;
    }
    .brown-wrap {
        position: relative;
        z-index: 4;
        overflow: hidden;
    }
    .naruto {
        position: relative;
        background-color: #463B33;
        height: 78vh;
        .black-bar {
            position: absolute;
            transform: rotate(-8deg) translateX(-5rem);
            background-color: black;
            width: 120vw;
            height: 60vh;
        }
        .grid {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -60%);
            display: grid;
            grid-template-columns: 1fr 1fr;

            p {
                margin-top: -2rem;
                margin-left: 1rem;
                font-family: 'Radley', serif;
                font-size: 3.5rem;
                color: white;
            }
        }
        img {
            width: 30vw;
            z-index: 1;
            opacity: .8;
        }
    }
    .hero {
        display: grid;
        grid-template-columns: 60% 40%;
        height: 650px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        .hero-text {
            position: relative;
            display: grid;
            place-items: center;

            h1 {
                font-family: 'Abril Fatface', sans-serif;
                font-size: 4rem;
                color: white;
                font-weight: normal;
                margin-bottom: 3rem;
            }
            p {
                font-size: 1.5rem;
                font-family: 'GlacialIndifference-Regular',sans-serif;
                width: 40vw;
                color: white;
            }


        }
        .hero-img {
            display: flex;
            justify-content: end;
            height: 100%;
            width: auto;
            overflow: hidden;
            img {
                object-position: top;
                object-fit: cover;
                display: block;
                width: 100%;
            }
        }
        .go-down {
            position: absolute;
            bottom: 2rem;
            right: 1rem;

            a {
                margin-right: 2rem;
                border: none;
                background: none;
                filter: invert(1);
                display: flex;
                justify-content: end;

                img {
                    display: block;
                    width: 100px;
                    aspect-ratio: 1/1;
                }
            }
        }
    }
    #new-books {
        background-color: #463B33;
        padding: 3rem 0;
        height: 850px;

        h1 {
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: lighter;
            color: white;
            font-size: 2.25rem;
        }
        h2 {
            text-align: center;
            font-family: 'Poppins', sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1.5rem;
        }
    }
</style>