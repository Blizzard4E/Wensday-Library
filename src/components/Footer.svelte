<footer>
    <div class="container">
        <div class="outer-grid">
            <div class="info">
                <h1>Wensday <br>Library</h1>
                <div>
                    <p>10 AM - 6 PM<br>MONDAYS TO SATURDAYS</p>
                    <p style="margin-top:1.5rem">PARAGON <br>INTERNATIONAL <br>UNIVERSITY</p>
                </div>
            </div>
            <div class="grid">
                <img src="../images/paragon1.jpeg" alt="">
                <img src="../images/book12.jpeg" alt="">
                <img src="../images/paragon3.jpeg" alt="">
            </div>
        </div>
    </div>
    <div class="center">
        <div class="contacts">
            <a href="#">About US</a>
            <p>(855) 123 4567 <br>Wensday@paragoniu.edu.kh</p>
        </div>
    </div>
</footer>

<style lang="scss">
    .center {
        display: grid;
        place-items: center;
    }
    .contacts {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        align-items: start;
        column-gap: 3rem;
        a {
            font-family: 'Poppins',sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            font-size: 1.5rem;
            text-decoration: underline white;
            color: white;
        }
        p {
            font-family: 'Poppins',sans-serif;
            font-weight: lighter;
            color: white;
            font-size: 1.3rem;
        }
    }
    h1 {
        transform: translateY(2rem);
        font-family: 'Zetafonts-Lovelace', sans-serif;
        color: white;
        text-align: center;
        font-size: 2rem;
    }
    footer {
        padding: 5rem 0;
        background-color: black;
    }
    .outer-grid {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 3rem;

        img {
            width: 100%;
            aspect-ratio: 1/1.7;
            object-fit: cover;
        }
    }
    .info {
        display: grid;
        place-items: center;
        p {
            line-height: 1.75rem;
            color: white;
            font-family: 'Poppins',sans-serif;
            font-weight: lighter;
            font-size: 1.25rem;
            text-align: center;
        }
    }
</style>