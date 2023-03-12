<script lang="ts">
    import { element } from "svelte/internal";
    import { solves } from "./solves";

    let llist: string[] = ["R", "L"];
    
    function randomScramble() {
    }

    function last() {
        console.log("h");
    }

    function next() {
        console.log("h");
    }
</script>

<div class="contenedor">
    <div class="scramble">R U R' U' M2 R U L</div>

    <div class="button">
        <button class="last" on:click={last}>Last</button>
        <button class="next" on:click={next}>Next</button>
    </div>
</div>

<style>
    .contenedor {
        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 75px;

        background: #5564b9;
        box-shadow: 0 0 2px 2px #0007;
    }

    .scramble {
        font-size: 20px;
        flex-grow: 1;
        text-align: center;
    }

    .button {
        position: absolute;
        right: 100px;
    }

    button {
        cursor: pointer;
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

