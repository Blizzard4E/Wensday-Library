<script>
    import { apiUrl } from '../../store.js'
    import { user, admin } from '../../store.js'
    import { goto } from "$app/navigation"

    let loginCredential = {
        role: 'user',
        email: '',
        password: ''
    }

    async function login() {
        const res = await fetch(`${apiUrl}/${loginCredential.role}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginCredential)
        })

        const data = await res.json();
        console.log(data)
        if (res.status === 200) {
            switch (loginCredential.role) {
                case 'user':
                    localStorage.setItem('user_data', JSON.stringify(data.user_data));
                    localStorage.removeItem('admin_data');

                    user.set(data.user_data);
                    admin.set(null);

                    break;
                case 'admin':
                    localStorage.setItem('admin_data', JSON.stringify(data.user_data));
                    localStorage.removeItem('user_data');

                    admin.set(data.user_data);
                    user.set(null);

                    break;
            }

            loginCredential = {
                email: '',
                password: ''
            }

            goto("/")
        } else {
            alert(data.message);
        }
    }
</script>

<main>
    <div class="container">
        <div class="center">
            <h1>Login</h1>
            <div class="center">
                <h2>Role</h2>
                <div class="row">
                    <div class="center">
                        <h3>User</h3>
                        <input type="radio"  bind:group={loginCredential.role} name="gender" value="user" checked>
                    </div>
                    <div class="center">
                        <h3>Admin</h3>
                        <input type="radio" bind:group={loginCredential.role} name="gender" value="admin">
                    </div>
                </div>
            </div>
            <div>
                <h2>{ loginCredential.role == 'user' ? 'email' : 'username'}</h2>
                <input bind:value={loginCredential.email} type="text">
            </div>
            <div>
                <h2>Password</h2>
                <input bind:value={loginCredential.password} type="password">
            </div>
        </div>
        <div class="center">
            <a href="../signUp" class="signUp">Don't have an account?</a>
            <button on:click={login}>Login</button>
        </div>
    </div>
</main>

<style lang="scss">
    .signUp {
        margin-top: 1rem;
        font-family: 'Poppins',sans-serif;
        color: white;
    }
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
        margin-top: 1rem;
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