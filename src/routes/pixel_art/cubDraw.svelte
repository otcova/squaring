<script lang="ts">
    const NumberofPixels = 81;
    let PaintingColor = 0;

    interface Colors {
        white: string[];
        orange: string[];
        green: string[];
        red: string[];
        blue: string[];
        yellow: string[];
    }

    interface Set {
        pos: number[];
        colors: string[];
    }

    let set: Set[] = [
        {
            pos: [],
            colors: [],
        },
    ];

    let colors: Colors = {
        white: [],
        orange: [],
        green: [],
        red: [],
        blue: [],
        yellow: [],
    };
    //////////////////////////////////////////////////////
    for (let i = 0; i < NumberofPixels; ++i) {
        colors.white[i] = "white";
    }
    /////////////////////////////////////////////////////
    const ColorsList: string[] = [
        "white",
        "blue",
        "red",
        "green",
        "orange",
        "yellow",
    ];

    function colorNumber(color: string) {
        for (let i = 0; i < 6; ++i) {
            if (ColorsList[i] == color) return i;
        }
        return -1;
    }

    function randInt(min: number, max: number) {
        return Math.trunc(min + Math.random() * (max - min));
    }
    
    function pickRandom<T>(list: T[]): T {
        return list[Math.trunc(Math.random() * list.length)];
    }


    function randColor() {
        let i: number = randInt(0, 6);
        return ColorsList[i];
    }

    function chooseColor(choose_colors: string[]) {
        return  pickRandom(choose_colors);
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
    function createSet(set: Set) {
        set.pos.forEach((element) => {
            let color: string = chooseColor(set.colors);
            colors.white[element] = color;
        });
    }

    function createfullSet() {
        list_set.forEach((element) => {
            createSet(element);
        });
    }

    function randomSet() {
        for (let i = 0; i < NumberofPixels; ++i) {
            let color: string = randColor();
            colors.white[i] = color;
        }
    }

    function reset() {
        for (let i = 0; i < NumberofPixels; ++i) {
            let color: string = randColor();
            colors.white[i] = "white";
        }
    }

    //$: {}
    ////////////////////////////////////////////////////////////////////////
    function changeColor(pos: number) {
        colors.white[pos] = ColorsList[PaintingColor];
    }
    /////////////////////////////////////////////////////
    const lefteye = make_rec([2, 2], [3, 3]);
    const righteye = make_rec([2, 5], [3, 6]);

    let set0: Set = {
        pos: make_arrayOfarray([make_rec([1, 1], [4, 7])]),
        colors: [chooseColor(["green", "orange"])],
    };

    let set1: Set = {
        pos: make_arrayOfarray([lefteye, righteye]),
        colors: ["blue", "red"],
    };
    let set2: Set = {
        pos: make_arrayOfarray([make_number_line([5])]),
        colors: ["green", "yellow"],
    };
    const list_set: Set[] = [set0, set1, set2];

    function change_paitingColor(color: number) {
        PaintingColor = color;
    }

    function handleMouseMove(event : MouseEvent, i : number)
    {
        if (event.buttons == 1)
            changeColor(i);        
        
    }

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

    const COLORS = ["white", "blue", "red", "green", "orange", "yellow"];
</script>

<div class="container">
    <div class="face">
        {#each PIXELS_STYLE as style, i}
            <div
                class="{style} {colors.white[i]}"
                on:click={() => changeColor(i)}
                on:mousemove = {event => handleMouseMove(event, i)}
                
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
        position: fixed;
        grid-template-rows: 50fr 50fr;
        grid-template-columns: 50fr 50fr 50fr;

        background-color: #3c4fc0;
        border-radius: 6px;
        padding: 8px;
        gap: 5px;

        bottom: 200px;
        right: 200px;
    }
    .input {
        display: block;
        box-sizing: border-box;
        position: fixed;

        bottom: 100px;
        right: 200px;
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
