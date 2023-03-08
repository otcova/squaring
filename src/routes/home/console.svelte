<script lang="ts">
    import { onMount } from "svelte";
    import { solves } from "./solves";
    let contenedor: HTMLDivElement;
    let input: HTMLInputElement;
    let cmd = "";

    function execute() {
        const args = cmd.split(" ");
        if (args[0] == "remove") {
            const par = args[1];
            if (par == "all") {
                $solves = [];
            } else if (Number.isFinite(parseInt(par))) {
                let i = parseInt(par);
                $solves.splice(i, 1);
                $solves = $solves;
                
            }

        }
        cmd = "";
    }

    function onkeydown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
        if (event.key == "Enter") execute();
    }

    onMount(() => {
        window.addEventListener("keydown", (event) => {
            if (event.key == "c" && event.ctrlKey) {
                contenedor.classList.toggle("ocult");
                input.focus();
            }
        });
    });
</script>

<div class="contenedor ocult" bind:this={contenedor}>
    <div class="title">Console</div>
    <input bind:value={cmd} bind:this={input} on:keydown={onkeydown} />
</div>

<style>
    .contenedor {
        box-sizing: border-box;
        display: block;
        position: fixed;

        right: 20px;
        bottom: 20px;

        padding: 10px;
        margin: 5px;

        width: 30%;
        height: 30%;

        border: 3px solid white;
        border-radius: 10px;
    }

    .title {
        font-size: 20px;
    }

    input {
        width: 100%;
    }

    .ocult {
        display: none;
    }
</style>
