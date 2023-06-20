<script>
    let username,balance;

    let users_to_return = [
        {
            username: "Guy 1",
            profile_pic: "../images/profile_pic.jpg",
            due_date: "23, June 2023",
            late: 0,
            book_title: "The Art of Cooking with AI",
            booK_cover: "https://th.bing.com/th/id/OIG.8cBS8p0rHWtRkPrhEDr6?pid=ImgGn"
        },
        {
            username: "Guy 2",
            profile_pic: "../images/profile_pic.jpg",
            due_date: "23, June 2023",
            late: 3,
            book_title: "The Art of Cooking with AI",
            booK_cover: "https://th.bing.com/th/id/OIG.8cBS8p0rHWtRkPrhEDr6?pid=ImgGn"
        }
    ]
    
</script>
<section class="admin">
    <div class="container">
        <h1>Balance</h1>
        <div class="balance">
            <h2>Balance</h2>
            <h2>Add/Charge Balance</h2>
            <div></div>
            <input type="text">
            <input type="number">
            <div><button>Submit</button></div>
        </div>
        <h1 style="margin-top: 2rem;">Users to return books</h1>
        <table>
            <tr>
                <th>User</th>
                <th>Book</th>
                <th>Due Date</th>
                <th>Late</th>
                <th></th>
            </tr>
            {#each users_to_return as user}
            <tr>
                <td>
                    <div class="profile">
                        <img src="{user.profile_pic}" alt="">
                        <h2>{user.username}</h2>
                    </div>
                </td>
                <td>
                    <div class="book">
                        <img src="{user.booK_cover}" alt="">
                        <h2>{user.book_title}</h2>
                    </div>
                </td>
                <td><h2>{user.due_date}</h2></td>
                <td><h2>{user.late} Days</h2></td>
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
        table {
            font-family: 'Poppins',sans-serif;
            width: 100%;

            th {
                color: white;   
                font-size: 1.3rem;
                font-weight: 500;
            }
            td {
                padding: .5rem 0;
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