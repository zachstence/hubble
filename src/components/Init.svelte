<script lang="ts">
	import App from "../App.svelte";
    import {config} from "../store";
</script>

{#await config.init()}
    Loading...
{:then}
    <App />
{:catch error}
    <pre>{error}</pre>
{/await}
