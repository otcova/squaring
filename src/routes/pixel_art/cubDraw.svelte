<script lang="ts">
    import { NUMBER_OF_PROCESSORS } from "$env/static/private";

    const NumberofPixels = 81;
    let PaintingColor = 1; // default painting color // blue
    const COLORS = ["white", "blue", "red", "green", "orange", "yellow"];

    interface Set {
        pos: number[];
        colors: string[];
    }
    
    //////////////////////////////////////////////////////
    let background: string[] = [];

    for (let i = 0; i < NumberofPixels; ++i) {
        background[i] = "white"; // background
    }
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
        return cord[0] * 9 + cord[1];
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
            for (let i = 0; i < 9; ++i) list.push(element * 9 + i);
        });
        return list;
    }

    function make_number_column(list_number: number[]) {
        let list: number[] = [];
        list_number.forEach((element) => {
            for (let i = 0; i < 9; ++i) list.push(element + i * 9);
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
            background[element+orientationX+orientationY*9] = color;
        });
    }

    /////////////////////////////////////////////////////

        function make_face() {
        const lefteye = make_rec([3, 2], [4, 3]);
        const righteye = make_rec([3, 5], [4, 6]);
        
        //ears
        let ears : Set = {
            pos: make_arrayOfarray([[get_number([0, 1])], [get_number([1, 2])], [get_number([0, 5])], [get_number([1, 6])]]),
            colors: [chooseColor(["green", "orange"])],
        }

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

        let legs : Set = {
            pos: make_arrayOfarray([make_rec([7, 2], [8, 2]), make_rec([7, 4], [8, 4]), make_rec([7, 6], [8, 6])]),
            colors: [chooseColor(["green", "yellow"])],
        }


        return [face, ears, eyes, legs];
    }

    //////////////////////////////////////////////////////////////////
    function make_list_set()
    {
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
    const PIXELS_STYLE = Array.from(
        "ptttttttp lpppppppr lpppppppr lpppppppr lpppcpppr lpppppppr lpppppppr lpppppppr pbbbbbbbp"
    )
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
    function rotate()
    {
        for (let i = 0; i < NumberofPixels; ++i)
            background[i] = background[i+9];
    }
</script>

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
            <input type="button" class="button" value="RESET" on:click={reset} />
        </div>

        <div class="oriantation">
            <input type="button" class="button" value="@" on:click={rotate}>
            <input type="button" class="button" value="UP">
            <input type="button" class="button" value="DOWN">
        </div>
    </div>
</div>

<style>
    .container {
        display: block;
        box-sizing: border-box;
        position: fixed;
        margin-left: 500px;
        margin-right: 0;
    }

    .colors {
        display: grid;
        box-sizing: border-box;
        position: relative;
        grid-template-rows: 50fr 50fr;
        grid-template-columns: 50fr 50fr 50fr;

        background-color: #3c4fc0;
        border-radius: 6px;
        padding: 8px;
        gap: 5px;

        width: 170px;
    }
    .oriantation {
        display: grid;
        box-sizing: border-box;
        position: relative;
        grid-template-rows: 50fr;
        grid-template-columns: 50fr 50fr 50fr;

        background-color: #3c4fc0;
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

        background-color: #3c4fc0;
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
        grid-template-columns: repeat(9, 1fr);
        background: black;
        border-radius: 7px;
        padding: 2px;
        margin: 5px;
        gap: 2px;
    }

    .center {
        height: 75px;
        width: 75px;
        background: white;
        border-radius: 15px;
    }

    .pixel {
        height: 75px;
        width: 75px;
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
