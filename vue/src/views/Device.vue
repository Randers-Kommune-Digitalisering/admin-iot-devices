<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'
    
    // Import scripts
    import Device from '@/components/connector/Device.vue'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const route = useRoute()

    import ListMeasurementPoints from '@/components/device/ListMeasurementPoints.vue'
    import EditDevice from '@/components/device/EditDevice.vue'

    import IconEditSimple from '@/components/icons/IconEditSimple.vue'

    // Set refs for state
    const device = ref(null)
    const measurementPoints = ref(null)
    const httpResponse = ref(null)

    // Fetch device

    fetch('/api/devices/' + route.params.uid + '/measurements')
        .then(response => response = response.json())
        .then(value => measurementPoints.value = value)

    // Fetch measurement points

    fetch('/api/devices/' + route.params.uid)
        .then(response => response = response.json())
        .then(value => device.value = value)

    // Update device changes

    function updateDevice(useTemplate = false)
    {
        console.log("Updating device")

        // Update device in Node-RED
        Device.update(EditDevice.getDeviceList())
        .then(response => httpResponse.value = response)
        .then(response => console.log(response))
    }


</script>

<template>

    <h2>{{device != null ? device.name : 'Måler'}}</h2>

    <!--span v-if="device != null" class="paragraph">
        <div :class="'tag ' + (device.rssi <= -100 ? 'red' : device.rssi <= -70 ? 'orange' : 'green')">RSSI {{device.rssi}}</div>
    </span-->
    <span v-if="device != null && device.templateUid != -1" class="underheader blue">Baseret på <span style="text-decoration: underline">{{device.templateName}}</span></span>
    
    <ListMeasurementPoints :measurementPoints="measurementPoints" :deviceUid="device != null ? device.uid : -1" />
    <EditDevice :device="device" :lockEui="true" />

    <Content>
        <button @click="updateDevice()" :class="'adddevice ' + (device != null && device.isTemplate ? ' orange' : '')">
            <span>Gem ændringer</span>
            <br /><IconEditSimple />
        </button>
    </Content>

</template>



<style scoped>
    .adddevice {
        font-size: 0.9em;
        height: 7.5rem;
        width: 20rem;
        font-weight: 300;
    }
    .adddevice svg
    {
        margin-top: 1rem;
    }
    .underheader
    {
        font-size: 0.8em;
        transform: translateY(-1.5rem) translateX(0.5rem);
    }
</style>