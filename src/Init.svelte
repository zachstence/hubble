<script lang="ts">
	import App from "./App.svelte";
    import {config, error} from "./store";
</script>

{#if $error}
    {$error}
{:else}
    {#await config.init()}
        Loading...
    {:then}
        <App />
    {:catch error}
        <pre>{error}</pre>
    {/await}
{/if}