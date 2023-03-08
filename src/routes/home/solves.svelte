<script lang="ts">
    import { solves } from "./solves";

</script>


<form class = "contenedor">
    <h2 class="title">Solves</h2>

    <div class="records">
        <div class="best">BEST</div>
        <div class="worst">WORST</div>
        <div class="media">MEDIA</div>
    </div>

    <div class="solves">
        {#each $solves as element, index}
            <div class = "solve"> 
                <div class="label">{index}</div>
                <div class="time">{element.time}</div>
            </div>
        {/each}
    </div>

</form>

<style>
    .contenedor{
        box-sizing: border-box;
        display: flex;
        padding: 10px;
        background: rgb(44, 15, 124);
        flex-direction: column;
        border-radius: 10px;
        width: 20%;
        height: 600px;
    }

    .records {
        padding: 10px;
        margin-bottom: 10px;
        display: block;
        box-sizing: border-box;

        font-size: 15px;

        width: 100%;
        height: 15%;
        border: 1px solid white;
        border-radius: 10px;
    }

    .best,
    .worst, 
    .media {
        height: 33%;
        width: 100%;
        margin: 1px;
    }

    .title {
        font-size: 25px;
        margin: 10px;
    }

    .solves {
        overflow-y: scroll;
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