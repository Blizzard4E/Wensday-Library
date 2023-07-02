<script>
    import { onMount } from "svelte";
    import { apiUrl } from "../store";
    import { admin } from "../store";
    import uploadImageToImgur from "../utils/uploadImageToImgur";

    let admin_info;

    admin.subscribe((value) => {
        admin_info = value;
    });

    let categories = [];
    let authors = [];
    let publishers = [];
    let languages = [];

    onMount(async () => {
        const res = await fetch(`${apiUrl}/category/all`);
        const data = await res.json();
        categories = [...data.categories];

        const res2 = await fetch(`${apiUrl}/author/all`);
        const data2 = await res2.json();
        authors = [...data2.authors];

        const res3 = await fetch(`${apiUrl}/publisher/all`);
        const data3 = await res3.json();
        publishers = [...data3.publishers];

        const res4 = await fetch(`${apiUrl}/language/all`);
        const data4 = await res4.json();
        languages = [...data4.languages];
    });

    let bookDetail = {
        book: {
            title: null,
            description: null,
            cover_image: null,
            language_id: null,
            author_id: null,
            has_active_borrow_requests: false,
            user_borrow_count: 0,
            category_id: null,
            add_by_admin_id: admin_info?.admin_id,
        },
        publication: {
            publish_year: null,
            series_title: null,
            volume: null,
            edition: null,
            number_of_volumes: null,
            number_of_pages: null,
            publisher_id: null,
        },
    };

    async function uploadImg(event) {
        const cover_image = await uploadImageToImgur(event);

        if (cover_image) {
            bookDetail.book.cover_image = cover_image;
        }
    }

    async function addBook() {
        const res = await fetch(`${apiUrl}/addBook`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookDetail),
        });

        const data = await res.json();

        if (res.status == 200) {
            bookDetail = {
                book: {
                    title: null,
                    description: null,
                    cover_image: null,
                    language_id: null,
                    author_id: null,
                    has_active_borrow_requests: false,
                    user_borrow_count: 0,
                    category_id: null,
                    add_by_admin_id: admin_info?.admin_id,
                },
                publication: {
                    publish_year: null,
                    series_title: null,
                    volume: null,
                    edition: null,
                    number_of_volumes: null,
                    number_of_pages: null,
                    publisher_id: null,
                },
            };
        }

        alert(data.message);
    }
</script>

<section class="admin">
    <div class="container">
        <div class="book">
            <h1>Book</h1>
            <div>
                <h2>Title</h2>
                <input type="text" bind:value={bookDetail.book.title} />
            </div>
            <div>
                <h2>Description</h2>
                <input type="text" bind:value={bookDetail.book.description} />
            </div>
            <div>
                <h2>Cover Image</h2>
                <input
                    on:change={uploadImg}
                    type="file"
                    style="color: white;"
                />
                {#if bookDetail.book.cover_image}
                    <img
                        src={bookDetail.book.cover_image}
                        alt="image_upload"
                        width="128px"
                        height="128px"
                    />
                {/if}
            </div>
            <div class="language">
                <h2>Language</h2>
                <ul>
                    {#each languages as language}
                        <li>
                            <input
                                type="radio"
                                bind:group={bookDetail.book.language_id}
                                name="languages"
                                value={language.language_id}
                            />
                            {language.language}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="category">
                <h2>category</h2>
                <ul>
                    {#each categories as category}
                        <li>
                            <input
                                type="radio"
                                bind:group={bookDetail.book.category_id}
                                name="categories"
                                value={category.category_id}
                            />
                            {category.name}
                        </li>
                    {/each}
                </ul>
            </div>
            <div>
                <h2>Publish Year</h2>
                <input
                    type="text"
                    bind:value={bookDetail.publication.publish_year}
                />
            </div>
            <div>
                <h2>Series Title</h2>
                <input
                    type="text"
                    bind:value={bookDetail.publication.series_title}
                />
            </div>
            <div>
                <h2>Volume</h2>
                <input type="text" bind:value={bookDetail.publication.volume} />
            </div>
            <div>
                <h2>Edition</h2>
                <input
                    type="text"
                    bind:value={bookDetail.publication.edition}
                />
            </div>
            <div>
                <h2>Number of Volume</h2>
                <input
                    type="text"
                    bind:value={bookDetail.publication.number_of_volumes}
                />
            </div>
            <div>
                <h2>Number of Pages</h2>
                <input
                    type="text"
                    bind:value={bookDetail.publication.number_of_pages}
                />
            </div>
            <div class="authors">
                <h2>Author</h2>
                <ul>
                    {#each authors as author}
                        <li>
                            <input
                                type="radio"
                                bind:group={bookDetail.book.author_id}
                                name="authors"
                                value={author.author_id}
                            />
                            {author.name}
                        </li>
                    {/each}
                </ul>
            </div>
            <div class="publishers authors">
                <h2>Publisher</h2>
                <ul>
                    {#each publishers as publisher}
                        <li>
                            <input
                                type="radio"
                                bind:group={bookDetail.publication.publisher_id}
                                name="publishers"
                                value={publisher.publisher_id}
                            />
                            {publisher.name}
                        </li>
                    {/each}
                </ul>
            </div>
            <div>
                <button style="margin-top: 1rem;" on:click={addBook}
                    >Submit</button
                >
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .language,
    .category,
    .authors {
        display: flex;
        margin-top: 0.75rem;
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
                font-family: "Poppins", sans-serif;
                color: white;
            }
        }
    }
    .admin {
        padding: 2rem 0;
        background-color: #533829;
        h1,
        h2,
        button {
            font-family: "Poppins", sans-serif;
            color: white;
            font-weight: 600;
            font-size: 1.5rem;
            text-transform: uppercase;
        }
        button {
            cursor: pointer;
            margin: 0;
            font-size: 1.1rem;
            background-color: black;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
        }
        h2 {
            font-size: 1.2rem;
        }
        input {
            width: 400px;
            padding: 0.5rem;

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
