<script lang="ts">
    import { each } from "svelte/internal";

    const NumberofPixels = 89; 

    const ColorsList: string[] = [
        "white",
        "blue",
        "red",
        "green",
        "orange",
        "yellow",
    ];

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

    let set: Set[] = [{
        pos: [],
        colors: [],
    }]


    let colors: Colors = {
        white: [],
        orange: [],
        green: [],
        red: [],
        blue: [],
        yellow: [],
    };

    for (let i = 0; i < NumberofPixels; ++i) {
        colors.white[i] = "white";
    }

    ////////////////////////////////////////////////
    function colorNumber(color: string) {
        for (let i = 0; i < 6; ++i) {
            if (ColorsList[i] == color) return i;
        }
        return -1;
    }

    function randColor() {
        let i: number = Math.round(Math.random() * 10) % 6;
        return ColorsList[i];
    }

    function restictionColor(choose_colors : string[]) {
        let i: number = Math.round(Math.random()) % choose_colors.length;
        return choose_colors[i];
    }

    function get_number(i : number, j : number)
    {
        return i*9 + j;
    }

    function make_number_array(begin : number, end : number)
    {
        let list = [];
        for (let i = begin; i <= end; ++i)
            list.push(i);
        return list;
    }

    function make_arrayOfarray(listoflist : number[][])
    {
        let list : number[] = [];
        listoflist.forEach(array => {
            array.forEach(element => {
                list.push(element);
            });
        });
        return list;
    }

    function make_number_line(list_number : number[])
    {
        let list : number[] = [];
        list_number.forEach(element => {
            for (let i = 0; i < 9; ++i)
                list.push(element*9 + i);
        });
        return list;
    }

    function make_number_column(list_number : number[])
    {
        let list : number[] = [];
        list_number.forEach(element => {
            for (let i = 0; i < 9; ++i)
                list.push(element + i*9);
        });
        return list;
    }

    function make_number_rectangle(begin : number, end : number)
    {
        let list = [];
        let width = Math.abs(end%9 - begin%9);
        let height = Math.abs(Math.round(end/9) - Math.round(begin/9));
        console.log(height);
        for (let i = 0; i < height + 1; ++i)
        {
            for(let j = 0; j < width + 1; ++j)
                list.push(begin+9*i + j);
        }
        return list;
    }

    /////////////////////////////////////////////////////
    function createSet(set : Set)
    {
        set.pos.forEach(element => {
            let color: string = restictionColor(set.colors);
            colors.white[element] = color;
        });
    }

    function createfullSet()
    {
        list_set.forEach(element => {
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

    function changeColor(pos: number) {
        colors.white[pos] = ColorsList[colorNumber(colors.white[pos]) + 1];
    }

    /////////////////////////////////////////////////////
    const lefteye = make_number_rectangle(get_number(2, 2), get_number(3, 3));
    const righteye = make_number_rectangle(get_number(2, 5), get_number(3, 6));

    let set1 : Set = {
        pos : make_arrayOfarray([lefteye, righteye]),
        colors : ["blue", "red"],
    }
    let set2 : Set = {
        pos : make_arrayOfarray([make_number_line([5])]),
        colors : ["green", "yellow"],
    }
    const list_set : Set[] = [set1, set2];

    //////////////////////////////////////////////////
</script>

<div class="contenidor">
    <div class="face">
        <div class="pixel {colors.white[0]}" on:click={()=>changeColor(0)} />
        <div class="pixel border_top {colors.white[1]}" on:click={()=>changeColor(1)} />
        <div class="pixel border_top {colors.white[2]}" on:click={()=>changeColor(2)} />
        <div class="pixel border_top {colors.white[3]}" on:click={()=>changeColor(3)} />
        <div class="pixel border_top {colors.white[4]}" on:click={()=>changeColor(4)} />
        <div class="pixel border_top {colors.white[5]}" on:click={()=>changeColor(5)} />
        <div class="pixel border_top {colors.white[6]}" on:click={()=>changeColor(6)} />
        <div
            class="pixel border_top {colors.white[7]}"
            on:click={()=>changeColor(7)}
        />
        <div class="pixel {colors.white[8]}" on:click={()=>changeColor(8)} />

        <div
            class="pixel border_left {colors.white[9]}"
            on:click={()=>changeColor(9)}
        />
        <div class="pixel {colors.white[10]}" on:click={()=>changeColor(10)} />
        <div class="pixel {colors.white[11]}" on:click={()=>changeColor(11)} />
        <div class="pixel {colors.white[12]}" on:click={()=>changeColor(12)} />
        <div class="pixel {colors.white[13]}" on:click={()=>changeColor(13)} />
        <div class="pixel {colors.white[14]}" on:click={()=>changeColor(14)} />
        <div class="pixel {colors.white[15]}" on:click={()=>changeColor(15)} />
        <div class="pixel {colors.white[16]}" on:click={()=>changeColor(16)} />
        <div
            class="pixel border_right {colors.white[17]}"
            on:click={()=>changeColor(17)}
        />

        <div
            class="pixel border_left {colors.white[18]}"
            on:click={()=>changeColor(18)}
        />
        <div class="pixel {colors.white[19]}" on:click={()=>changeColor(19)} />
        <div class="pixel {colors.white[20]}" on:click={()=>changeColor(20)} />
        <div class="pixel {colors.white[21]}" on:click={()=>changeColor(21)} />
        <div class="pixel {colors.white[22]}" on:click={()=>changeColor(22)} />
        <div class="pixel {colors.white[23]}" on:click={()=>changeColor(23)} />
        <div class="pixel {colors.white[24]}" on:click={()=>changeColor(24)} />
        <div class="pixel {colors.white[25]}" on:click={()=>changeColor(25)} />
        <div
            class="pixel border_right {colors.white[26]}"
            on:click={()=>changeColor(26)}
        />

        <div
            class="pixel border_left {colors.white[27]}"
            on:click={()=>changeColor(27)}
        />
        <div class="pixel {colors.white[28]}" on:click={()=>changeColor(28)} />
        <div class="pixel {colors.white[29]}" on:click={()=>changeColor(29)} />
        <div class="pixel {colors.white[30]}" on:click={()=>changeColor(30)} />
        <div class="pixel {colors.white[31]}" on:click={()=>changeColor(31)} />
        <div class="pixel {colors.white[32]}" on:click={()=>changeColor(32)} />
        <div class="pixel {colors.white[33]}" on:click={()=>changeColor(33)} />
        <div class="pixel {colors.white[34]}" on:click={()=>changeColor(34)} />
        <div
            class="pixel border_right {colors.white[35]}"
            on:click={()=>changeColor(35)}
        />

        <div
            class="pixel border_left {colors.white[36]}"
            on:click={()=>changeColor(36)}
        />
        <div class="pixel {colors.white[37]}" on:click={()=>changeColor(37)} />
        <div class="pixel {colors.white[38]}" on:click={()=>changeColor(38)} />
        <div class="pixel {colors.white[39]}" on:click={()=>changeColor(39)} />
        <div class="center {colors.white[40]}" on:click={()=>changeColor(40)} />
        <div class="pixel {colors.white[41]}" on:click={()=>changeColor(41)} />
        <div class="pixel {colors.white[42]}" on:click={()=>changeColor(42)} />
        <div class="pixel {colors.white[43]}" on:click={()=>changeColor(43)} />
        <div
            class="pixel border_right {colors.white[44]}"
            on:click={()=>changeColor(44)}
        />

        <div
            class="pixel border_left {colors.white[45]}"
            on:click={()=>changeColor(45)}
        />
        <div class="pixel {colors.white[46]}" on:click={()=>changeColor(46)} />
        <div class="pixel {colors.white[47]}" on:click={()=>changeColor(47)} />
        <div class="pixel {colors.white[48]}" on:click={()=>changeColor(48)} />
        <div class="pixel {colors.white[49]}" on:click={()=>changeColor(49)} />
        <div class="pixel {colors.white[50]}" on:click={()=>changeColor(50)} />
        <div class="pixel {colors.white[51]}" on:click={()=>changeColor(51)} />
        <div class="pixel {colors.white[52]}" on:click={()=>changeColor(52)} />
        <div
            class="pixel border_right {colors.white[53]}"
            on:click={()=>changeColor(53)}
        />

        <div
            class="pixel border_left {colors.white[54]}"
            on:click={()=>changeColor(54)}
        />
        <div class="pixel {colors.white[55]}" on:click={()=>changeColor(55)} />
        <div class="pixel {colors.white[56]}" on:click={()=>changeColor(56)} />
        <div class="pixel {colors.white[57]}" on:click={()=>changeColor(57)} />
        <div class="pixel {colors.white[58]}" on:click={()=>changeColor(58)} />
        <div class="pixel {colors.white[59]}" on:click={()=>changeColor(59)} />
        <div class="pixel {colors.white[60]}" on:click={()=>changeColor(60)} />
        <div class="pixel {colors.white[61]}" on:click={()=>changeColor(61)} />
        <div
            class="pixel border_right {colors.white[62]}"
            on:click={()=>changeColor(62)}
        />

        <div
            class="pixel border_left {colors.white[63]}"
            on:click={()=>changeColor(63)}
        />
        <div class="pixel {colors.white[64]}" on:click={()=>changeColor(64)} />
        <div class="pixel {colors.white[65]}" on:click={()=>changeColor(65)} />
        <div class="pixel {colors.white[66]}" on:click={()=>changeColor(66)} />
        <div class="pixel {colors.white[67]}" on:click={()=>changeColor(67)} />
        <div class="pixel {colors.white[68]}" on:click={()=>changeColor(68)} />
        <div class="pixel {colors.white[69]}" on:click={()=>changeColor(69)} />
        <div class="pixel {colors.white[70]}" on:click={()=>changeColor(70)} />
        <div
            class="pixel border_right {colors.white[71]}"
            on:click={()=>changeColor(71)}
        />

        <div class="pixel {colors.white[72]}" on:click={()=>changeColor(72)} />
        <div
            class="pixel border_buttom {colors.white[73]}"
            on:click={()=>changeColor(73)}
        />
        <div
            class="pixel border_buttom {colors.white[74]}"
            on:click={()=>changeColor(74)}
        />
        <div
            class="pixel border_buttom {colors.white[75]}"
            on:click={()=>changeColor(75)}
        />
        <div
            class="pixel border_buttom {colors.white[76]}"
            on:click={()=>changeColor(76)}
        />
        <div
            class="pixel border_buttom {colors.white[77]}"
            on:click={()=>changeColor(77)}
        />
        <div
            class="pixel border_buttom {colors.white[78]}"
            on:click={()=>changeColor(78)}
        />
        <div
            class="pixel border_buttom {colors.white[79]}"
            on:click={()=>changeColor(79)}
        />
        <div class="pixel {colors.white[80]}" on:click={()=>changeColor(80)} />
    </div>
    <div class="input">
        <div class="colors">
            <input type="button" class="button" value="WHITE ">
            <input type="button" class="button" value="BLUE  ">
            <input type="button" class="button" value="RED   ">
            <input type="button" class="button" value="GREEN ">
            <input type="button" class="button" value="ORANGE">
            <input type="button" class="button" value="YELLOW">
        </div>


        <input type="button" class="button" value="CREATE SET" on:click={createfullSet} />
        <input type="button" class="button" value="RANDOM SET" on:click={randomSet} />
        <input type="button" class="button" value="RESET" on:click={reset} />
    </div>
</div>

<style>
    .contenidor {
        display: block;
        box-sizing: border-box;
        position: fixed;
        margin-left: 500px;
        margin-right: 0;
    }

    .color.button 
    {
        margin: 10px;
    }
    .colors
    {
        display: grid;
        grid-template-rows: 50fr 50fr;
        grid-template-columns: 50fr 50fr 50fr;
        box-sizing: border-box;
        position: fixed;
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
    .border_buttom {
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
