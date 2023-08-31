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

    let set: Set = {
        pos: [],
        colors: [],
    }


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
    function createSet()
    {
        Pos.forEach(element => {
            let color: string = restictionColor(ChooseColros);
            colors.white[element] = color;
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

    // cosas feas
    function changeColor_0() {
        colors.white[0] = ColorsList[colorNumber(colors.white[0]) + 1];
    }
    function changeColor_1() {
        colors.white[1] = ColorsList[colorNumber(colors.white[1]) + 1];
    }
    function changeColor_2() {
        colors.white[2] = ColorsList[colorNumber(colors.white[2]) + 1];
    }
    function changeColor_3() {
        colors.white[3] = ColorsList[colorNumber(colors.white[3]) + 1];
    }
    function changeColor_4() {
        colors.white[4] = ColorsList[colorNumber(colors.white[4]) + 1];
    }
    function changeColor_5() {
        colors.white[5] = ColorsList[colorNumber(colors.white[5]) + 1];
    }
    function changeColor_6() {
        colors.white[6] = ColorsList[colorNumber(colors.white[6]) + 1];
    }
    function changeColor_7() {
        colors.white[7] = ColorsList[colorNumber(colors.white[7]) + 1];
    }
    function changeColor_8() {
        colors.white[8] = ColorsList[colorNumber(colors.white[8]) + 1];
    }
    function changeColor_9() {
        colors.white[9] = ColorsList[colorNumber(colors.white[9]) + 1];
    }
    function changeColor_10() {
        colors.white[10] = ColorsList[colorNumber(colors.white[10]) + 1];
    }
    function changeColor_11() {
        colors.white[11] = ColorsList[colorNumber(colors.white[11]) + 1];
    }
    function changeColor_12() {
        colors.white[12] = ColorsList[colorNumber(colors.white[12]) + 1];
    }
    function changeColor_13() {
        colors.white[13] = ColorsList[colorNumber(colors.white[13]) + 1];
    }
    function changeColor_14() {
        colors.white[14] = ColorsList[colorNumber(colors.white[14]) + 1];
    }
    function changeColor_15() {
        colors.white[15] = ColorsList[colorNumber(colors.white[15]) + 1];
    }
    function changeColor_16() {
        colors.white[16] = ColorsList[colorNumber(colors.white[16]) + 1];
    }
    function changeColor_17() {
        colors.white[17] = ColorsList[colorNumber(colors.white[17]) + 1];
    }
    function changeColor_18() {
        colors.white[18] = ColorsList[colorNumber(colors.white[18]) + 1];
    }
    function changeColor_19() {
        colors.white[19] = ColorsList[colorNumber(colors.white[19]) + 1];
    }
    function changeColor_20() {
        colors.white[20] = ColorsList[colorNumber(colors.white[20]) + 1];
    }
    function changeColor_21() {
        colors.white[21] = ColorsList[colorNumber(colors.white[21]) + 1];
    }
    function changeColor_22() {
        colors.white[22] = ColorsList[colorNumber(colors.white[22]) + 1];
    }
    function changeColor_23() {
        colors.white[23] = ColorsList[colorNumber(colors.white[23]) + 1];
    }
    function changeColor_24() {
        colors.white[24] = ColorsList[colorNumber(colors.white[24]) + 1];
    }
    function changeColor_25() {
        colors.white[25] = ColorsList[colorNumber(colors.white[25]) + 1];
    }
    function changeColor_26() {
        colors.white[26] = ColorsList[colorNumber(colors.white[26]) + 1];
    }
    function changeColor_27() {
        colors.white[27] = ColorsList[colorNumber(colors.white[27]) + 1];
    }
    function changeColor_28() {
        colors.white[28] = ColorsList[colorNumber(colors.white[28]) + 1];
    }
    function changeColor_29() {
        colors.white[29] = ColorsList[colorNumber(colors.white[29]) + 1];
    }
    function changeColor_30() {
        colors.white[30] = ColorsList[colorNumber(colors.white[30]) + 1];
    }
    function changeColor_31() {
        colors.white[31] = ColorsList[colorNumber(colors.white[31]) + 1];
    }
    function changeColor_32() {
        colors.white[32] = ColorsList[colorNumber(colors.white[32]) + 1];
    }
    function changeColor_33() {
        colors.white[33] = ColorsList[colorNumber(colors.white[33]) + 1];
    }
    function changeColor_34() {
        colors.white[34] = ColorsList[colorNumber(colors.white[34]) + 1];
    }
    function changeColor_35() {
        colors.white[35] = ColorsList[colorNumber(colors.white[35]) + 1];
    }
    function changeColor_36() {
        colors.white[36] = ColorsList[colorNumber(colors.white[36]) + 1];
    }
    function changeColor_37() {
        colors.white[37] = ColorsList[colorNumber(colors.white[37]) + 1];
    }
    function changeColor_38() {
        colors.white[38] = ColorsList[colorNumber(colors.white[38]) + 1];
    }
    function changeColor_39() {
        colors.white[39] = ColorsList[colorNumber(colors.white[39]) + 1];
    }
    function changeColor_40() {
        colors.white[40] = ColorsList[colorNumber(colors.white[40]) + 1];
    }
    function changeColor_41() {
        colors.white[41] = ColorsList[colorNumber(colors.white[41]) + 1];
    }
    function changeColor_42() {
        colors.white[42] = ColorsList[colorNumber(colors.white[42]) + 1];
    }
    function changeColor_43() {
        colors.white[43] = ColorsList[colorNumber(colors.white[43]) + 1];
    }
    function changeColor_44() {
        colors.white[44] = ColorsList[colorNumber(colors.white[44]) + 1];
    }
    function changeColor_45() {
        colors.white[45] = ColorsList[colorNumber(colors.white[45]) + 1];
    }
    function changeColor_46() {
        colors.white[46] = ColorsList[colorNumber(colors.white[46]) + 1];
    }
    function changeColor_47() {
        colors.white[47] = ColorsList[colorNumber(colors.white[47]) + 1];
    }
    function changeColor_48() {
        colors.white[48] = ColorsList[colorNumber(colors.white[48]) + 1];
    }
    function changeColor_49() {
        colors.white[49] = ColorsList[colorNumber(colors.white[49]) + 1];
    }
    function changeColor_50() {
        colors.white[50] = ColorsList[colorNumber(colors.white[50]) + 1];
    }
    function changeColor_51() {
        colors.white[51] = ColorsList[colorNumber(colors.white[51]) + 1];
    }
    function changeColor_52() {
        colors.white[52] = ColorsList[colorNumber(colors.white[52]) + 1];
    }
    function changeColor_53() {
        colors.white[53] = ColorsList[colorNumber(colors.white[53]) + 1];
    }
    function changeColor_54() {
        colors.white[54] = ColorsList[colorNumber(colors.white[54]) + 1];
    }
    function changeColor_55() {
        colors.white[55] = ColorsList[colorNumber(colors.white[55]) + 1];
    }
    function changeColor_56() {
        colors.white[56] = ColorsList[colorNumber(colors.white[56]) + 1];
    }
    function changeColor_57() {
        colors.white[57] = ColorsList[colorNumber(colors.white[57]) + 1];
    }
    function changeColor_58() {
        colors.white[58] = ColorsList[colorNumber(colors.white[58]) + 1];
    }
    function changeColor_59() {
        colors.white[59] = ColorsList[colorNumber(colors.white[59]) + 1];
    }
    function changeColor_60() {
        colors.white[60] = ColorsList[colorNumber(colors.white[60]) + 1];
    }
    function changeColor_61() {
        colors.white[61] = ColorsList[colorNumber(colors.white[61]) + 1];
    }
    function changeColor_62() {
        colors.white[62] = ColorsList[colorNumber(colors.white[62]) + 1];
    }
    function changeColor_63() {
        colors.white[63] = ColorsList[colorNumber(colors.white[63]) + 1];
    }
    function changeColor_64() {
        colors.white[64] = ColorsList[colorNumber(colors.white[64]) + 1];
    }
    function changeColor_65() {
        colors.white[65] = ColorsList[colorNumber(colors.white[65]) + 1];
    }
    function changeColor_66() {
        colors.white[66] = ColorsList[colorNumber(colors.white[66]) + 1];
    }
    function changeColor_67() {
        colors.white[67] = ColorsList[colorNumber(colors.white[67]) + 1];
    }
    function changeColor_68() {
        colors.white[68] = ColorsList[colorNumber(colors.white[68]) + 1];
    }
    function changeColor_69() {
        colors.white[69] = ColorsList[colorNumber(colors.white[69]) + 1];
    }
    function changeColor_70() {
        colors.white[70] = ColorsList[colorNumber(colors.white[70]) + 1];
    }
    function changeColor_71() {
        colors.white[71] = ColorsList[colorNumber(colors.white[71]) + 1];
    }
    function changeColor_72() {
        colors.white[72] = ColorsList[colorNumber(colors.white[72]) + 1];
    }
    function changeColor_73() {
        colors.white[73] = ColorsList[colorNumber(colors.white[73]) + 1];
    }
    function changeColor_74() {
        colors.white[74] = ColorsList[colorNumber(colors.white[74]) + 1];
    }
    function changeColor_75() {
        colors.white[75] = ColorsList[colorNumber(colors.white[75]) + 1];
    }
    function changeColor_76() {
        colors.white[76] = ColorsList[colorNumber(colors.white[76]) + 1];
    }
    function changeColor_77() {
        colors.white[77] = ColorsList[colorNumber(colors.white[77]) + 1];
    }
    function changeColor_78() {
        colors.white[78] = ColorsList[colorNumber(colors.white[78]) + 1];
    }
    function changeColor_79() {
        colors.white[79] = ColorsList[colorNumber(colors.white[79]) + 1];
    }
    function changeColor_80() {
        colors.white[80] = ColorsList[colorNumber(colors.white[80]) + 1];
    }
    //

    /////////////////////////////////////////////////////
    let sets : Set[]; 
    const lefteye = make_number_rectangle(get_number(2, 2), get_number(3, 3));
    const righteye = make_number_rectangle(get_number(2, 5), get_number(3, 6));

    const Pos = make_arrayOfarray([lefteye, righteye]);
    const ChooseColros = ["blue", "red"];
    //////////////////////////////////////////////////
</script>

<div class="contenidor">
    <div class="face">
        <div class="pixel {colors.white[0]}" on:click={changeColor_0} />
        <div
            class="pixel border_top {colors.white[1]}"
            on:click={changeColor_1}
        />
        <div
            class="pixel border_top {colors.white[2]}"
            on:click={changeColor_2}
        />
        <div
            class="pixel border_top {colors.white[3]}"
            on:click={changeColor_3}
        />
        <div
            class="pixel border_top {colors.white[4]}"
            on:click={changeColor_4}
        />
        <div
            class="pixel border_top {colors.white[5]}"
            on:click={changeColor_5}
        />
        <div
            class="pixel border_top {colors.white[6]}"
            on:click={changeColor_6}
        />
        <div
            class="pixel border_top {colors.white[7]}"
            on:click={changeColor_7}
        />
        <div class="pixel {colors.white[8]}" on:click={changeColor_8} />

        <div
            class="pixel border_left {colors.white[9]}"
            on:click={changeColor_9}
        />
        <div class="pixel {colors.white[10]}" on:click={changeColor_10} />
        <div class="pixel {colors.white[11]}" on:click={changeColor_11} />
        <div class="pixel {colors.white[12]}" on:click={changeColor_12} />
        <div class="pixel {colors.white[13]}" on:click={changeColor_13} />
        <div class="pixel {colors.white[14]}" on:click={changeColor_14} />
        <div class="pixel {colors.white[15]}" on:click={changeColor_15} />
        <div class="pixel {colors.white[16]}" on:click={changeColor_16} />
        <div
            class="pixel border_right {colors.white[17]}"
            on:click={changeColor_17}
        />

        <div
            class="pixel border_left {colors.white[18]}"
            on:click={changeColor_18}
        />
        <div class="pixel {colors.white[19]}" on:click={changeColor_19} />
        <div class="pixel {colors.white[20]}" on:click={changeColor_20} />
        <div class="pixel {colors.white[21]}" on:click={changeColor_21} />
        <div class="pixel {colors.white[22]}" on:click={changeColor_22} />
        <div class="pixel {colors.white[23]}" on:click={changeColor_23} />
        <div class="pixel {colors.white[24]}" on:click={changeColor_24} />
        <div class="pixel {colors.white[25]}" on:click={changeColor_25} />
        <div
            class="pixel border_right {colors.white[26]}"
            on:click={changeColor_26}
        />

        <div
            class="pixel border_left {colors.white[27]}"
            on:click={changeColor_27}
        />
        <div class="pixel {colors.white[28]}" on:click={changeColor_28} />
        <div class="pixel {colors.white[29]}" on:click={changeColor_29} />
        <div class="pixel {colors.white[30]}" on:click={changeColor_30} />
        <div class="pixel {colors.white[31]}" on:click={changeColor_31} />
        <div class="pixel {colors.white[32]}" on:click={changeColor_32} />
        <div class="pixel {colors.white[33]}" on:click={changeColor_33} />
        <div class="pixel {colors.white[34]}" on:click={changeColor_34} />
        <div
            class="pixel border_right {colors.white[35]}"
            on:click={changeColor_35}
        />

        <div
            class="pixel border_left {colors.white[36]}"
            on:click={changeColor_36}
        />
        <div class="pixel {colors.white[37]}" on:click={changeColor_37} />
        <div class="pixel {colors.white[38]}" on:click={changeColor_38} />
        <div class="pixel {colors.white[39]}" on:click={changeColor_39} />
        <div class="center {colors.white[40]}" on:click={changeColor_40} />
        <div class="pixel {colors.white[41]}" on:click={changeColor_41} />
        <div class="pixel {colors.white[42]}" on:click={changeColor_42} />
        <div class="pixel {colors.white[43]}" on:click={changeColor_43} />
        <div
            class="pixel border_right {colors.white[44]}"
            on:click={changeColor_44}
        />

        <div
            class="pixel border_left {colors.white[45]}"
            on:click={changeColor_45}
        />
        <div class="pixel {colors.white[46]}" on:click={changeColor_46} />
        <div class="pixel {colors.white[47]}" on:click={changeColor_47} />
        <div class="pixel {colors.white[48]}" on:click={changeColor_48} />
        <div class="pixel {colors.white[49]}" on:click={changeColor_49} />
        <div class="pixel {colors.white[50]}" on:click={changeColor_50} />
        <div class="pixel {colors.white[51]}" on:click={changeColor_51} />
        <div class="pixel {colors.white[52]}" on:click={changeColor_52} />
        <div
            class="pixel border_right {colors.white[53]}"
            on:click={changeColor_53}
        />

        <div
            class="pixel border_left {colors.white[54]}"
            on:click={changeColor_54}
        />
        <div class="pixel {colors.white[55]}" on:click={changeColor_55} />
        <div class="pixel {colors.white[56]}" on:click={changeColor_56} />
        <div class="pixel {colors.white[57]}" on:click={changeColor_57} />
        <div class="pixel {colors.white[58]}" on:click={changeColor_58} />
        <div class="pixel {colors.white[59]}" on:click={changeColor_59} />
        <div class="pixel {colors.white[60]}" on:click={changeColor_60} />
        <div class="pixel {colors.white[61]}" on:click={changeColor_61} />
        <div
            class="pixel border_right {colors.white[62]}"
            on:click={changeColor_62}
        />

        <div
            class="pixel border_left {colors.white[63]}"
            on:click={changeColor_63}
        />
        <div class="pixel {colors.white[64]}" on:click={changeColor_64} />
        <div class="pixel {colors.white[65]}" on:click={changeColor_65} />
        <div class="pixel {colors.white[66]}" on:click={changeColor_66} />
        <div class="pixel {colors.white[67]}" on:click={changeColor_67} />
        <div class="pixel {colors.white[68]}" on:click={changeColor_68} />
        <div class="pixel {colors.white[69]}" on:click={changeColor_69} />
        <div class="pixel {colors.white[70]}" on:click={changeColor_70} />
        <div
            class="pixel border_right {colors.white[71]}"
            on:click={changeColor_71}
        />

        <div class="pixel {colors.white[72]}" on:click={changeColor_72} />
        <div
            class="pixel border_buttom {colors.white[73]}"
            on:click={changeColor_73}
        />
        <div
            class="pixel border_buttom {colors.white[74]}"
            on:click={changeColor_74}
        />
        <div
            class="pixel border_buttom {colors.white[75]}"
            on:click={changeColor_75}
        />
        <div
            class="pixel border_buttom {colors.white[76]}"
            on:click={changeColor_76}
        />
        <div
            class="pixel border_buttom {colors.white[77]}"
            on:click={changeColor_77}
        />
        <div
            class="pixel border_buttom {colors.white[78]}"
            on:click={changeColor_78}
        />
        <div
            class="pixel border_buttom {colors.white[79]}"
            on:click={changeColor_79}
        />
        <div class="pixel {colors.white[80]}" on:click={changeColor_80} />
    </div>
    <div class="input">
        <input type="button" class="button" value="CREATE SET" on:click={createSet} />
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
