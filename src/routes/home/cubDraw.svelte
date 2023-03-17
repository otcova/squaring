<script lang="ts">
    import Console from "$lib/console.svelte";
    import {Cub} from "./cub";
    import {scramble} from "./scramble";

    let cub = new Cub();

    interface Colors {
        white: string[];
        orange: string[];
        green: string[];
        red: string[];
        blue: string[];
        yellow: string[];
    }

    let colors: Colors = {
        white: [],
        orange: [],
        green: [],
        red: [],
        blue: [],
        yellow: [],
    };

    $: {
        for (const faceName in cub) {
            const face = cub[faceName as keyof Cub] as string[];
            colors[face[4] as keyof Colors] = face;
        }
        colors = colors;
    }
    
    scramble.subscribe(moves => {
        cub = new Cub();
        cub.scramble(moves);
    });
</script>

<div class="contenidor">
    <div />
    <div class="face">
        <div class="pixel {colors.white[0]}" />
        <div class="border_top {colors.white[1]}" />
        <div class="pixel {colors.white[2]}" />
        <div class="border_left {colors.white[3]}" />
        <div class="center white"></div>
        <div class="border_right {colors.white[5]}" />
        <div class="pixel {colors.white[6]}" />
        <div class="border_buttom {colors.white[7]}" />
        <div class="pixel {colors.white[8]}" />
    </div>
    <div />
    <div />
    <div class="face">
        <div class="pixel {colors.orange[0]}" />
        <div class="border_top {colors.orange[1]}" />
        <div class="pixel {colors.orange[2]}" />
        <div class="border_left {colors.orange[3]}" />
        <div class="center orange" />
        <div class="border_right {colors.orange[5]}" />
        <div class="pixel {colors.orange[6]}" />
        <div class="border_buttom {colors.orange[7]}" />
        <div class="pixel {colors.orange[8]}" />
    </div>
    <div class="face">
        <div class="pixel {colors.green[0]}" />
        <div class="border_top {colors.green[1]}" />
        <div class="pixel {colors.green[2]}" />
        <div class="border_left {colors.green[3]}" />
        <div class="center green" />
        <div class="border_right {colors.green[5]}" />
        <div class="pixel {colors.green[6]}" />
        <div class="border_buttom {colors.green[7]}" />
        <div class="pixel {colors.green[8]}" />
    </div>
    <div class="face">
        <div class="pixel {colors.red[0]}" />
        <div class="border_top {colors.red[1]}" />
        <div class="pixel {colors.red[2]}" />
        <div class="border_left {colors.red[3]}" />
        <div class="center red" />
        <div class="border_right {colors.red[5]}" />
        <div class="pixel {colors.red[6]}" />
        <div class="border_buttom {colors.red[7]}" />
        <div class="pixel {colors.red[8]}" />
    </div>
    <div class="face">
        <div class="pixel {colors.blue[0]}" />
        <div class="border_top {colors.blue[1]}" />
        <div class="pixel {colors.blue[2]}" />
        <div class="border_left {colors.blue[3]}" />
        <div class="center blue" />
        <div class="border_right {colors.blue[5]}" />
        <div class="pixel {colors.blue[6]}" />
        <div class="border_buttom {colors.blue[7]}" />
        <div class="pixel {colors.blue[8]}" />
    </div>
    <div />
    <div class="face">
        <div class="pixel {colors.yellow[0]}" />
        <div class="border_top {colors.yellow[1]}" />
        <div class="pixel {colors.yellow[2]}" />
        <div class="border_left {colors.yellow[3]}" />
        <div class="center yellow" />
        <div class="border_right {colors.yellow[5]}" />
        <div class="pixel {colors.yellow[6]}" />
        <div class="border_buttom {colors.yellow[7]}" />
        <div class="pixel {colors.yellow[8]}" />
    </div>
</div>

<style>
    
    .contenidor {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 50fr 50fr 50fr 50fr;
        
        box-sizing: border-box;
        position: fixed;
        bottom: 50px;
        right: 100px;
    }
    
    .face {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background: black;
        border-radius: 7px;
        padding: 2px;
        margin: 5px;
        gap: 2px;
    }
    
    .center {
        height: 30px;
        width: 30px;
        background: white;
        border-radius: 15px;
    }

    .pixel {
        height: 30px;
        width: 30px;
        background: white;
        border-radius: 2px;
    }

    .border_right {
        border-radius: 2px;
        border-bottom-left-radius: 7px;
        border-top-left-radius: 7px;
    }

    .border_left {
        border-radius: 2px;
        border-bottom-right-radius: 7px;
        border-top-right-radius: 7px;
    }

    .border_top {
        border-radius: 2px;
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    } 
    .border_buttom {
        border-radius: 2px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }

    .center.white {
        background: url($lib/gan_icon.png);
        background-size: cover;
    }

    .yellow {
        background: #ff0;
    }
    .red {
        background: red;
    }
    .green {
        background: green;
    }
    .blue {
        background: blue;
    }
    .white {
        background: white;
    }
    .orange {
        background: #f60;
    }

</style>
