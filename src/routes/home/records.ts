import { browser } from "$app/environment";
import { writable } from "svelte/store";

export interface Scramble {
    time: number;
    scramble: string;
}

let storedValue = []
if (browser) storedValue = JSON.parse(localStorage.getItem("scrambles") as string);
export const scrambles = writable<Scramble[]>(storedValue ?? []);

if (browser) {
    scrambles.subscribe((value) => {
        localStorage.setItem("scrambles", JSON.stringify(value));
    });
}