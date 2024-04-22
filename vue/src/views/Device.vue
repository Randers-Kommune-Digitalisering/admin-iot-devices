<script setup>
    import { ref, watch } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    
    // Import scripts
    import Device from '@/components/connector/Device.vue'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const route = useRoute()
    const router = useRouter()

    import ListMeasurementPoints from '@/components/device/ListMeasurementPoints.vue'
    import EditDevice from '@/components/device/EditDevice.vue'

    import IconEditSimple from '@/components/icons/IconEditSimple.vue'

    // Set refs for state
    const device = ref(null)
    const measurementPoints = ref(null)
    const httpResponse = ref(null)
    const inputValidity = ref(true)
    const awaitingDeletionConfirmation = ref(false)
    const isDeleting = ref(false)

    // Fetch device

    function fetchDevice()
    {
        fetch('/api/devices/' + route.params.uid + '/measurements')
            .then(response => response = response.json())
            .then(value => measurementPoints.value = value)

        // Fetch measurement points

        fetch('/api/devices/' + route.params.uid)
            .then(response => response = response.json())
            .then(value => device.value = value)
            //.then(device.value.name = decode(device.value.name))
    }

    // Fetch after loading

    fetchDevice()

    // Watch if device changes

    watch( () => route.params.uid, (current, previous) => {

        fetchDevice()
    })

    // Update device changes

    function updateDevice(useTemplate = false)
    {
        console.log("Updating device")

        // Update device in Node-RED
        Device.update(EditDevice.getDeviceList())
        .then(response => httpResponse.value = response)
        .then(response => console.log(response))
    }

    // Function to update input validity (= submit button availability)

    const updateInputVality = (value) => {
        console.log("Input validity change detected: " + value)
        inputValidity.value = value
    }

    // Delete device

    function initiateDeletion()
    {
        awaitingDeletionConfirmation.value = true

        // Cancel after 3 seconds
        setTimeout(function (){
            awaitingDeletionConfirmation.value = false
        }, 3000)

    }

    function confirmDeletion()
    {
        isDeleting.value = true

        fetch('/api/devices/' + route.params.uid, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
            }
        })
        .then(response => {
            //response = response.json()
            router.push('/devices')
        })
    }

    // Decoding input
    function decode(encodedString)
    {
        return encodedString.replace(/&#x([0-9a-fA-F]+);/g, function(match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        })
    }


</script>

<template>

    <h2>{{device != null ? decode(device.name) : 'Måler'}}</h2>

    <!-- Under header -->
    <div v-if="device != null" class="underheader">

        <span :class="'heavy ' + (device.isTemplate ? 'orange' : device.templateUid != -1 ? 'blue' : 'randers')">
            <span :class="'tag ' + (device.isTemplate ? 'orange' : device.templateUid != -1 ? 'blue' : 'randers')">{{ device.isTemplate ? 'Skabelon' : 'Måler' }}</span>
        </span>

        <span v-if="device.templateUid != -1" class="blue" style="margin-left:1rem;font-size:0.85em">
            baseret på
            <router-link class="blue" :to="'/devices/' + device.templateUid">{{decode(device.templateName)}}</router-link>
        </span>

        <div v-if="!device.isTemplate" class="float-right">
            <span v-if="device.rssi != null" :class="'tag ' + (device.rssi <= -100 ? 'red' : device.rssi <= -70 ? 'orange' : 'green')">RSSI {{device.rssi}}</span>
            <span v-if="device.batteryLevel != -1" :class="'tag ' + (device.batteryLevel > 0.50 ? 'green' : device.batteryLevel > 0.25 ? 'orange' : 'red')">{{device.batteryLevel * 100}}% batteri</span>
        </div>

    </div>
    
    <ListMeasurementPoints :measurementPoints="measurementPoints" :deviceUid="device != null ? device.uid : -1" />
    <EditDevice :device="device" :lockEui="true" @onUpdateInputValidity="updateInputVality" />

    <Content>
        <div class="flexbuttons">
            <button :class="'adddevice ' + (httpResponse != null ? ' gray' : device != null && device.isTemplate ? ' orange' : '')"
                    @click="updateDevice()"
                    :disabled="inputValidity == false">
                <span>{{httpResponse == null ? 'Gem ændringer' : 'Ændringer gemt'}}</span>
                <br /><IconEditSimple />
            </button>

            <button class="red" @click="awaitingDeletionConfirmation ? confirmDeletion() : initiateDeletion()"
                    :disabled="isDeleting || (device != null && device.deviceCount > 0)">
                {{ isDeleting ?
                    'Vent venligst ...' :
                    awaitingDeletionConfirmation ?
                        'Tryk for at bekræfte sletning' :
                        (device != null && device.isTemplate) ?
                        'Slet skabelon' :
                        'Slet måler' }}
            </button>

        </div>
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
        font-size: 0.9em;
        transform: translateY(-1.2rem) translateX(0.5rem);
        margin-bottom: 0.5rem;
    }
    button.gray
    {
        background-color: var(--color-border);
    }
    button.gray:hover
    {
        background-color: var(--color-border-dark);
    }
    a.blue
    {
        color: var(--color-blue)
    }
    a.blue:hover
    {
        color: var(--color-blue-light)
    }
    .flexbuttons
    {
        display:flex;
        justify-content: space-between;
        align-items:flex-end;
        gap: 1rem;
    }
</style>