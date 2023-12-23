<script>
    export let size = "medium";
</script>

<button
    class:small = {size == "small"}
    class:medium = {size == "medium"}
    {... $$restProps}
>
    <slot />
</button>

<style>
    button {
        background-color: var(--primary-color);
        border: none;
        border-radius: 0.25em;
        color: var(--text-color);
        font-size: 1em;
        cursor: pointer;
    }

    .small {
        padding: 0.25em 0.5em;
    }

    .medium {
        padding: 0.5em 1.5em;
    }

</style>
