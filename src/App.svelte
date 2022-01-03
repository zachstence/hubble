<script lang="ts">
	import {config} from "./store";
</script>


<main>
	{#await config.init()}
		Loading...
	{:then}
		<pre>{JSON.stringify($config, null, 2)}</pre>
	{:catch error}
		<pre>{error}</pre>
	{/await}
</main>