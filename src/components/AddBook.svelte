<script>
    let languages = [
        'English',
        'French'
    ]
    let pickedLanguages = []

    let categories = [
        'Fiction',
        'Story'
    ]
    let pickedCategories = []

    let authors = [
        'John',
        'Tom'
    ]
    let pickedAuthors = []
</script>
<section class="admin">
    <div class="container">
        <div class="book">
            <h1>Book</h1>
            <div>
                <h2>Title</h2>
                <input type="text">
            </div>
            <div>
                <h2>Description</h2>
                <input type="text">
            </div>
            <div>
                <h2>Cover Image</h2>
                <input type="file" style="color: white;">
            </div>
            <div class="language">
                <h2>Language</h2>
                <ul>
                    {#each languages as language}
                        <li>
                            <input type="checkbox" bind:group={pickedLanguages} name="languages" value={language}>
                            {language}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="category">
                <h2>category</h2>
                <ul>
                    {#each categories as category}
                        <li>
                            <input type="checkbox" bind:group={pickedCategories} name="categories" value={category}>
                            {category}
                        </li>
                    {/each}
                </ul>
            </div>
            <div>
                <h2>Publish Year</h2>
                <input type="text">
            </div>
            <div>
                <h2>Series Title</h2>
                <input type="text">
            </div>
            <div>
                <h2>Volume</h2>
                <input type="text">
            </div>
            <div>
                <h2>Edition</h2>
                <input type="text">
            </div>
            <div>
                <h2>Number of Volume</h2>
                <input type="text">
            </div>
            <div>
                <h2>Number of Pages</h2>
                <input type="text">
            </div>
            <div class="authors">
                <h2>Author</h2>
                <ul>
                    {#each authors as author}
                        <li>
                            <input type="checkbox" bind:group={pickedAuthors} name="authors" value={author}>
                            {author}
                        </li>
                    {/each}
                </ul>
            </div>
            <div><button style="margin-top: 1rem;">Submit</button></div>
        </div>
    </div>
</section>
<style lang="scss">
    .language,.category,.authors {
        display: flex;
        margin-top: .75rem;
        ul {
            display: flex;
            flex-direction: column;
            max-height: 200px;
            overflow-y: auto;
            padding: 0 1rem;
            li {
                input {
                    width: 30px;
                }
                font-family: 'Poppins',sans-serif;
                color: white;
            }
        }
    }
    .admin {
        padding: 2rem 0;
        background-color: #533829;
        h1,h2,button {
            font-family: 'Poppins',sans-serif;
            color: white;
            font-weight: 600;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
        button { 
            cursor: pointer;
            margin: 0;
            font-size: 1.1rem;
            background-color:black;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
        }
        h2 {
            font-size: 1.2rem;
        }
        input {
            width: 400px;
            padding: .5rem;

            &:focus {
                outline: none;
            }
        }
        .balance {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>