<script>
    let categoryName;
</script>
<section class="admin">
    <div class="container">
        <div class="author">
            <div>
                <h1>Create Category</h1>
                <div class="grid">
                    <h2>Name</h2>
                    <div></div> 
                    <div><input type="text" bind:value={categoryName}></div>
                    <div><button>Create</button></div>
                </div>
            </div>

        </div>
    </div>
</section>
<style lang="scss">
    .author {
        display: grid;
        grid-template-columns: 2fr 1fr;
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            input {
                height: 100%;
            }
        }
    }
    .admin {
        padding-top: 2rem;
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