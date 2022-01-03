import { writable } from "svelte/store";
import type { Config } from "./types";

const defaultConfig: Config = {
    items: [],
};

const createConfigStore = () => {
    const store = writable<Config>(defaultConfig);

    return {
        ...store,
        init: async () => {
            const res = await fetch("config.json");
            if (res.status === 200) {
                const json = await res.json();
                store.set(json);
            }
        }
    }
}

export const config = createConfigStore();
