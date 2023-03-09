<script lang="ts">
    import { error } from "@sveltejs/kit";
    import { onMount } from "svelte";
    import { solves } from "./solves";
    let contenedor: HTMLDivElement;
    let input: HTMLInputElement;
    let cmd = "";
    let console = "";

    const alias = {
        remove: ["remove", "rm", "delete", "elimina"],
        clear:["clear", "neteja"],
        all: ["all", "*", "todo", "tot"],
    };

    let llist: string[] = [];

    function execute() {
        const args = cmd.split(" ");

        if (alias.remove.includes(args[0])) {
            const par = args[1];
            if (alias.all.includes(par)) {
                $solves = [];
            } else if (Number.isFinite(parseInt(par))) {
                let i = parseInt(par);
                $solves.splice(i, 1);
                $solves = $solves;
            } 
            
            else cmd = "Error argument: " + cmd;
        } else if (alias.clear.includes(args[0])) {
            llist = [];
            cmd = "";
        }
        else cmd = "Error order: " + cmd


        llist = [cmd, ...llist];
        cmd = "";
    }

    function onkeydown(event: KeyboardEvent) {
        if (event.key == "c" && event.ctrlKey) contenedor.classList.add("ocult");
        if (event.key == "Enter") execute();
        if (event.key == "x" && event.ctrlKey)
                llist = [];

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
    <div class="console yellow green red">
        <input
            placeholder="comand"
            bind:value={cmd}
            bind:this={input}
            on:keyup|stopPropagation
            on:keydown|stopPropagation={onkeydown}
        />

        <div class="llist">
            {#each llist as element}
                <div class="text">{element}</div>
            {/each}
        </div>
    </div>
</div>

<style>
    .contenedor {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: fixed;

        right: 20px;
        bottom: 20px;

        padding: 10px;
        margin: 5px;

        width: 30%;
        height: 30%;

        border: 0px solid white;
        background: var(--panel);
        border-radius: 10px;
    }

    .title {
        font-size: 30px;
        margin-bottom: 10px;
    }

    .console {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 80%;
        flex-shrink: 1;
    }

    input {
        caret-color: rgb(255, 0, 0);

        box-sizing: border-box;
        background: var(--box);
        width: 100%;
        border-radius: 10px;
        font-size: 15px;
        border: none;
        color: white;
        outline: none;
        padding: 5px;
    }

    .llist {
        box-sizing: border-box;

        flex-grow: 1;
        overflow-y: scroll;

        margin-top: 10px;
        background: var(--box);
        border-radius: 10px;
        font-size: 15px;
 
        padding: 5px;
    }

    .ocult {
        display: none;
    }
</style>
