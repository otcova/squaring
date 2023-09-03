<script lang="ts">
    import { onMount } from "svelte";

    const NumberofLayer = 9;
    const NumberofPixels = NumberofLayer * NumberofLayer;
    let PaintingColor = 1; // default painting color // blue
    const COLORS = ["white", "blue", "red", "green", "orange", "yellow"];

    interface Set {
        pos: number[];
        colors: string[];
    }

    //////////////////////////////////////////////////////
    let background: string[] = Array(NumberofPixels).fill("white");
    /////////////////////////////////////////////////////

    function randInt(min: number, max: number) {
        return Math.trunc(min + Math.random() * (max - min));
    }

    function pickRandom<T>(list: T[]): T {
        return list[Math.trunc(Math.random() * list.length)];
    }

    function randColor() {
        let i: number = randInt(0, 6);
        return COLORS[i];
    }

    function chooseColor(choose_colors: string[]) {
        return pickRandom(choose_colors);
    }

    function get_number(cord: number[]) {
        return cord[0] * NumberofLayer + cord[1];
    }

    function get_cord(i: number) {
        return [Math.trunc(i / NumberofLayer), i % NumberofLayer];
    }

    function make_number_array(begin: number, end: number) {
        let list = [];
        for (let i = begin; i <= end; ++i) list.push(i);
        return list;
    }

    function make_arrayOfarray(listoflist: number[][]) {
        let list: number[] = [];
        listoflist.forEach((array) => {
            array.forEach((element) => {
                list.push(element);
            });
        });
        return list;
    }

    function make_number_line(list_number: number[]) {
        let list: number[] = [];
        list_number.forEach((element) => {
            for (let i = 0; i < NumberofLayer; ++i)
                list.push(element * NumberofLayer + i);
        });
        return list;
    }

    function make_number_column(list_number: number[]) {
        let list: number[] = [];
        list_number.forEach((element) => {
            for (let i = 0; i < NumberofLayer; ++i)
                list.push(element + i * NumberofLayer);
        });
        return list;
    }

    function make_rec(begin: number[], end: number[]) {
        let list = [];
        let height = Math.abs(end[0] - begin[0]);
        let width = Math.abs(end[1] - begin[1]);
        for (let i = 0; i < height + 1; ++i) {
            for (let j = 0; j < width + 1; ++j)
                list.push(get_number([begin[0] + i, begin[1]]) + j);
        }
        return list;
    }

    /////////////////////////////////////////////////////
    const orientationX = 0;
    const orientationY = 0;

    function createSet(set: Set) {
        set.pos.forEach((element) => {
            let color: string = chooseColor(set.colors);
            background[element + orientationX + orientationY * NumberofLayer] =
                color;
        });
    }

    /////////////////////////////////////////////////////

    function make_face() {
        const lefteye = make_rec([3, 2], [4, 3]);
        const righteye = make_rec([3, 5], [4, 6]);

        //ears
        let ears: Set = {
            pos: make_arrayOfarray([
                [get_number([0, 1])],
                [get_number([1, 2])],
                [get_number([0, 5])],
                [get_number([1, 6])],
            ]),
            colors: [chooseColor(["green", "orange"])],
        };

        let face: Set = {
            pos: make_arrayOfarray([make_rec([2, 1], [6, 7])]),
            colors: [chooseColor(["green", "orange"])],
        };

        let eyes: Set = {
            pos: make_arrayOfarray([lefteye, righteye]),
            colors: ["blue", "red"],
        };

        let mouth: Set = {
            pos: make_arrayOfarray([make_rec([7, 1], [7, 7])]),
            colors: ["green", "yellow"],
        };

        let legs: Set = {
            pos: make_arrayOfarray([
                make_rec([7, 2], [8, 2]),
                make_rec([7, 4], [8, 4]),
                make_rec([7, 6], [8, 6]),
            ]),
            colors: [chooseColor(["green", "yellow"])],
        };

        return [face, ears, eyes, legs];
    }

    //////////////////////////////////////////////////////////////////
    function make_list_set() {
        return make_face();
    }

    function createfullSet() {
        let list_set: Set[] = make_list_set();
        list_set.forEach((element) => {
            createSet(element);
        });
    }

    function randomSet() {
        for (let i = 0; i < NumberofPixels; ++i) {
            let color: string = randColor();
            background[i] = color;
        }
    }

    function reset() {
        for (let i = 0; i < NumberofPixels; ++i) {
            let color: string = randColor();
            background[i] = "white";
        }
    }

    //$: {}
    ////////////////////////////////////////////////////////////////////////
    function changeColor(pos: number) {
        background[pos] = COLORS[PaintingColor];
    }

    function change_paitingColor(color: number) {
        PaintingColor = color;
    }

    function handleMouseMove(event: MouseEvent, i: number) {
        if (event.buttons == 1) changeColor(i);
    }
    ////////////////////////////////////////////////////////////////////////////////////
    function make_cub() {
        let list: string = "";
        for (let i = 0; i < NumberofLayer; ++i) {
            for (let j = 0; j < NumberofLayer; ++j) {
                if (i == 0 && j != 0 && j != NumberofLayer - 1) list += "t";
                else if (
                    i == NumberofLayer - 1 &&
                    j != 0 &&
                    j != NumberofLayer - 1
                )
                    list += "b";
                else if (i != 0 && i != NumberofLayer - 1 && j == 0)
                    list += "l";
                else if (
                    i != 0 &&
                    i != NumberofLayer - 1 &&
                    j == NumberofLayer - 1
                )
                    list += "r";
                else list += "p";
            }
            list += " ";
        }
        return list;
    }

    const PIXELS_STYLE = Array.from(make_cub())
        .map((c) => {
            if (c == "p") return "pixel";
            if (c == "t") return "pixel border_top";
            if (c == "b") return "pixel border_bottom";
            if (c == "l") return "pixel border_left";
            if (c == "r") return "pixel border_rigth";
            if (c == "c") return "center";
        })
        .filter((v) => v);
    ///////////////////////////////////////////////////////////////////////////////
    function bad_rotate() {
        for (let i = 0; i < NumberofPixels; ++i) {
            let ori = get_cord(i);
            let cord = get_number([ori[1], NumberofLayer - 1 - ori[0]]);
            background[cord] = background[i];
        }
    }

    function scramble() {
        let new_background: string[] = [];
        for (let i = 0; i < NumberofPixels; ++i) {
            new_background[i] = background[randInt(0, NumberofPixels)];
        }
        background = new_background;
    }

    function rotate() {
        let new_background: string[] = [];
        for (let i = 0; i < NumberofPixels; ++i) {
            let ori = get_cord(i);
            let cord = get_number([ori[1], NumberofLayer - 1 - ori[0]]);
            new_background[cord] = background[i];
        }
        background = new_background;
    }

    function up() {
        for (let i = 0; i < NumberofLayer; ++i) {
            background.push(background.shift() as string);
        }
        background = background;
    }

    function down() {
        for (let i = 0; i < NumberofLayer; ++i) {
            background.unshift(background.pop() as string);
        }
        background = background;
    }

    function right() {
        let new_background: string[] = [];
        for (let i = NumberofPixels - 1; i >= 0; --i)
            new_background[i] = background[i - 1];
        for (let i = 0; i < NumberofPixels; i += NumberofLayer)
            new_background[i] = background[i + NumberofLayer - 1];
        background = new_background;
    }

    function left() {
        let new_background: string[] = [];
        for (let i = 0; i < NumberofPixels; ++i)
            new_background[i] = background[i + 1];
        for (let i = NumberofLayer - 1; i < NumberofPixels; i += NumberofLayer)
            new_background[i] = background[i - NumberofLayer + 1];

        background = new_background;
    }
    ////////////////////////////////////////////////////////

    function key_action(event : KeyboardEvent) {
        console.log(event);
        if (event.key == 'ArrowUp')
            up();
        if (event.key == 'ArrowDown')
            down();
        if (event.key == 'ArrowLeft')
            left();
        if (event.key == 'ArrowRight')
            right();
    }
    /////////////////////////////////////////////////////////
    function colortorgb() {
        if (PaintingColor == 0)
            return "#ffffff";
        if (PaintingColor == 1)
            return "#0000ff";
        if (PaintingColor == 2)
            return "#ff0000";
        if (PaintingColor == 3)
            return "#008000";
        if (PaintingColor == 4)
            return "#ff6600";
        if (PaintingColor == 5)
            return "#ffff00";
        return "#000000";
    }

    onMount(() => {
        let rgbColor: HTMLInputElement;
        rgbColor.value = colortorgb();

    });

