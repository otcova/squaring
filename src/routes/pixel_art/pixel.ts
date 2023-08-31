export const ColorsList: string[] = [
    "white",
    "blue",
    "red",
    "green",
    "orange",
    "yellow",
];

export function colorNumber(color: string) {
    for (let i = 0; i < 6; ++i) {
        if (ColorsList[i] == color) return i;
    }
    return -1;
}

export function randInt(min : number, max : number)
{
    return Math.trunc(min + Math.random() * (max - min));
}

export function randColor() {
    let i: number = randInt(0, 6);
    return ColorsList[i];
}

export function chooseColor(choose_colors : string[]) {
    let i: number = randInt(0, 2);
    return choose_colors[i];
}

export function get_number(cord : number[])
{
    return cord[0]*9 + cord[1];
}

export function make_number_array(begin : number, end : number)
{
    let list = [];
    for (let i = begin; i <= end; ++i)
        list.push(i);
    return list;
}

export function make_arrayOfarray(listoflist : number[][])
{
    let list : number[] = [];
    listoflist.forEach(array => {
        array.forEach(element => {
            list.push(element);
        });
    });
    return list;
}

export function make_number_line(list_number : number[])
{
    let list : number[] = [];
    list_number.forEach(element => {
        for (let i = 0; i < 9; ++i)
            list.push(element*9 + i);
    });
    return list;
}

export function make_number_column(list_number : number[])
{
    let list : number[] = [];
    list_number.forEach(element => {
        for (let i = 0; i < 9; ++i)
            list.push(element + i*9);
    });
    return list;
}

export function make_number_rectangle(begin : number[], end : number[])
{
    let list = [];
    let height = Math.abs(end[0] - begin[0]);
    let width = Math.abs(end[1] - begin[1]);
    for (let i = 0; i < height + 1; ++i)
    {
        for(let j = 0; j < width + 1; ++j)
            list.push(get_number([begin[0]+i,begin[1]]) + j);
    }
    return list;
}