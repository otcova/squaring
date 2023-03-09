<script lang="ts">
    import { object_without_properties } from "svelte/internal";

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

    function original() {
        for (const base in colors) {
            colors[base] = new Array(8).fill(base);
        }
    }
</script>

<div class="contenidor">
    <div />
    <div class="face">
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel white" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
    </div>
    <div />
    <div />
    <div class="face">
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel orange" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
    </div>
    <div class="face">
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel green" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
    </div>
    <div class="face">
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel red" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
    </div>
    <div class="face">
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel blue" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
    </div>
    <div />
    <div class="face">
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel yellow" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
        <div class="pixel" />
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
        padding: 2px;
        margin: 5px;
        gap: 1px;
    }

    .pixel {
        height: 30px;
        width: 30px;
        background: white;
        border-radius: 6px;
    }

    .yellow {
        background: yellow;
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
        background: orange;
    }
</style>
