<script lang="ts">
    export let name: string;
    export let link: string;
</script>

<a href={link} target="_blank">
    <div>
        {name}
    </div>
</a>

<style>
    a, a:hover, a:visited {
        text-decoration: inherit;
        color: inherit;
    }

    div {
        border: 2px solid rgb(43, 43, 43);
        border-radius: 1rem;
        padding: 1rem;
    }

    div:hover {
        border-color: #5c5c5c;
    }
</style>