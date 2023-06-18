<script>
    
</script>
<section class="admin">
    <div class="container">
        <h1>Balance</h1>
        <div class="balance">
            <h2>Email</h2>
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
            <tr>
                <td>
                    <div class="profile">
                        <img src="images/profile_pic.jpg" alt="">
                        <h2>User Name</h2>
                    </div>
                </td>
                <td>
                    <div class="book">
                        <img src="images/cheese.jpg" alt="">
                        <h2>Book name</h2>
                    </div>
                </td>
                <td><h2>23, June 2023</h2></td>
                <td><h2>0 Days</h2></td>
                <td>
                    <button>Return Book</button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="profile">
                        <img src="images/profile_pic.jpg" alt="">
                        <h2>User Name</h2>
                    </div>
                </td>
                <td>
                    <div class="book">
                        <img src="images/cheese.jpg" alt="">
                        <h2>Book name</h2>
                    </div>
                </td>
                <td><h2>23, June 2023</h2></td>
                <td><h2>0 Days</h2></td>
                <td>
                    <button>Return Book</button>
                </td>
            </tr>
        </table>
    </div>
</section>

<style lang="scss"> 
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
                    height: 60px;
                    aspect-ratio: 9/12.5;
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