import { browser } from "$app/environment";
import { writable } from "svelte/store";

export interface Solve {
    date: number;
    hide: boolean;
    time: number;
    scramble: string;
}

//Solve
let storedSolve = []
if (browser) storedSolve = JSON.parse(localStorage.getItem("solves") as string);
export const solves = writable<Solve[]>(storedSolve ?? []);

if (browser) {
    solves.subscribe((value) => {
        localStorage.setItem("solves", JSON.stringify(value));
    });
}

    
    
    
    

