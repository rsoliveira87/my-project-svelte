<script>
    export let equipmentData;
</script>

{#if equipmentData && equipmentData.length > 0}
    {#each equipmentData as { alt, src }}
        <figure>
            <img {src} {alt}>
            <figcaption>{alt}</figcaption>
        </figure>
    {/each}
{:else}
    <p class="text-danger">Nenhum resultado encontrado!</p>
{/if}

<style>
    .text-danger {
        color: #dc3545;
    }
</style>