<script lang="ts">
    import Console from "./console.svelte";

    interface Cub {
        top: string[];
        left: string[];
        front: string[];
        right: string[];
        back: string[];
        down: string[];
    }

    interface Colors {
        white: string[];
        orange: string[];
        green: string[];
        red: string[];
        blue: string[];
        yellow: string[];
    }

    let cub: Cub = {
        top: [],
        left: [],
        front: [],
        right: [],
        back: [],
        down: [],
    };

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
            const face = cub[faceName as keyof Cub];
            colors[face[4] as keyof Colors] = face;
        }
        colors = colors;
    }

    function rotateFace(base: string[]) {
        [base[0], base[2], base[6], base[8]] = [base[6], base[0], base[8], base[2]];
        [base[1], base[3], base[5], base[7]] = [base[3], base[7], base[1], base[5]];
    }

    function invertion(i: number) {
        switch (i) {
            case 2:  return 6;
            case 5: return 3;
            case 8: return 0;

            case 0: return 8;
            case 3: return 5;
            case 6: return 2;
        }
        return i;
    }

    function rol(k: number, n: number) {
        for (let i = 0; i < n; ++i) {
            switch (k) {
                case 0: k = 2; break;
                case 1: k = 5; break;
                case 2: k = 8; break;
                case 3: k = 1; break;    
                case 5: k = 7; break;
                case 6: k = 0; break;
                case 7: k = 3; break;
                case 8: k = 6; break;
            }
        }
        return k;
    }

    function rotateRightLeftLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
        for (const i of n) {
            [a[i], b[i], c[invertion(i)], d[i]] = [d[i], a[i], b[i], c[invertion(i)]];
        }
    }

    function rotateTopDownLayer(a: string[], b: string[], c: string[], d: string[], n: number[]) {
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
            if (move[1] == "2") return [move[0], move[0]];
            if (move[1] == "'") return [move[0], move[0], move[0]];
            return [move];
        });

        for (const move of moves) {
            if (move == "R") {
                rotateRightLeftLayer(cub.front, cub.top, cub.back, cub.down, [2, 5, 8]);
                rotateFace(cub.right);
            } else if (move == "L") {
                rotateFace(cub.left);
                rotateRightLeftLayer(cub.front, cub.down, cub.back, cub.top, [0, 3, 6]);
            } else if (move == "U") {
                rotateTopDownLayer(cub.front, cub.left, cub.back, cub.right, [0, 1, 2]);
                rotateFace(cub.top);
            } else if (move == "D") {
                rotateTopDownLayer(cub.front, cub.right, cub.back, cub.left, [6, 7, 8]);
                rotateFace(cub.down);
            } else if (move == "F") {
                rotateFrontLayer(cub.top, cub.right, cub.down, cub.left, [6, 7, 8]);
                rotateFace(cub.front);
            } else if (move == "B") {
                rotateBackLayer(cub.top, cub.left, cub.down, cub.right, [0, 1, 2]);
                rotateFace(cub.back);
            }   
            else alert("error algorithm");
        }
    }

    function original() {
        cub = {
            front: Array(9).fill("green"),
            right: Array(9).fill("red"),
            down: Array(9).fill("yellow"),
            back: Array(9).fill("blue"),
            top: Array(9).fill("white"),
            left: Array(9).fill("orange"),
        };
    }


    original();
    scramble("F2 U2 F L F R D' U2 B U2 B2 F2 L2 D F2 R' U2 F2 R2 D B' U2 F2 D F D' U2 L' D R'");
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
