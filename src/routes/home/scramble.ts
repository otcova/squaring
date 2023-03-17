
import { writable } from "svelte/store";

function randomScramble(size: number) {
    const llist = [
        "F",
        "B",
        "U",
        "D",
        "R",
        "L",
    ];

    const scramble = [];
    for (let i = 0; i < size; ++i) {
        let last = scramble[scramble.length - 1];
        let move = last;
        while (move == last) {
            move = llist[Math.trunc(Math.random()*llist.length)];
        }
        scramble.push(move);

    }
    
    for (let i = 0; i < scramble.length; ++i) {
        if (Math.random() < 0.5) scramble[i] += "2";
        else if (Math.random() < 0.3) scramble[i] += "'";
    }

    return scramble.join(" ");
}

//Solve
const scrambles = [randomScramble(20)];
let selectedScramble = 0;
export const scramble = writable(scrambles[0]);

export function lastScramble() {
    selectedScramble = Math.max(0, selectedScramble - 1);
    scramble.set(scrambles[selectedScramble]);
}

export function nextScramble() {
    ++selectedScramble;
    while (selectedScramble >= scrambles.length)  {
        scrambles.push(randomScramble(20));
    }

    scramble.set(scrambles[selectedScramble]);
}