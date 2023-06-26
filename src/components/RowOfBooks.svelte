<script>
    import Book from "./Book.svelte";
    import fakeData from '../FakeAPIData/books.json'
    import { onMount } from "svelte";
    import { apiUrl } from "../store";
    let currentPos = 0;
    let offset = 35.5;
    let books = [];
    
    function nextSlide() {
        currentPos -= offset;
        console.log(currentPos)
    }
    function prevSlide() {
        currentPos += offset;
        console.log(currentPos)
    }
    // books = fakeData;

    onMount(async () => {
        const res = await fetch(`${apiUrl}/book/all`);
        const data = await res.json();
        books = [...data.books]
    })
</script>
<div class="carousel">
    <button class="arrow-left" on:click={() => prevSlide()} class:hide={currentPos == 0}>
        <img src="images/right-chevron.png" alt="">
    </button>
    <button class="arrow-right" on:click={() => nextSlide()} class:hide={currentPos <= -offset*(books.length - 3)}>
        <img src="images/right-chevron.png" alt="">
    </button>
    <div class="slides">
        <ul style="transform: translateX({currentPos}%)">
            {#each  books as book}
                <Book book={book}/>
            {/each}
        </ul>
    </div>
</div>


<style lang="scss">
    .hide {
        display: none;
    }
    .carousel {
        overflow: hidden;
        position: relative;
        height: 100%;
        margin-top: 2rem;
        
        button {
            cursor: pointer;
            user-select: none;
            position: absolute;
            top: 20vh;
            border: none;
            background: none;
            opacity: 1;
            transition: .25s ease-in-out;

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
        .slides {
            overflow-x: hidden;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            width: calc((320px * 3 + 7rem * 2 + 2rem));
        }
        ul {
            display: flex;
            flex-wrap: nowrap;
            column-gap: 7rem;
            transition: .25s ease-in-out;
        }
    }
</style>