<script lang="ts">
    import type { Item } from "../types";

    export let item: Item;
</script>

<a href={item.link} target="_blank">
    {#if item.icon}
        <img src={item.icon} alt={`${item.name} icon`} />
    {/if}
    {item.name}
</a>

<style>
    img {
        height: 3rem;
    }

    a {
        text-decoration: inherit;
        color: inherit;
        border: 2px solid rgb(43, 43, 43);
        border-radius: 1rem;
        padding: 1rem;
        display: block;
    }

    a:hover {
        border-color: #5c5c5c;
    }
</style>