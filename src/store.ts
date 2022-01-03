import { writable } from "svelte/store";
import type { Config } from "./types";

const createConfigStore = () => {
    const store = writable<Config>();

    return {
        ...store,
        init: async () => {
            const res = await fetch("config.json");
            if (res.status === 200) {
                const json = await res.json();
                store.set(json);
            } else {
                store.set({
                    items: [],
                });
            }
        }
    }
}

export const config = createConfigStore();
