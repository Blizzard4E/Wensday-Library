<script>
    import { onMount } from "svelte";
    import { apiUrl } from "../store";
    import { isoToStringDate, getLateDays } from "../utils/DateHelper";
    import { admin } from "../store";

    let admin_info;

    admin.subscribe((value) => {
        admin_info = value;
    });

    let balanceUpdate = {
        user_id: null,
        amount: null,
        admin_id: admin_info.admin_id,
    };

    let users_to_return = [];

    onMount(async () => {
        const res = await fetch(`${apiUrl}/activeBorrows`);
        const data = await res.json();
        users_to_return = [...data.active_borrows];
    });

    async function updateBalance() {
        const res = await fetch(`${apiUrl}/updateBalance`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(balanceUpdate),
        });
        const data = await res.json();

        if (res.status === 200) {
            alert("Balance Updated");

            balanceUpdate = {
                user_id: null,
                amount: null,
                admin_id: admin_info.admin_id,
            };
        } else {
            alert(data.message);
        }
    }
</script>

<section class="admin">
    <div class="container">
        <h1>Balance</h1>
        <div class="balance">
            <h2>User ID</h2>
            <h2>Add/Charge Balance</h2>
            <div />
            <input type="text" on:change={() => {console.log(balanceUpdate.user_id)}} bind:value={balanceUpdate.user_id} />
            <input type="number" bind:value={balanceUpdate.amount} />
            <div><button on:click={updateBalance}>Submit</button></div>
        </div>
        <h1 style="margin-top: 2rem;">Users to return books</h1>
        <table>
            <tr>
                <th>User</th>
                <th>Book</th>
                <th>Borrow Date</th>
                <th>To Return Date</th>
                <th>Late</th>
                <th />
            </tr>
            {#each users_to_return as active_borrow}
                <tr>
                    <td>
                        <div class="profile">
                            <img
                                src={active_borrow?.user?.profile_url}
                                alt="profile"
                            />
                            <h2>{active_borrow?.user?.username}</h2>
                        </div>
                    </td>
                    <td>
                        <div class="book">
                            <img
                                src={active_borrow?.book?.cover_image}
                                alt="cover"
                            />
                            <h2>{active_borrow?.book?.title}</h2>
                        </div>
                    </td>
                    <td
                        ><h2>
                            {isoToStringDate(active_borrow?.borrow_date)}
                        </h2></td
                    >
                    <td
                        ><h2>
                            {isoToStringDate(active_borrow?.date_to_be_return)}
                        </h2></td
                    >
                    <td
                        ><h2>
                            {getLateDays(active_borrow?.date_to_be_return)} Days
                        </h2></td
                    >
                    <td>
                        <button>Return Book</button>
                    </td>
                </tr>
            {/each}
        </table>
    </div>
</section>

<style lang="scss">
    .admin {
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
        table {
            font-family: "Poppins", sans-serif;
            width: 100%;

            th {
                color: white;
                font-size: 1.3rem;
                font-weight: 500;
            }
            td {
                padding: 0.5rem 0;
            }
            .profile {
                display: flex;
                align-items: center;
                img {
                    display: block;
                    width: 60px;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                }
                h2 {
                    margin-left: 1rem;
                }
            }
            .book {
                display: flex;
                align-items: center;
                img {
                    width: 60px;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                }
                h2 {
                    margin-left: 1rem;
                }
            }
            h2 {
                text-align: center;
            }
            button {
                background-color: rgb(15, 143, 15);
            }
        }
        .balance {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
