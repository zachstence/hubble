<script lang="ts">
	import Item from "./Item.svelte";
	import {config} from "./store";
import UploadConfig from "./UploadConfig.svelte";
</script>

<main>
	{#each $config.items as item}
		<Item name={item.name} link={item.link} />
	{/each}
	<UploadConfig />
</main>


<style>
	:global(body) {
		background-color: black;
		color: white;
	}
</style>