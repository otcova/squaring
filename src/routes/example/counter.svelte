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
    <div>Number: {n}</div>

    <div>
        <button on:click={increment}>+1</button>
        <button on:click={decrement}>-1</button>
    </div>
</div>

<style>
    .container {
        /* Center items */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;

        width: 100px;
        height: 80px;
        padding: 10px;

        background: #272727;
        border-radius: 10px;
        box-shadow: 0 0 2px 1px #0007;
        border: 1px solid #0000;
        
        transition: all 100ms;
    }
</style>
