<script lang="ts">
    import { scramble } from "./scramble";
    import { lastScramble } from "./scramble";
    import { nextScramble } from "./scramble";
</script>

<div class="contenedor">
    <div class="scramble">{$scramble.replaceAll(" ", "  ")}</div>

    <div class="button">
        <button class="last" on:click={lastScramble} on:keydown|preventDefault>Last</button>
        <button class="next" on:click={nextScramble} on:keydown|preventDefault>Next</button>
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
        white-space: pre;
        font-size: 33px;
        flex-grow: 1;
        text-align: center;
    }

    .button {
        position: absolute;
        bottom: 5px;
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
