<script lang="ts">
    import { base } from "$app/paths";
    import { object_without_properties } from "svelte/internal";
    import Console from "./console.svelte";

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

    function rotateFace(base: string[]) {
        [base[0], base[2], base[5], base[7]] = [base[5], base[0], base[7], base[2]];
        [base[1], base[3], base[4], base[6]] = [base[3], base[6], base[1], base[4]];
    }

    function rotateBorderClockWise(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[i], c[i], d[i]] = [d[i], a[i], b[i], c[i]];
        }
    }
    function rotateBorderConterClock(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[i], c[i], d[i]] = [b[i], c[i], d[i], a[i]];
        }
    }
    
    // function swap(base: string[], go: string[], n: string) {
    //     let x = 0, y = 0, z = 0;
    //     if (n == "R'") [x, y, z] = [2, 4, 7];
    //     else if (n == "L")  [x, y, z] = [0, 3, 5];
    //     else if (n == "U")  [x, y, z] = [0, 1, 2];
    //     else if (n == "D")  [x, y, z] = [5, 6, 7];
    //     else {
    //         throw "hola";
    //     }

    //     [base[x], go[x]] = [go[x], base[x]];
    //     [base[y], go[y]] = [go[y], base[y]];
    //     [base[z], go[z]] = [go[z], base[z]];
    // }

    // function column(n: string) {
    //     swap(colors.green, colors.white, n);
    //     swap(colors.white, colors.blue, n);
    //     swap(colors.blue, colors.yellow, n);
    // }

    

    function scramble(algorithm: string) {
        
        const moves = algorithm.split(" ");
        for (const move of moves) {
            if (move == "R") {
                rotateFace(colors.red);
                rotateBorderClockWise(colors.green, colors.white, colors.blue, colors.yellow, [2, 4, 7]);
                //for (let i = 0; i < 3; ++i) column("R'");
            } else if (move == "R'") {
                for (let i = 0; i < 3; ++i) rotateFace(colors.red);
                //column("R'");
            } else if (move == "L") {
                rotateFace(colors.orange);
                //column("L");
            } else if (move == "L'") {
                for (let i = 0; i < 3; ++i) rotateFace(colors.orange);
                //for (let i = 0; i < 3; ++i) column("L")
            } else if (move == "U") {
                rotateFace(colors.white);
                //row("U");
            } else if (move == "U'") {
                for (let i = 0; i < 3; ++i) rotateFace(colors.white);
                //for (let i = 0; i < 3; ++i) row("U");
            } else if (move == "D") {
                rotateFace(colors.yellow);
                //for (let i = 0; i < 3; ++i) row("D");
            } else if (move == "D'") {
                for (let i = 0; i < 3; ++i) rotateFace(colors.yellow);
                //row("D");
            }
        }
    }

    function original() {
        for (const base  in colors) {
            colors[base as keyof Colors] = new Array(8).fill(base);
        }
    }
    original();

    scramble("R");
</script>

<div class="contenidor">
    <div />
    <div class="face">
        <div class="pixel {colors.white[0]}" />
        <div class="pixel {colors.white[1]}" />
        <div class="pixel {colors.white[2]}" />
        <div class="pixel {colors.white[3]}" />
        <div class="pixel white" />
        <div class="pixel {colors.white[4]}" />
        <div class="pixel {colors.white[5]}" />
        <div class="pixel {colors.white[6]}" />
        <div class="pixel {colors.white[7]}" />
    </div>
    <div />
    <div />
    <div class="face">
        <div class="pixel {colors.orange[0]}" />
        <div class="pixel {colors.orange[1]}" />
        <div class="pixel {colors.orange[2]}" />
        <div class="pixel {colors.orange[3]}" />
        <div class="pixel orange" />
        <div class="pixel {colors.orange[4]}" />
        <div class="pixel {colors.orange[5]}" />
        <div class="pixel {colors.orange[6]}" />
        <div class="pixel {colors.orange[7]}" />
    </div>
    <div class="face">
        <div class="pixel {colors.green[0]}" />
        <div class="pixel {colors.green[1]}" />
        <div class="pixel {colors.green[2]}" />
        <div class="pixel {colors.green[3]}" />
        <div class="pixel green" />
        <div class="pixel {colors.green[4]}" />
        <div class="pixel {colors.green[5]}" />
        <div class="pixel {colors.green[6]}" />
        <div class="pixel {colors.green[7]}" />
    </div>
    <div class="face">
        <div class="pixel {colors.red[0]}" />
        <div class="pixel {colors.red[1]}" />
        <div class="pixel {colors.red[2]}" />
        <div class="pixel {colors.red[3]}" />
        <div class="pixel red" />
        <div class="pixel {colors.red[4]}" />
        <div class="pixel {colors.red[5]}" />
        <div class="pixel {colors.red[6]}" />
        <div class="pixel {colors.red[7]}" />
    </div>
    <div class="face">
        <div class="pixel {colors.blue[0]}" />
        <div class="pixel {colors.blue[1]}" />
        <div class="pixel {colors.blue[2]}" />
        <div class="pixel {colors.blue[3]}" />
        <div class="pixel blue" />
        <div class="pixel {colors.blue[4]}" />
        <div class="pixel {colors.blue[5]}" />
        <div class="pixel {colors.blue[6]}" />
        <div class="pixel {colors.blue[7]}" />
    </div>
    <div />
    <div class="face">
        <div class="pixel {colors.yellow[0]}" />
        <div class="pixel {colors.yellow[1]}" />
        <div class="pixel {colors.yellow[2]}" />
        <div class="pixel {colors.yellow[3]}" />
        <div class="pixel yellow" />
        <div class="pixel {colors.yellow[4]}" />
        <div class="pixel {colors.yellow[5]}" />
        <div class="pixel {colors.yellow[6]}" />
        <div class="pixel {colors.yellow[7]}" />
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
        padding: 3px;
        margin: 5px;
        gap: 2px;
    }

    .pixel {
        height: 30px;
        width: 30px;
        background: white;
        border-radius: 7px;
    }

    .yellow {
        background: #ffff00;
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
