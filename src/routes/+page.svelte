<script>
    import Footer from "../components/Footer.svelte";

</script>
<section class="hero">
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
        <div class="carousel">
            <button class="arrow-left">
                <img src="images/right-chevron.png" alt="">
            </button>
            <button class="arrow-right">
                <img src="images/right-chevron.png" alt="">
            </button>
            <ul>
                <li>
                    <div class="bg">
                        <h1>GeNERATION Z MAGAZINE ISSUE 4</h1>
                        <img src="images/genz.jpg" alt="">
                    </div>
                    <p>Generation Z magazine is Cambodia’s student-run magazine, calling for research articles from university and high school students.</p>
                </li>
                <li>
                    <div class="bg">
                        <h1>WhO Move My Cheese?</h1>
                        <img src="images/cheese.jpg" alt="">
                    </div>
                    <p>t is an amusing and enlightening story of four characters who live in a "Maze" and look for "Cheese" to nourish them and make them happy.</p>
                </li>
                <li>
                    <div class="bg">
                        <h1>The tale of ParaGon</h1>
                        <img src="images/pa.jpeg" alt="">
                    </div>
                    <p>Ever the daredevils, they’ve gone to seek adventure in the capital city of Grandin, and Randi can’t help but feel left behind.</p>
                </li>
            </ul>
        </div>
    </section>
    <section class="naruto">
        <div class="black-bar"></div>
        <div class="grid container">
            <img src="images/naruto_panel_1_pc.webp" alt="">
            <p>“Books are <br> a uniquely <br> portable magic.”</p>
        </div>
    </section>
</div>
<Footer/>

<style lang="scss">
    .brown-wrap {
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
            width: 100%;
            z-index: 1;
        }
    }
    .hero {
        display: grid;
        grid-template-columns: 60% 40%;
        height: 85vh;
        background: linear-gradient(rgba(41, 23, 23, 0.6),rgba(41, 23, 23, 0.6)), url('images/paragon.jpeg');
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

        .carousel {
            position: relative;
            height: 65vh;
            margin-top: 2rem;
            
            button {
                user-select: none;
                position: absolute;
                top: 20vh;
                border: none;
                background: none;

                img {
                    width: 80px;
                }
            }
            .arrow-left {
                scale: (-1);
                left: 8rem;
            }
            .arrow-right {
                right: 8rem;
            }

            ul {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                column-gap: 7rem;

                li {
                    width: 320px;
                    position: relative;

                    .bg {
                        background-color: rgba(0, 0, 0, 0.25);
                    }

                    h1 {
                        text-align: start;
                        width: 50%;
                        text-transform: uppercase;
                        position: absolute;
                        top: .75rem;
                        left: .5rem;
                        z-index: 1;
                        font-family: 'Poppins',sans-serif;
                        font-weight: 600;
                        font-size: 1.5rem;
                        line-height: 2.5rem;
                    }

                    img {
                        transform: translate(1.5rem, 1rem);
                        display: block;
                        width: 100%;
                        aspect-ratio: 9/12.5;
                        object-fit: cover;
                        margin-bottom: 1rem;
                    }

                    p {
                        margin-top: 2rem;
                        font-size: 1.05rem;
                        font-family: 'Poppins',sans-serif;
                        font-weight: lighter;
                        color: white;
                    }
                }
            }
        }
    }
</style>