<script lang="ts">
    import Counter from "./counter.svelte";
</script>

<div class="column">
    <Counter />
    <Counter n={1} />
    <Counter n={2} />
</div>

<style>
    .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        gap: 20px;
    }
</style>
