<script>
    import { onMount } from "svelte";
    import { apiUrl } from "../../../store";
    import { user } from "../../../store";

    /** @type {import('./$types').PageData} */
    //Book ID parameter
    export let data;

    let user_info;

    user.subscribe((value) => {
        user_info = value;
    });

    let book;

    onMount(async () => {
        const res = await fetch(`${apiUrl}/book/detail/${data.book_id}`);
        const resJson = await res.json();
        book = { ...resJson.book };

        console.log(book)
    });

    async function borrowBook(book_id) {
        const res = await fetch(`${apiUrl}/borrowBook/${book_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ book_id, user_id: user_info.user_id }),
        });

        const data = await res.json();

        if (res.status == 200) {
            const res2 = await fetch(`${apiUrl}/book/${book_id}`);
            const resJson = await res2.json();
            book = { ...resJson.book };
        }

        alert(data.message);
    }
</script>

<main>
    <div class="container">
        <div class="grid-1">
            <div class="col-1">
                <h1>Book</h1>
                <img src={book?.cover_image} alt="" />
            </div>
            <div class="col-2">
                <div class="title">
                    <h1>{book?.title}</h1>
                    <img src="../images/title_bg.png" alt="" />
                </div>
                <div class="info">
                    <h2>Authors</h2>
                    <h2>Year</h2>
                    <h2>Publisher</h2>
                    <h2>Categories</h2>
                    <h2>Languages</h2>
                    <h2>Status</h2>
                </div>
                <div class="detail">
                    <h2>
                        {book?.author_name}
                    </h2>
                    <h2>{book?.publish_year}</h2>
                    <h2>{book?.publisher_name}</h2>
                    <h2>{book?.category_name}</h2>
                    <h2>{book?.language}</h2>
                    <h2>
                        {#if book?.has_active_borrow_requests}
                            Not Available
                        {:else}
                            Available
                        {/if}
                    </h2>
                </div>
                <div class="desc">
                    <h2>Description</h2>
                    <p>{book?.description}</p>
                </div>
                <div>
                    {#if !book?.has_active_borrow_requests}
                        <button on:click={borrowBook(book?.book_id)}>Borrow</button>
                    {:else}
                        <button class="red">Not Available</button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    main {
        position: relative;
        padding: 4rem 0;
        background-color: #463b33;

        .grid-1 {
            display: grid;
            grid-template-columns: 1fr 2fr;
            h2 {
                font-family: "Poppins", sans-serif;
                color: white;
                font-weight: 600;
                font-size: 1.5rem;
                text-transform: uppercase;
                margin: 1rem 0;
            }
            .col-1 {
                img {
                    display: block;
                    width: 300px;
                    aspect-ratio: 9/12.5;
                    object-fit: cover;
                }
            }
            .col-2 {
                position: relative;
                display: grid;
                grid-template-areas:
                    "title title"
                    "info detail"
                    "desc desc";
                .title {
                    grid-area: title;
                    h1 {
                        position: relative;
                        z-index: 1;
                        font-weight: lighter;
                        margin-left: 10%;
                    }
                    img {
                        position: relative;
                        display: block;
                        position: absolute;
                        width: 800px;
                        top: -20%;
                    }
                }
                .info {
                    grid-area: info;
                }
                .detail {
                    grid-area: detail;
                    h2 {
                        font-weight: lighter;

                        span {
                            &:first-child {
                                &::before {
                                    content: "";
                                }
                            }
                            &::before {
                                content: ", ";
                            }
                        }
                    }
                }
                .desc {
                    grid-area: desc;
                    p {
                        font-family: "Poppins", sans-serif;
                        color: white;
                        font-weight: lighter;
                        font-size: 1.2rem;
                        margin: 1rem 0;
                    }
                }
            }
        }
    }
    h1 {
        font-family: "Poppins", sans-serif;
        color: white;
        font-weight: 600;
        font-size: 2rem;
        text-transform: uppercase;
        margin-bottom: 3rem;
    }
    button {
        text-transform: uppercase;
        border: none;
        font-family: "Poppins", sans-serif;
        color: white;
        background-color: black;
        padding: 0.5rem 1rem;
        font-weight: 600;
        font-size: 1.5rem;
        cursor: pointer;
    }
    .red {
        cursor: not-allowed;
        background-color: rgb(175, 4, 4);
    }
</style>