</script>
<svelte:window on:keydown={(event) => key_action(event)} />

<div class="container">
    <div class="face">
        {#each PIXELS_STYLE as style, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="{style} {background[i]}"
                on:click={() => changeColor(i)}
                on:mousemove={(event) => handleMouseMove(event, i)}
            />
        {/each}
    </div>

    <div class="input">
        <div class="painting">
            <div class="colors">
                {#each COLORS as color, i}
                    <input
                        type="button"
                        class="button {color}"
                        value="   "
                        on:click={() => change_paitingColor(i)}
                    />
                {/each}
            </div>
            <div class="rgb">
                <input type="color" class="button2" name="rgb" id="rgb" bind:this = {rgbColor}>
            </div>
        </div>

        <div class="set">
            <input
                type="button"
                class="button"
                value="CREATE SET"
                on:click={createfullSet}
            />
            <input
                type="button"
                class="button"
                value="RANDOM SET"
                on:click={randomSet}
            />
            <input
                type="button"
                class="button"
                value="RESET"
                on:click={reset}
            />
        </div>

        <div class="oriantation">
            <input
                type="button"
                class="button"
                value="@"
                on:click={bad_rotate}
            />
            <input
                type="button"
                class="button"
                value="▲"
                on:click={up}
            />
            <input type="button" class="button" value="↻" on:click={rotate} />
            <input
                type="button"
                class="button"
                value="◄"
                on:click={left}
            />
            <input
                type="button"
                class="button"
                value="▼"
                on:click={down}
            />
            <input
                type="button"
                class="button"
                value="►"
                on:click={right}
            />
        </div>
    </div>
</div>

<style>
    .container {
        display: block;
        box-sizing: border-box;
        position: fixed;
    }

    .title {
        display: block;
        box-sizing: border-box;
        position: relative;

        background-color: #3c50c0;
        border-radius: 6px;
        padding: 8px;
        margin: 0px;
        font-size: 18px;
    }

    .painting {
        display: grid;
        box-sizing: border-box;
        position: relative;
        grid-template-rows: 50fr;
        grid-template-columns: 50fr 50fr;

        background-color: #3c50c0;
        border-radius: 6px;
        padding: 4px;
        gap: 5px;

        width: 250px;
    }

    .rgb {
        display: block;
        box-sizing: border-box;
        position: relative;
        padding: 4px;
        border-radius: 6px;
    }

    .colors {
        display: grid;
        box-sizing: border-box;
        position: relative;
        grid-template-rows: 50fr 50fr;
        grid-template-columns: 50fr 50fr 50fr;

        height: 100px;

        border-radius: 6px;
        padding: 4px;
        gap: 5px;
    }

    .oriantation {
        display: grid;
        box-sizing: border-box;
        position: relative;
        grid-template-rows: 50fr 50fr;
        grid-template-columns: 50fr 50fr 50fr;

        height: 100px;

        background-color: #3c50c0;
        border-radius: 6px;
        padding: 8px;
        gap: 5px;
    }

    .set {
        display: grid;
        box-sizing: border-box;
        position: relative;
        grid-template-rows: 50fr;
        grid-template-columns: 50fr 50fr 50fr;

        height: 75px;

        background-color: #3c50c0;
        border-radius: 6px;
        padding: 8px;
        gap: 5px;
    }

    .input {
        display: block;
        box-sizing: border-box;
        position: fixed;

        bottom: 100px;
        left: 1300px;


    }

    .button2 {
        display: inline-block;
        outline: none;
        border: none;
        cursor: pointer;

        will-change: box-shadow, transform;
        background: radial-gradient(
            100% 100% at 100% 0%,
            #89e5ff 0%,
            #5468ff 100%
        );
        box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
            0px 7px 13px -3px rgb(45 35 66 / 30%),
            inset 0px -3px 0px rgb(58 65 111 / 50%);
        border-radius: 6px;
        color: #fff;
        height: 48px;
        font-size: 18px;
        text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
        transition: box-shadow 0.15s ease, transform 0.15s ease;

        width: 100%;
        height: 100%;
    }


    .button {
        display: inline-block;
        outline: none;
        border: none;
        cursor: pointer;

        will-change: box-shadow, transform;
        background: radial-gradient(
            100% 100% at 100% 0%,
            #89e5ff 0%,
            #5468ff 100%
        );
        box-shadow: 0px 2px 4px rgb(45 35 66 / 40%),
            0px 7px 13px -3px rgb(45 35 66 / 30%),
            inset 0px -3px 0px rgb(58 65 111 / 50%);
        padding: 0 16px;
        border-radius: 6px;
        color: #fff;
        height: 48px;
        font-size: 18px;
        text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
        transition: box-shadow 0.15s ease, transform 0.15s ease;

        width: 100%;
        height: 100%;
    }
    .button:hover {
        box-shadow: 0px 4px 8px rgb(45 35 66 / 40%),
            0px 7px 13px -3px rgb(45 35 66 /30%), inset 0px -3px 0px #3c4fc0;
        transform: translateY(-10px);
    }
    .button:active {
        box-shadow: inset 0px 3px 7px #3c4fe0;
        transform: translateY(10px);
    }

    .face {
        display: grid;
        grid-template-columns: repeat(9, 1fr); /*change layer*/

        position: fixed;
        bottom: 100px;
        left: 500px;

        background: black;
        border-radius: 7px;
        gap: 0px;
        padding: 1px;
        width: 750px;
        height: 750px;
    }

    .center {
        background: white;
        border-radius: 15px;
    }

    .pixel {
        background: white;
        border-radius: 5px;
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
    .border_button {
        border-radius: 2px;
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }

    .yellow {
        background: #ffff00;
    }
    .red {
        background: #ff0000;
    }
    .green {
        background: #008000;
    }
    .blue {
        background: #0000ff;
    }
    .white {
        background: #ffffff;
    }
    .orange {
        background: #ff6600;
    }
</style>
