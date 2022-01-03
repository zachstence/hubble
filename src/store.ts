import { writable } from "svelte/store";
import type { Config } from "./types";

const createConfigStore = () => {
    const store = writable<Config>();

    return {
        ...store,
        init: async () => {
            const res = await fetch("config.json");
            const json = await res.json();
            store.set(json);
        }
    }
}

export const config = createConfigStore();
