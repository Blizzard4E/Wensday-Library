<script>
    import Book from "./Book.svelte";
    let currentPos = 0;
    let offset = 35.5
    function nextSlide() {
        currentPos -= offset;
        console.log(currentPos)
    }
    function prevSlide() {
        currentPos += offset;
        console.log(currentPos)
    }
</script>
<div class="carousel">
    <button class="arrow-left" on:click={() => prevSlide()} class:hide={currentPos == 0}>
        <img src="images/right-chevron.png" alt="">
    </button>
    <button class="arrow-right" on:click={() => nextSlide()} class:hide={currentPos <= -offset*7}>
        <img src="images/right-chevron.png" alt="">
    </button>
    <div class="slides">
        <ul style="transform: translateX({currentPos}%)">
            {#each  {length: 10} as _,item}
                <Book/>
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