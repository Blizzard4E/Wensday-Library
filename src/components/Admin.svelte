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
        <h1>Book</h1>
        <div class="book">
            <h2>Email</h2>
            <h2>Add/Charge Balance</h2>
            <div></div>
            <input type="text">
            <input type="number">
            <div><button>Submit</button></div>
        </div>
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
        .balance {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>