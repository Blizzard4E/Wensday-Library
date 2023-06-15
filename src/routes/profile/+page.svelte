<script>
    import Book from "../../components/Book.svelte";
    let tab = 0
    
    function setTab(index) {
        tab = index
    }
</script>
<main>
    <section class="title container">
        <h1>PErsonal Information</h1>
        <div class="profile-pic">
            <img src="images/profile_pic.jpg" alt="">
        </div>
        <h1>PErsonal Account</h1>
    </section>
    <div class="info">
        <div class="row">
            <div class="container">
                <h2>Title: Sopomore</h2>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="grid">
                    <h2>Full Name: Nate River</h2>
                    <h2>User ID: 1321312</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="grid">
                    <h2>Gender:  Male</h2>
                    <h2>Username: bprak</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="grid">
                    <h2>Date of Birth: 23/08/2004</h2>
                    <h2>Email: Nateriver@paragoniu.edu.kh</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="selection container">
        <button class:active={tab == 0} on:click={() => setTab(0)}>Balance History</button>
        <button class:active={tab == 1} on:click={() => setTab(1)}>Active Borrow</button>
        <button class:active={tab == 2} on:click={() => setTab(2)}>Borrow History</button>
    </div>
    {#if tab == 0}
    <div class="container">
        <div class="table">
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>By</th>
            </tr>
            <tr class="green">
                <td>6/5/2023 16:41 AM</td>
                <td>$333</td>
                <td>Bunlong</td>
              </tr>
            <tr class="red">
              <td>6/5/2023 16:41 AM</td>
              <td>-$333</td>
              <td>Bunlong</td>
            </tr>
        </div>
    </div>
    {/if}
    {#if tab >= 1 }
        <div class="books container">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    {/if}
</main>

<style lang="scss">
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
            font-family: 'GlacialIndifference-Regular',sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1.1rem;
            padding: 1rem 0;
        }
        td {
            text-align: center;
            font-family: 'GlacialIndifference-Regular',sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1rem;
            padding: 1rem 0;
        }
    }
    main {
        background-color: #463B33;
        padding-bottom: 2rem;
    }
    .title {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        
        h1 {
            font-family: 'GlacialIndifference-Bold',sans-serif;
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
                font-family: 'GlacialIndifference-Regular',sans-serif;
                font-weight: normal;
                color: white;
                font-size: 1.5rem;
            }
            &:first-child{
                padding: 3rem 0;
            }
            &:nth-of-type(odd){
                background: black;
            }
            &:nth-of-type(even){
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
            font-family: 'GlacialIndifference-Bold',sans-serif;
            font-weight: normal;
            color: white;
            font-size: 1.5rem;
            padding: 1rem 0;
            transition: .25s ease-in;
            border-bottom: .25rem solid transparent;
        }
        .active {
            border-bottom: .25rem solid white;
        }
    }
    .books {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: center;
        padding: 2rem 0;
        row-gap: 1rem;
    }
</style>