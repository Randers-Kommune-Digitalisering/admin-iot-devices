<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    
    // Import scripts
    import Device from '@/components/connector/Device.vue'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const route = useRoute()

    import ListMeasurementPoints from '@/components/sensor/ListMeasurementPoints.vue'
    import EditSensor from '@/components/sensor/EditSensor.vue'

    import IconEditSimple from '@/components/icons/IconEditSimple.vue'

    // Set refs for state
    const sensor = ref(null)
    const measurementPoints = ref(null)
    const httpResponse = ref(null)

    // Fetch sensor

    fetch('/api/devices/get/' + route.params.uid + '/measurements/get')
        .then(response => response = response.json())
        .then(value => measurementPoints.value = value)

    // Fetch measurement points

    fetch('/api/devices/get/' + route.params.uid + '/')
        .then(response => response = response.json())
        .then(value => sensor.value = value)

    // Update sensor changes

    function updateSensor(useTemplate = false)
    {
        console.log("Updating sensor")

        // Update sensor in Node-RED
        Device.update(EditSensor.getSensorList())
        .then(response => httpResponse.value = response)
        .then(response => console.log(response))
    }


</script>

<template>

    <h2>{{sensor != null ? sensor.name : 'Måler'}}</h2>

    <ListMeasurementPoints :measurementPoints="measurementPoints" />
    <EditSensor :sensor="sensor" :lockEui="true" />

    <Content>
        <button @click="updateSensor()" :class="'addsensor ' + (isTemplate ? ' orange' : '')">
            <span>Gem ændringer</span>
            <br /><IconEditSimple />
        </button>
    </Content>

</template>



<style scoped>
    .addsensor {
        font-size: 0.9em;
        height: 7.5rem;
        width: 20rem;
        font-weight: 300;
    }
    .addsensor svg
    {
        margin-top: 1rem;
    }
</style>