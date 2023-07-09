<script>
    import { user } from "../store";
    import { admin } from "../store";
    import SideNav from "./SideNav.svelte";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let userInfo;
    user.subscribe((value) => {
        userInfo = value;
    });

    let adminInfo;
    admin.subscribe((value) => {
        adminInfo = value;
    });

    onMount(() => {
        if (adminInfo == null && userInfo == null) {
            goto("/login");
        }
    });

    let searchText;
    function searchPage() {
        if (searchText == null) {
            searchText = "";
        }
        window.location = "../search?name=" + searchText;
    }

    function logout() {
        localStorage.removeItem("user_data");
        localStorage.removeItem("admin_data");
        user.set(null);
        admin.set(null);
        goto("/login");
    }
</script>

<div class="bg">
    <nav class="container">
        <section>
            <a class="library" href="../">Wensday</a>
            <form class="search" on:submit|preventDefault={searchPage}>
                <input
                    bind:value={searchText}
                    type="text"
                    placeholder="Search by books and authors"
                />
                <img src="/images/search.png" alt="Search Icon" />
            </form>
        </section>
        {#if userInfo != null || adminInfo != null}
            <section class="right">
                <a href="../../../">Home</a>
                {#if adminInfo != null}
                    <a href="/addBook">Add Book</a>
                {/if}
                {#if adminInfo == null}
                    <a href="/profile" class="profile">
                        <h1>{userInfo.username}</h1>
                        <img src={userInfo.profile_url} alt="Profile" />
                    </a>
                    <button class="logout" on:click={logout}>Logout</button>
                {:else}
                    <div href="/profile" class="profile">
                        <h1 class="admin">{adminInfo.username}</h1>
                        <img
                            src="https://pbs.twimg.com/profile_images/557797323569250304/zpGjrYwi_400x400.png"
                            alt="Profile"
                        />
                    </div>
                    <button class="logout" on:click={logout}>Logout</button>
                {/if}
            </section>
        {/if}
    </nav>
</div>

<style lang="scss">
    .menu {
        cursor: pointer;
        margin-right: 1rem;
        background: none;
        border: none;

        img {
            width: 40px;
        }
    }
    .bg {
        position: relative;
        z-index: 1;
        background-color: black;
    }
    * {
        font-family: "Poppins", sans-serif;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;

        section {
            display: flex;
            align-items: center;
        }
    }
    .library {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.25rem 0.5rem;
        border-radius: 5px;
        background-color: #badefa;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        border: none;
        color: black;
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
        background-color: #eff0f0;

        img {
            width: 20px;
            opacity: 0.7;
            aspect-ratio: 1/1;
        }

        input {
            margin-right: 1rem;
            border: none;
            border-right: 2px solid #c1c0c1;
            width: 300px;
            font-family: "Poppins", sans-serif;
            background-color: #eff0f0;
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
        text-decoration: none;
        .admin {
            color: red;
        }
        h1 {
            font-weight: 600;
            font-size: 1.3rem;
            color: #63a4ea;
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
        a {
            color: white;
            text-decoration: none;
        }
        .logout {
            border: none;
            color: white;
            padding: 0.25rem 0.25rem;
            background-color: rgb(235, 50, 50);
            font-size: 1rem;
            cursor: pointer;
        }
    }
</style>
