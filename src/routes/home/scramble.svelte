<script lang="ts">
    import { element } from "svelte/internal";
    import { solves } from "./solves";

    function last() {
        console.log("h");
    }

    function next() {
        console.log("h");
    }
</script>

<div class="contenedor">

    <div class="scramble">
    </div>

    <div class="button">
        <button class="last" on:click={last}>Last</button>
        <button class="next" on:click={next} >Next</button>
    </div>
</div>

<style>
    .contenedor{
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;
        position: relative;
        box-sizing: border-box;
        margin-top: 50px;
        
        width: 100%;
        height: 75px;

        background: #5564b9;
        box-shadow: 0 0 2px 2px #0007;
    }

    .button {
        position: absolute;
        box-sizing: border-box;
        bottom: 10px;
        right: 200px;
    }

    button {
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        padding: 2px 30px;
        
        font-size: 15px;
        height: 100%;
        outline: none;
        border: black;
        border-radius: 10px;
        background: white;
        color: black;
    }

    button:hover {
        background: var(--panel);
        color: white;
    }

    button:active {
        color: white;
        background: black;
    }
</style>