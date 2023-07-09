<script>
    import Book from "../../components/Book.svelte";
    import { user } from "../../store";
    let tab = 0;

    let user_info;

    user.subscribe((value) => {
        user_info = value;
    });

    function setTab(index) {
        tab = index;
    }
</script>

<main>
    <section class="title container">
        <h1>PErsonal Information</h1>
        <div class="profile-pic">
            <img src="{user_info?.profile_url}" alt="" />
        </div>
        <h1>PErsonal Account</h1>
    </section>
    <div class="info">
        <div class="row">
            <div class="container">
                <h2>Title: {user_info?.title}</h2>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="grid">
                    <h2>Username: {user_info?.username}</h2>
                    <h2>User ID: {user_info?.user_id}</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="grid">
                    <h2>Gender: {user_info?.gender}</h2>
                    <h2>Email: {user_info?.email}</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="grid">
                    <h2>Balance: ${user_info?.balance}</h2>
                    <h2>Debt: ${user_info?.debt}</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="selection container">
        <button class:active={tab == 0} on:click={() => setTab(0)}
            >Balance History</button
        >
        <button class:active={tab == 1} on:click={() => setTab(1)}
            >Active Borrow</button
        >
        <button class:active={tab == 2} on:click={() => setTab(2)}
            >Borrow History</button
        >
    </div>
    {#if tab == 0}
        <div class="container">
            {#if user_info?.balance_histories.length > 0}
                <div class="table">
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>By</th>
                    </tr>
                    {#each user_info?.balance_histories as balance}
                        <tr
                            class:green={balance?.paid_amount > 0}
                            class:red={balance?.paid_amount < 0}
                        >
                            <td>{balance?.created_at}</td>
                            <td>
                                {#if balance?.amount < 0}
                                    -${-balance?.paid_amount}
                                {:else}
                                    ${balance?.paid_amount}
                                {/if}
                            </td>
                            <td>{balance?.admin?.username}</td>
                        </tr>
                    {/each}
                </div>
            {/if}
        </div>
    {/if}
    {#if tab == 1}
        <div class="books container">
            {#if user_info?.active_borrows.length > 0}
                {#each user_info?.active_borrows as active_borrow}
                    <div class="center"><Book book={active_borrow.book} /></div>
                {/each}
            {/if}
        </div>
    {/if}
    {#if tab == 2}
        <div class="books container">
            {#if user_info?.user_borrow_histories.length > 0}
                {#each user_info?.user_borrow_histories as user_borrow_history}
                    <div class="center"><Book book={user_borrow_history.book} /></div>
                {/each}
            {/if}
        </div>
    {/if}
</main>

<style lang="scss">
    .center {
        display: grid;
        justify-content: center;
    }
    .table {
        background-color: #533829;
        width: 100%;
        margin-top: 2rem;

        tr {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        .red {
            background-color: rgb(122, 17, 17);
        }
        .green {
            background-color: rgb(4, 167, 4);
        }
        th {
            font-family: "GlacialIndifference-Regular", sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1.1rem;
            padding: 1rem 0;
        }
        td {
            text-align: center;
            font-family: "GlacialIndifference-Regular", sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1rem;
            padding: 1rem 0;
        }
    }
    main {
        background-color: #463b33;
        padding-bottom: 2rem;
    }
    .title {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;

        h1 {
            font-family: "GlacialIndifference-Bold", sans-serif;
            font-weight: normal;
            color: white;
            font-size: 2rem;
            text-transform: uppercase;
            text-align: center;
        }

        .profile-pic {
            border-radius: 50%;
            overflow: hidden;
            border: 2rem solid black;
            transform: translateY(50%);
            img {
                width: 200px;
            }
        }
    }
    .info {
        display: grid;

        .row {
            padding: 1.5rem 0;

            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            h2 {
                font-family: "GlacialIndifference-Regular", sans-serif;
                font-weight: normal;
                color: white;
                font-size: 1.5rem;
            }
            &:first-child {
                padding: 3rem 0;
            }
            &:nth-of-type(odd) {
                background: black;
            }
            &:nth-of-type(even) {
                background: #533829;
                z-index: 2;
            }
        }
    }
    .selection {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        button {
            cursor: pointer;
            background: none;
            border: none;
            font-family: "GlacialIndifference-Bold", sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1.5rem;
            padding: 1rem 0;
            transition: 0.25s ease-in;
            border-bottom: 0.25rem solid transparent;
        }
        .active {
            border-bottom: 0.25rem solid white;
        }
    }
    .books {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2rem 0;
        row-gap: 1rem;
    }
</style>
