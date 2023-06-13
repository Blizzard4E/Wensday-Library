<nav  class="container">
    <section>
        <button class="library">Library</button>
        <div class="search">
            <input type="text" placeholder="Search by books and authors">
            <img src="/images/search.png" alt="Search Icon">
        </div>
    </section>
    <section class="right">
        <div class="profile">
            <h1>Bunlong Prak</h1>
            <img src="/images/profile_pic.jpg" alt="Profile">
        </div>
        <button class="bell">
            <img src="/images/bell.png" alt="Bell notification">
        </button>
        <button class="filter">
            <img src="/images/filters.png" alt="Filter icon">
        </button>
        <button class="dropdown">
            <img src="/images/down.png" alt="Dropdown icon">
        </button>
    </section>
</nav>

<style lang="scss">
    * {
        font-family: 'Poppins', sans-serif;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem 0;

        section {
            display: flex;
            align-items: center;
        }
    }
    .library {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        padding: .25rem .5rem;
        border-radius: 5px;
        background-color: #BADEFA;
        font-family: 'Poppins', sans-serif;
    }
    button {
        border: none;
    }
    img {
        width: 30px;
    }
    .search {
        margin-left: 1rem;
        display: flex;
        border-radius: 32px;
        padding: 0.5rem 1.5rem;
        display: flex;
        align-items: center;
        background-color: #EFF0F0;

        img { 
            width: 20px;
            opacity: 0.7;
            aspect-ratio: 1/1;
        }

        input {
            margin-right: 1rem;
            border: none;
            border-right: 2px solid #C1C0C1;
            width: 300px;
            font-family: 'Poppins', sans-serif;
            background-color: #EFF0F0;
            color: black;
            font-size: 1rem;

            &::placeholder {
                text-shadow: none;
                color: #606060;
            }
            &:focus {
                outline: none;
            }
        }
    }
    .profile {
        display: flex;
        align-items: center;

        h1 {
            font-weight: 600;
            font-size: 1.3rem;
            color: #63A4EA;
            margin-right: 1rem;
        }
        img {
            width: 60px;
            aspect-ratio: 1/1;
            display: block;
            border-radius: 50%;
            object-fit: cover;
        }
    }
    .right {
        display: flex;
        column-gap: 1rem;
        
        button {
            background-color: #F5F5F5;
            padding: .8rem;
            aspect-ratio: 1/1;
            border-radius: 50%;

            img {
                width: 26px;
                display: block;
            }
        }
    }
    
</style>