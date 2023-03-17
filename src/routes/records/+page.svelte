<script lang="ts">
    import Console from "$lib/console.svelte";
    import { solves } from "$lib/solves";
    import { formatTime } from "$lib/utils";
    import CubDraw from "../home/cubDraw.svelte";

</script>

<div class="page">
    <div class="content">
        <h1>Storage</h1>
        <Console />
    </div>
    
    <div class="contenedor"> 
        <div class="info">
            Info 
        </div>
        <div class="solves">
            {#each $solves as element, index}
                <div class = "solve"> 
                    <div class="label">{index}</div>
                    <div class="time">{formatTime(element.time)}</div>
                    <div class="scramble">{element.scramble}</div>
                </div>
            {/each}
        </div>
    </div>    
    <CubDraw />
</div>

<style>
    .page {
        display: flex;
        flex-direction: column;

        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        background-image: url($lib/olimpiadas.jpg);
        flex-grow: 1;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: left;
        padding: 0px 60px;
    }

    .contenedor{
        box-sizing: border-box;
        display: flex;
        align-self: left;
        
        margin-left: 60px;

        padding: 10px;
        background: var(--panel);
        flex-direction: column;
        border-radius: 10px;
        width: 65%;
        height: 700px;
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
        padding: 10px 20px;
        margin-bottom: 5px;
        border: 2px solid white;
        border-radius: 10px;
    }
    .info {
        display: flex;
        box-sizing: border-box;

        width: 100%;
        font-size: 20px;
        padding: 10px 20px;
        margin-bottom: 5px;
        border: 2px solid white;
        border-radius: 10px;
    }

    .label {
        display: flex;
        box-sizing: border-box;
        align-items: left;
        justify-content: left;
        
        border-radius: 10px;

        height: 100%;
        width: 5%;
    }

    .time {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        
        border-radius: 10px;

        height: 100%;
        width: 40%;
    }

    .scramble {
        display: flex;
        box-sizing: border-box;
        align-items: right;
        justify-content: right;
    }

</style>



