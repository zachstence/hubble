import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Config } from "./types";

const defaultConfig: Config = {
    items: [],
};

type ConfigStore = Writable<Config> & {init: () => void}

const createConfigStore = (): ConfigStore => {
    const store = writable<Config>(defaultConfig);

    return {
        ...store,
        init: async () => {
            try {
                const res = await fetch("/config/config.json");
                if (res.status === 200) {
                    const json = await res.json();
                    store.set(json);
                }
            } catch (err) {
                console.error(`Unable to load config: ${err}`);
            }
        },
    }
}

export const config = createConfigStore();
