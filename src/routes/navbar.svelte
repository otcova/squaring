<script lang="ts">
    import { base } from "$app/paths";
</script>

<div class="margin" />
<div class="navbar">
    <a class="link" href="{base}/">Home</a>
    <a class="link" href="{base}/records">Records</a>
    <a class="link" href="{base}/pixel_art">Pixel Art</a>
    <a class="link" href="{base}/example">Example</a>

</div>

<style>
    :root {
        --height: 50px;
    }

    .margin {
        height: var(--height);
    }

    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0px;

        box-sizing: border-box;
        width: 100%;
        height: var(--height);

        font-size: 20px;
        background: #272727;
        box-shadow: 0 0 2px 2px #0007;
    }

    .link {
        transition: all 100ms;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;

        height: 100%;
        text-decoration: none;
        color: #fff;
    }

    .link:hover {
        transition: all 1000ms;
        font-size: 23px;
        background: #171717;
        color: white;
    }

    .link:focus {
        transition: all 100ms;
        background: #373737;

        color: #000;
    }
</style>
