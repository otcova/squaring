/*




DO NOT SCROLL


































STOP













































END OF FILE




















































NOTHING TO SEE HERE































































































STOP!!!!













*/

<script lang="ts">
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

    function invertion(i: number) {
        switch (i) {
            case 2:  return 5;
            case 4: return 3;
            case 7: return 0;

            case 0: return 7;
            case 3: return 4;
            case 5: return 2;
        }
        throw "tonto";
    }

    function rol(k: number, n: number) {
        for (let i = 0; i < n; ++i) {
            switch (k) {
                case 0: k = 2;
                break;
                case 1: k = 4;
                break;
                case 2: k = 7;
                break;
                case 3: k = 1;
                break;    
                case 4: k = 6;
                break;
                case 5: k = 0; 
                break;
                case 6: k = 3; 
                break;
                case 7: k = 5; 
                break;
            }
        }
        return k;
    }

    function rotateRightLeftLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[i], c[invertion(i)], d[i]] = [d[i], a[i], b[i], c[invertion(i)]];
        }
    }

    function rotateTopButtonLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[i], c[i], d[i]] = [d[i], a[i], b[i], c[i]];
        }
    }
    
    function rotateFrontLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[rol(i, 1)], c[rol(i, 2)], d[rol(i, 3)]] = [d[rol(i, 3)], a[i], b[rol(i, 1)], c[rol(i, 2)]];
        }
    }

    function rotateBackLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[rol(i, 3)], c[rol(i, 2)], d[rol(i, 1)]] = [d[rol(i, 1)], a[i], b[rol(i, 3)], c[rol(i, 2)]];
        }
    }

    function scramble(algorithm: string) {
        let moves = algorithm.trim().split(" ");

        moves = moves.flatMap((move) => {
            if (move == "M") return ["R", "L'"];
            return [move]
        }).flatMap((move) => {
            if (move[1] == "2") return [move[0], move[0]];
            if (move[1] == "'") return [move[0], move[0], move[0]];
            return [move]
        });

        for (const move of moves) {
            if (move == "R") {
                rotateRightLeftLayer(colors.green, colors.white, colors.blue, colors.yellow, [2, 4, 7]);
                rotateFace(colors.red);
            } else if (move == "L") {
                rotateFace(colors.orange);
                rotateRightLeftLayer(colors.green, colors.yellow, colors.blue, colors.white, [0, 3, 5]);
            } else if (move == "U") {
                rotateTopButtonLayer(colors.green, colors.orange, colors.blue, colors.red, [0, 1, 2]);
                rotateFace(colors.white);
            } else if (move == "D") {
                rotateTopButtonLayer(colors.green, colors.red, colors.blue, colors.orange, [5, 6, 7]);
                rotateFace(colors.yellow);
            } else if (move == "F") {
                rotateFrontLayer(colors.white, colors.red, colors.yellow, colors.orange, [5, 6, 7]);
                rotateFace(colors.green);
            } else if (move == "B") {
                rotateBackLayer(colors.white, colors.orange, colors.yellow, colors.red, [0, 1, 2]);
                rotateFace(colors.blue);
            }
            else alert("error algorithm");
        }
    }

    function original() {
        for (const base  in colors) {
            colors[base as keyof Colors] = new Array(8).fill(base);
        }
    }
    original();

    scramble("R B");
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
