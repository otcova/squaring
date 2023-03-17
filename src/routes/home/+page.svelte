<script lang="ts">
    import Console from "$lib/console.svelte";
    import Crono from "./crono.svelte";
    import Solves from "./solves.svelte";
    import Scramble from "./scramble.svelte";
    import CubDraw from "./cubDraw.svelte";
</script>

<div class="page">
    <Scramble />
    <div class="content">
        <h1>Cronometre</h1>
        <Solves />
        <Crono />
        <CubDraw />
        <Console />
    </div>
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;

        background-position-x: center;
        background-position-y: top;
        background-size: cover;
        background-image: url($lib/fuente-de-luces_1920x1200_xtrafondos.com.jpg);
        flex-grow: 1;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;

        padding: 0 60px;
        flex-grow: 1;
    }
</style>
