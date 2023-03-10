<script lang="ts">
    import { onMount } from "svelte";
    import { solves } from "./solves";

    let millis = 0;
    $: segons = Math.trunc(millis / 1000);
    $: minuts = Math.trunc(millis / 1000 / 60);

    let startTime = performance.now();
    let isPaused = true;
    let keypress = false;

    $: millisStr = (millis % 1000).toString().padStart(3, "0");
    $: segonsStr = segons.toString().padStart(2, "0");
    $: minutsStr = minuts.toString().padStart(2, "0");

    function start() {
        isPaused = false;
        startTime = performance.now();
    }

    function stop() {
        isPaused = true;
        const solve = {
            time: millis,
            scramble: "",
            date: Date.now(),
            hide: false,
        };

        $solves = [...$solves, solve];
    }

    function reset() {
        isPaused = true;
        millis = 0;
    }

    onMount(() => {
        setInterval(() => {
            if (!isPaused) millis = Math.round(performance.now() - startTime);
        }, 10);

        window.onkeydown = (event) => {
            if (event.key == " ") keypress = true;

            if (isPaused) reset();
            else if (!isPaused) stop();
        };
        
        window.onkeyup = (event) => {
            if (event.key == " ") keypress = false;
            if (isPaused && event.key == " " && millis == 0) start();
        };
    });
</script>

<div class="container">
    <h1 class="crono" class:keypress>
        {minutsStr}:{segonsStr}:{millisStr}
    </h1>
</div>

<style>

    .container {
        position: absolute;
        top: 10%;

        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        text-align: center;
    }

    .crono {
        transition: all 1000ms;
        font-family: 'VT323', monospace;
        box-sizing: border-box;
        padding: 0px 10px;
        font-size: 200px;
      
        text-align: center;
        border-radius: 10px;
        background: #000c;
        border: 3px solid white;
        color: white;
    }

    .keypress {
        font-size: 250px;
        box-sizing: border-box;
        color: cyan;
        border: 3px solid red;
    }

</style>
