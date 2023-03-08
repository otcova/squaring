<div class="navbar">
    <a class="link" href="home">Home</a>
    <a class="link" href="example">Example</a>
</div>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;
        position: fixed;
        box-sizing: border-box;
        
        width: 100%;
        height: 50px;

        background: #272727;
        box-shadow: 0 0 2px 2px #0007;
    }

    .link {
        transition: all 100ms;
        display: flex;
        align-items: center;
        justify-content: center;
        

        padding: 10px;

        height: 100%;
        text-decoration: none;
        color: #fff;
    }

    .link:hover {
        background: #171717;
        color: white;
    }

    .link:focus {
        font-size: 23px;
    }

</style>
