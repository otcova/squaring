<script lang="ts">
    import { element } from "svelte/internal";
    import Crono from "./crono.svelte";
    import { solves } from "./solves";
    import { formatTime } from "./utils";

    

    $: best = Math.min(...$solves.map(element => element.time));
    $: worst =  Math.max(...$solves.map(element => element.time));
    let media = 0;
    $: {
        let sum = 0;
        for (let i = 0; i < $solves.length; ++i) {
            sum += $solves[i].time;
        }
        media = sum/$solves.length;
    };

</script>


<form class = "contenedor">
    <h2 class="title">Solves</h2>

    <div class="records">
        <div class="row">
            <div class="left">BEST</div>
            <div class="right"> {formatTime(best)}</div>
        </div>
        <div class="row">
            <div class="left">WORST</div>
            <div class="right"> {formatTime(worst)}</div>
        </div>
        <div class="row">
            <div class="left">MEDIA</div>
            <div class="right"> {formatTime(media)}</div>
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

</form>

<style>
    .contenedor{
        box-sizing: border-box;
        display: flex;
        padding: 10px;
        background: rgb(59, 59, 70);
        flex-direction: column;
        border-radius: 10px;
        width: 20%;
        height: 600px;
    }

    .records {
        padding: 5px 10px;
        margin-bottom: 10px;
        display: block;
  
        box-sizing: border-box;
        
        font-size: 15px;
        
        width: 100%;
        height: 15%;
        border: 1px solid white;
        border-radius: 10px;
    }
    
    
    .row {
        font-size: 15px;
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
        padding-right: 5px;
        flex-grow: 1;
    }

    .solve{
        display: flex;
        box-sizing: border-box;

        width: 100%;
        height: 30px;
        margin-bottom: 5px;
        border: 1px solid white;
        border-radius: 10px;
    }

    .label {
        display: flex;
        box-sizing: border-box;

        align-items: center;
        justify-content: center;
        
        padding: 10px;
        border: 1px solid white;
        border-radius: 10px;

        height: 100%;
        width: 20%;
    }

    .time {
        height: 100%;
        width: 60%;
        padding: 10px;


        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;

        color: white;
    }
</style>