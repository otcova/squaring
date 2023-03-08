import { browser } from "$app/environment";
import { writable } from "svelte/store";

export interface Solve {
    time: number;
    scramble: string;
}

let storedValue = []
if (browser) storedValue = JSON.parse(localStorage.getItem("solves") as string);
export const solves = writable<Solve[]>(storedValue ?? []);

if (browser) {
    solves.subscribe((value) => {
        localStorage.setItem("solves", JSON.stringify(value));
    });
}
    
    
    
    

