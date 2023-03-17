<script lang="ts">
    import Console from "$lib/console.svelte";

</script>

<div class="page">
    <div class="content">
        <h1>Storage</h1>
        <Console />
    </div>
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;

        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        background-image: url($lib/olimpiadas.jpg);
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



