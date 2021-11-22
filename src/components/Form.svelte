<script>
    import ImageEquipment from './ImageEquipment.svelte';
    let nameEquipment = '';
    let equipmentData = {
        alt : '',
        src : ''
    };

    function searchEquipment() {
        const equipments = [{
            name : 'supino vertical',
            image : 'supino-vertical.png'
        }, {
            name : 'supino reto articulado',
            image : 'supino-reto-articulado.jpg'
        }, {
            name : 'peck deck',
            image : 'peck-deck.jpg'
        }];

        const equipment = new RegExp(nameEquipment, 'i');

        const findEquipment = equipments.filter(item => item.name.match(equipment)) || null;

        equipmentData.alt = findEquipment ? findEquipment[0].name : null;
        equipmentData.src = findEquipment ? `/img/${findEquipment[0].image}` : null;
    }
</script>

<form>
    <input type="text" bind:value={nameEquipment} placeholder="Digite aqui o nome do equipamento" />
    <input type="button" value="Pesquisar" on:click={searchEquipment} />
</form>

<ImageEquipment {...equipmentData} />