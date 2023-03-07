<script lang="ts">
    import Counter from "./counter.svelte";

    const list = [1, 2, 3];

    for (let i = 4; i <= 10; ++i) {
        list.push(i);
    }

    let number = 123;

    let seconds = 0;
    setInterval(() => ++seconds, 1000);
</script>

<h1>Numbers</h1>

<div class="row">
    <Counter />
    <Counter n={1} />
    <Counter n={2} />
</div>

<div class="row">
    <Counter n={number} />
    <Counter n={number} />
</div>

<h1>Seconds</h1>

<div class="row">
    <Counter bind:n={seconds} />
    <Counter bind:n={seconds} />
</div>

<h1>Some List</h1>

{#each list as element}
    <div class="row">
        <Counter bind:n={element} />
        <Counter bind:n={element} />
    </div>
{/each}

<style>
    .row {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>
