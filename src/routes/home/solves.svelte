<script lang="ts">
    import { element } from "svelte/internal";
    import Crono from "./crono.svelte";
    import { solves, type Solve } from "$lib/solves";
    import TimeAnimation from "./time_animation.svelte";
    import { formatTime } from "../../lib/utils";
    import { scramble } from "./scramble";
    
    let best = 0;
    let worst = 0;
    let media = 0;
    $: {
        best = Math.min(...$solves.map(element => element.time));
        worst =  Math.max(...$solves.map(element => element.time));

        if (!Number.isFinite(best)) best = 0;
        if (!Number.isFinite(worst)) worst = 0;

        let sum = 0;
        for (let i = 0; i < $solves.length; ++i) {
            sum += $solves[i].time;
        }
        media = sum/$solves.length || 0;
    };

    function showScramble(solve: Solve) {
        $scramble = solve.scramble;
    }

</script>


<div class = "contenedor">
    <h2 class="title">Solves</h2>

    <div class="records">
        <div class="row">
            <div class="left">Best:</div>
            <div class="right"><TimeAnimation time={best}/></div>
        </div>
        <div class="row">
            <div class="left">Worst:</div>
            <div class="right"><TimeAnimation time={worst}/></div>
        </div>
        <div class="row">
            <div class="left">Media:</div>
            <div class="right"><TimeAnimation time={media}/></div>
        </div>
    </div>

    <div class="solves">
        {#each $solves as element, index}
            <div class = "solve">
                <div class="label">{index}</div>
                <div class="time">{formatTime(element.time)}</div>
            </div>
        {/each}
    </div>

</div>

<style>
    .contenedor{
        box-sizing: border-box;
        display: flex;
        padding: 10px;
        background: var(--panel);
        flex-direction: column;
        border-radius: 10px;
        width: 20%;
        height: 700px;
    }

    .records {
        padding: 0px 10px;
        padding-top: 15px;
        
        margin-bottom: 10px;
        display: block;
  
        box-sizing: border-box;
        
        font-size: 15px;
        
        width: 100%;
        height: 25%;
        border: 1px solid white;
        border-radius: 10px;
    }
    
    
    .row {
        font-size: 25px;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        height: 33%;
        width: 100%;
        
    }

    .title {
        font-size: 25px;
        margin: 10px;
    }

    .solves {
        overflow-y: scroll;
        scroll-snap-type: y mandatory;  
        padding-right: 5px;
        flex-grow: 1;

        background: var(--box);
        border-radius: 10px;
    }

    .solve{
        scroll-snap-align: start;
        display: flex;
        box-sizing: border-box;

        width: 100%;
        font-size: 20px;
        padding: 10px 0;
        margin-bottom: 5px;
        border: 2px solid white;
        border-radius: 10px;
    }

    .label {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        
        border-radius: 10px;

        height: 100%;
        width: 20%;
    }

    .time {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        
        border-radius: 10px;

        height: 100%;
        width: 60%;
    }
</style>
