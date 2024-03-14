<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const route = useRoute()


    import ListMeasurementPoints from '@/components/sensor/ListMeasurementPoints.vue'
    import EditSensor from '@/components/sensor/EditSensor.vue'


    const sensor = ref(null)
    const measurementPoints = ref(null)

    // Fetch sensor

    fetch('/api/devices/get/' + route.params.uid + '/measurements/get')
        .then(response => response = response.json())
        .then(value => measurementPoints.value = value)

    // Fetch measurement points

    fetch('/api/devices/get/' + route.params.uid + '/')
        .then(response => response = response.json())
        .then(value => sensor.value = value)


</script>

<template>

    <h2>{{sensor != null ? sensor.name : 'Måler'}}</h2>

    <ListMeasurementPoints :measurementPoints="measurementPoints" />
    <EditSensor :sensor="sensor" :lockEui="true" />

</template>