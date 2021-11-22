<script>
    import ImageEquipment from './ImageEquipment.svelte';
    let nameEquipment = '';
    let equipmentData;

    function searchEquipment() {
        const equipments = [{
            alt : 'supino vertical',
            src : 'supino-vertical.png'
        }, {
            alt : 'supino reto articulado',
            src : 'supino-reto-articulado.jpg'
        }, {
            alt : 'peck deck',
            src : 'peck-deck.jpg'
        }, {
            alt : 'desenvolvimento máquina',
            src : 'desenvolvimento-maquina.png'
        }, {
            alt : 'elevação lateral',
            src : 'elevacao-lateral.png'
        }];

        const equipment = new RegExp(nameEquipment, 'i');

        equipmentData = equipments.filter(item => {
            item.src = `/img/${item.src}`;
            return item.alt.match(equipment);
        }) || null;
    }
</script>

<form>
    <input type="text" bind:value={nameEquipment} placeholder="Digite aqui o nome do equipamento" />
    <input type="button" value="Pesquisar" on:click={searchEquipment} />
</form>

{#if equipmentData}
    <ImageEquipment {equipmentData} />
{/if}