<script lang = "ts">
    import Console from "./console.svelte";
    import Crono from "./crono.svelte";
    import Solves from "./solves.svelte";
    import Scramble from "./scramble.svelte";
    import CubDraw from "./cubDraw.svelte";

   
</script>

<body>
    <Scramble/>
    <div class="contenedor">
        <h1 class="title">Cronometre</h1>
        <Crono/>
        <Solves/>
        <CubDraw/>
        <Console/>
    </div>
</body>

<style>

    body {
        background-position-x:center;
		background-position-y:top;
		background-image: url("fuente-de-luces_1920x1200_xtrafondos.com.jpg");
    }

    .contenedor {
        display: flex;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
        height: 100%; 
        padding: 0 30px;
    }

    .title {
        font-size: 50px;
        color: white;
        margin-bottom: 20px;
    }
</style>



