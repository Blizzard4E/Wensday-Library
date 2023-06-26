<script>
    import Book from '../../components/Book.svelte'
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { apiUrl } from '../../store';
 
    const url = $page.url;

    let searchText = url.searchParams.get('name');
    let queryCategory = url.searchParams.get('category');

    let categoryClose = true;
    let categories = [];
    let book_results = []

    onMount(async () => {
        const res = await fetch(`${apiUrl}/category/all`);
        const data = await res.json();
        categories = [...data.categories]

        const res2 = await fetch(`${apiUrl}/book/all`);
        const data2 = await res2.json();
        book_results = [...data2.books]
    })

    let pickedCategories = []

    if(searchText == null) {
        searchText = ""
    }

    if(queryCategory != "") {
        pickedCategories.push(queryCategory)
    }

    let authorClose = true;
    let authors = [
        'John',
        'Tom'
    ]
    let pickedAuthors = []

    let languageClose = true;
    let languages = [
        'English',
        'French'
    ]
    let pickedLanguages = []

</script>
<main>
    <div class="container">
        <h1>Search results for "<span>{searchText}</span>"</h1>
        <div class="filters">
            <div class="filter">
                <button on:click={() => {categoryClose = !categoryClose}}>
                    Filter by Categories
                    <img class:upside-down={categoryClose == true} src="../../images/down.png" alt="">
                </button>
                <ul class="dropdown" class:close={categoryClose == true}>
                    {#each categories as category}
                        <li>
                            <input type="checkbox" bind:group={pickedCategories} name="categories" value={category?.name}>
                            {category?.name}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="filter">
                <button on:click={() => {authorClose = !authorClose}}>
                    Filter by Authors
                    <img class:upside-down={authorClose == true} src="../../images/down.png" alt="">
                </button>
                <ul class="dropdown" class:close={authorClose == true}>
                    {#each authors as author}
                        <li>
                            <input type="checkbox" bind:group={pickedAuthors} name="authors" value={author}>
                            {author}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="filter">
                <button on:click={() => {languageClose = !languageClose}}>
                    Filter by Languages
                    <img class:upside-down={languageClose == true} src="../../images/down.png" alt="">
                </button>
                <ul class="dropdown" class:close={languageClose == true}>
                    {#each languages as language}
                        <li>
                            <input type="checkbox" bind:group={pickedLanguages} name="languages" value={language}>
                            {language}
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
        <ul>
            {#each book_results as book}
                <Book book={book}/>
            {/each}
        </ul>
    </div>
</main>
<style lang="scss">
    .filters {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        .filter {
            width: 300px;
            
            button {
                display: flex;
                width: 100%;
                font-family: 'GlacialIndifference-Regular',sans-serif;
                letter-spacing: 0.3rem;
                font-size: 1.1rem;
                padding: 0.3rem;
                justify-content: center;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                    display: block;
                    transition: .25s ease-in-out;
                }
                .upside-down {
                    transform: rotate(-180deg);
                }
            }   
        }
    }
    .dropdown { 
        display: grid;
        grid-template-columns: 1fr;
        max-height: 200px;
        width: 100%;
        background-color: white;
        transition: .25s ease-in-out;   
        margin-bottom: 1rem;
        overflow: hidden;
        
        li {
            input {
                width: 30px;
            }
            font-family: 'Poppins',sans-serif;
            color: black;
        }
    }
    .close {
        max-height: 0;
    }
    main {
        background-color: #463B33;

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: center;
        }
    }
    h1 {
        font-family: 'GlacialIndifference-Regular',sans-serif;
        color: white;
        font-weight: normal;
        letter-spacing: 0.4rem;
        margin-bottom: 0.5rem;

        span {
            color: gold;
        }
    }
</style>