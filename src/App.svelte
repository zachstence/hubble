<script lang="ts">
	import Item from "./components/Item.svelte";
	import {config} from "./store";
</script>

<main>
	{#each $config.items as item}
		<Item item={item} />
	{/each}
</main>


<style>
	:global(body) {
		background-color: black;
		color: white;
	}
</style>