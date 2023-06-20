<script>
    export let book;
    let isHover = false;
</script>
<a href="/book/{book.book_id}">
    <div class="bg">
        <h1>{book.title}</h1>
        <img src="{book.cover_image}" alt="">
    </div>
    <h2>{book.title}</h2>
    <p>{book.description}</p>
</a>

<style lang="scss">
    a {
        text-decoration: none;
        cursor: pointer;
        flex-shrink: 0;
        width: 320px;
        position: relative;

        .bg {
            background-color: rgba(0, 0, 0, 0.25);
        }

        h1 {
            user-select: none;
            transition: 0.25s ease-in-out;
            opacity: 0;
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
            color: white;
        }
        h2 {
            position: absolute;
            transition: 0.25s ease-in-out;
            opacity: 1;
            font-family: 'Poppins',sans-serif;
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 2.5rem;
            color: white;
            opacity: 1;
            text-align: center;
            text-transform: uppercase;
            width: 100%;
        }

        img {
            display: block;
            width: 100%;
            aspect-ratio: 9/12.5;
            object-fit: cover;
            margin-bottom: 1rem;
            transition: 0.25s ease-in-out;
        }

        p {
            opacity: 0;
            margin-top: 2rem;
            font-size: 1.05rem;
            font-family: 'Poppins',sans-serif;
            font-weight: lighter;
            color: white;
            transition: 0.25s ease-in-out;
        }
        &:hover {
            img {
                transform: translate(1.5rem, 1rem);
                filter: brightness(.6);
            }
            p {
                opacity: 1;
            }
            h1 {
                opacity: 1;
            }
            h2 {
                opacity: 0;
            }
        }
    }
</style>