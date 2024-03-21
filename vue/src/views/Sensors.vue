<script setup>
    import { ref } from 'vue'
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    import ListSensors from '@/components/sensor/ListSensors.vue'


    const sensors = ref(null)

    // Fetch sensors

    fetch('/api/devices')
        .then(response => response = response.json())
        .then(value => sensors.value = value)
        //.then(value => console.log(value))


</script>

<template>

    <h2>Målere</h2>

    <ListSensors :sensors="sensors" />

</template>