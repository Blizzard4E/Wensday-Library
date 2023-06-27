<script>
    import uploadImageToImgur from "../../utils/uploadImageToImgur";
    import { apiUrl } from "../../store";
    import { goto } from "$app/navigation";

    let signUpCrendential = {
        username: null,
        email: null,
        password: null,
        profile_url:'',
            // "https://pbs.twimg.com/profile_images/557797323569250304/zpGjrYwi_400x400.png",
        tittle: null,
        gender: null,
    };

    async function uploadImg(event) {
        const profile_url = await uploadImageToImgur(event);

        if (profile_url) {
            signUpCrendential.profile_url = profile_url;
        }
    }

    async function signUp() {
        const res = await fetch(`${apiUrl}/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpCrendential),
        });

        const data = await res.json();

        if (res.status == 200) {
            goto("/login");
        } else {
            alert(data.message);
        }
    }
</script>

<main>
    <div class="container">
        <div class="center">
            <h1>Sign Up</h1>
            <div>
                <h2>Username</h2>
                <input type="text" bind:value={signUpCrendential.username} />
            </div>
            <div>
                <h2>Email</h2>
                <input type="text" bind:value={signUpCrendential.email} />
            </div>
            <div>
                <h2>Password</h2>
                <input
                    type="password"
                    bind:value={signUpCrendential.password}
                />
            </div>
            <div>
                <h2>Profile Image</h2>
                <input on:change={uploadImg} type="file" style="color:white" />
                {#if signUpCrendential.profile_url}
                    <img
                        src={signUpCrendential.profile_url}
                        alt="image_upload" width="128px" height="128px"
                    />
                {/if}
            </div>
            <div>
                <h2>Title</h2>
                <input type="text" bind:value={signUpCrendential.tittle} />
            </div>
            <div class="center">
                <h2>Gender</h2>
                <div class="row">
                    <div class="center">
                        <h3>Male</h3>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            bind:group={signUpCrendential.gender}
                        />
                    </div>
                    <div class="center">
                        <h3>Female</h3>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            bind:group={signUpCrendential.gender}
                        />
                    </div>
                    <div class="center">
                        <h3>Other</h3>
                        <input
                            type="radio"
                            name="gender"
                            checked
                            value="Other"
                            bind:group={signUpCrendential.gender}
                        />
                    </div>
                </div>
            </div>
            <div class="center">
                <a href="../login" class="login">Already have an account?</a>
                <button on:click={signUp}>Sign Up</button>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    .login {
        margin-top: 1rem;
        font-family: "Poppins", sans-serif;
        color: white;
    }
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
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
        background-color: #463b33;
    }
    h1,
    h2,
    h3,
    button {
        font-family: "Poppins", sans-serif;
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
        background-color: black;
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
        padding: 0.5rem;

        &:focus {
            outline: none;
        }
    }
</style>
