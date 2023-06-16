<main>
    <div class="container">
        <div class="center">
            <h1>Login</h1>
            <div class="center">
                <h2>Role</h2>
                <div class="row">
                    <div class="center">
                        <h3>User</h3>
                        <input type="radio" name="gender" checked>
                    </div>
                    <div class="center">
                        <h3>Admin</h3>
                        <input type="radio" name="gender">
                    </div>
                </div>
            </div>
            <div>
                <h2>Email</h2>
                <input type="text">
            </div>
            <div>
                <h2>Password</h2>
                <input type="text">
            </div>
        </div>
        <div class="center">
            <button>Login</button>
        </div>
    </div>
</main>

<style lang="scss">
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        column-gap: 1rem;
        h3 {
            text-align: center;
        }
        input {
            width: 20px;
        }
    }
    .center {
        display: grid;
        place-items: center;
    }
    main {
        position: relative;
        padding: 3rem 0;
        background-color: #463B33;
    }
    h1,h2,h3,button {
        font-family: 'Poppins',sans-serif;
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
        text-transform: uppercase;
        margin: 1rem 0;
    }
    button {
        cursor: pointer;
        margin: 0;
        margin-top: 2rem;
        font-size: 1.1rem;
        background-color:black;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
    }
    h2 {
        margin-top: 1rem;
        margin-bottom: 0;
        font-size: 1.2rem;
    }
    h3 {
        font-size: 1.1rem;
        margin-bottom: 0;
    }
    input {
        width: 400px;
        padding: .5rem;

        &:focus {
            outline: none;
        }
    }
</style>