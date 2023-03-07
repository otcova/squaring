<script lang="ts">
    export let n = 0;

    function increment() {
        ++n;
    }

    function decrement() {
        --n;
    }
</script>

<div class="container">
    <p>Number: {n}</p>

    <button on:click={increment}>+1</button>
    <button on:click={decrement}>-1</button>
</div>

<style>
    .container {
        background: #222;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #000;
    }
</style>
