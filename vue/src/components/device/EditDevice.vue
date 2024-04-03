<script>
    import { ref, watch  } from 'vue'

    const deviceList = ref([])
    const isTemplate = ref(false)
    const lockSharedProperties = ref(false)

    // Retrieve device data

    function getDeviceList()
    {
        return deviceList.value
    }

    function setTemplateValues(template)
    {
        // Update value(s) for properties shared with template
        deviceList.value[0].templateUid = template.uid
        deviceList.value[0].energiart = template.energiartskode
        deviceList.value[0].installationsnummer = template.installationsnummer
        
        // Lock input fields
        lockSharedProperties.value = true
    }

    function resetDeviceList()
    {
        deviceList.value = []
        isTemplate.value = false
        //newDevice()
    }

    export default {
        getDeviceList, setTemplateValues, resetDeviceList
    }

</script>
<script setup>

    import Content from '@/components/Content.vue'

    import IconEditSimple from '../icons/IconEditSimple.vue'
    import IconSettings from '../icons/IconSettings.vue'

    import deviceMetadata from '@/data/deviceMetadata.json'
    import energiarter from '@/data/energiarter.json'

    const props = defineProps({
        device: {
            type: Object,
            required: false
        },
        quickAddMode: {
            type: Boolean,
            required: false,
            default: false
        },
        forceNoTemplate: {
            type: Boolean,
            required: false,
            default: false
        },
        id: {
            type: String,
            required: false
        },
        lockEui: {
            type: Boolean,
            required: false,
            default: false
        }
    })

    // Define emit update in device count
    // Define emit update set as template

    const emit = defineEmits(['onUpdateDeviceCount', 'onUpdateSetAsTemplate'])

    const setEmit = (_emi, value) => {
        emit(_emi, value)
    }

    // Watch when editing device data

    watch( () =>  props.device, (current, previous) => {
        
        deviceList.value[0].uid = current.uid
        deviceList.value[0].devEui = current.deviceEui
        deviceList.value[0].appKey = current.applicationKey
        deviceList.value[0].name = current.name
        deviceList.value[0].energiart = current.energiartskode
        deviceList.value[0].serviceProfile = current.serviceProfileUid
        deviceList.value[0].payloadDecoder = current.serviceProfileUid
        deviceList.value[0].templateUid = current.templateUid
        deviceList.value[0].isTemplate = current.isTemplate
        deviceList.value[0].installationsnummer = current.installationsnummer
        isTemplate.value = current.isTemplate == 1 ? true : false
        
        //console.log("Updated device data: ")
        console.log(current)
    })

    // Watch when toggling template

    watch( () => isTemplate.value, (current, previous) => {
        deviceList.value[0].isTemplate = current
        setEmit('onUpdateSetAsTemplate', current)
    })

    // Watch forceNoTemplate

    watch( () => props.forceNoTemplate, (current, previous) => {
        if(current == true)
            isTemplate.value = false
    })

    // Initialize blank device

    newDevice()
    cleanDeviceList()
    lockSharedProperties.value = false

    // Clean device list when changing mode

    watch( () => props.quickAddMode, (current, previous) => {
        
        if(current !== previous)
        {
            cleanDeviceList()

            // Update value(s) for properties shared with template
            deviceList.value[0].templateUid = -1
            deviceList.value[0].energiart = -1
            
            // Unlock input fields
            lockSharedProperties.value = false
        }
    })

    // Helper functions

    function newDevice() // Adds a device to the list
    {
        deviceList.value.push( JSON.parse(JSON.stringify (deviceMetadata)) )
        setEmit('onUpdateDeviceCount', deviceList.value.length)
    }

    function deleteDevice(id) // Deletes device from list
    {
        const firstPart = deviceList.value.slice(0, id)
        const lastPart = deviceList.value.slice(id+1)
        deviceList.value = firstPart.concat(lastPart)
        setEmit('onUpdateDeviceCount', deviceList.value.length)
    }

    function cleanDeviceList() // Removes all devices but index 0
    {
        deviceList.value = [deviceList.value[0]]
        setEmit('onUpdateDeviceCount', deviceList.value.length)
    }

    // Test data

    const serviceProfile = ["Test service profil A", "Test service profil B"]
    const payloadDecoder = ["Test payload decoder I", "Test payload decoder II"]

</script>

<template>

<!-- DevEUI + AppKey list + Name + Energiart -->

<Content :id="props.id">
    <template #icon>
        <IconEditSimple />
    </template>
    <template #heading>Beskrivelse</template>

        <div v-if="!quickAddMode && (deviceList[0].templateUid == -1)">
            <input type="checkbox" id="istemplate" name="One" value="One" style="margin-bottom: 2.5rem" v-model="isTemplate">
            <label v-if="isTemplate" for="istemplate" class="orange">Markeret som skabelon</label>
            <label v-else for="istemplate" class="randers">Markér som skabelon</label>
        </div>


        <div class="flexbox" v-if="!isTemplate" v-for="(device, index) in deviceList">
            <div>
                <label :for="'eui_' + index" class="capitalize">
                    <span class="uid" v-if="deviceList.length > 1">#{{index+1}}</span>

                    Enheds EUI (DevEUI)

                </label>
                <input type="text" placeholder="..." :id="'eui_' + index" v-model="device.devEui" :disabled="lockEui" required>
            </div>
            <div>
                <label :for="'app_' + index" class="capitalize">
                    <span class="uid" v-if="deviceList.length > 1">#{{index+1}}</span>

                    OTAA Application Key (AppKey)

                    <div @click="deleteDevice(index)" class="float-right tag tagbutton" v-if="deviceList.length > 1">Slet</div>
                </label>
                <input type="text" placeholder="..." :id="'app_' + index" v-model="device.appKey" required>
            </div>

            <input type="hidden" v-model="device.uid" /> <!-- Hidden device UID when editiing device -->

        </div>
        <button @click="newDevice()" v-if="quickAddMode" type="button" class="gray">Tilføj måler</button>


        
        <!-- Device description -->
    
        <div class="flexbox" :style="( quickAddMode ? 'margin-top:2rem;' : '' )">
            
            <div>
                <label for="name_0" class="capitalize">

                    Navn

                </label>
                <input type="text" :placeholder="isTemplate ? 'F.eks. `Brunata Minomess vandmåler`' : 'F.eks. `El-måler Grønhøjskolen`'" id="name_0" v-model="deviceList[0].name" required>
            </div>

            
            <div>
                <label for="energiart_0" class="capitalize">

                    Energiart

                </label>
                <select name="template" id="template" v-model="deviceList[0].energiart" :disabled="lockSharedProperties || (deviceList[0] != null && deviceList[0].templateUid != -1)" required>
                    <option value="-1" disabled>Vælg fra liste ..</option>

                    <option v-for="(energiart, index) in energiarter" :value="index">{{ energiart }}</option>
                </select>

            </div>

        </div>

</Content>

    <!-- Device configuration -->

<hr v-if="!quickAddMode && (deviceList[0].templateUid == -1)" />

<Content v-if="!quickAddMode && (deviceList[0].templateUid == -1)">
    <template #icon>
        <IconSettings />
    </template>
    <template #heading>Konfiguration</template>


    
    <div class="flexbox">

        <div>
            <label for="deviceprofile_0" class="capitalize">

                Installationsnummer

            </label>
            <input type="text" placeholder="..." id="name_0" v-model="deviceList[0].installationsnummer" :disabled="lockSharedProperties || (deviceList[0] != null && deviceList[0].templateUid != -1)">
            

        </div>
            
        <div>
            <label for="deviceprofile_0" class="capitalize">

                Serviceprofil

            </label>
            <select name="template" id="template" v-model="deviceList[0].serviceProfile">
                <option value="-1" disabled>Vælg fra liste ..</option>

                <option v-for="(profile, index) in serviceProfile" :value="index">{{ profile }}</option>
            </select>

        </div>
        
        <div>
            <label for="deviceprofile_0" class="capitalize">

                Dekoder

            </label>
            <select name="template" id="template" v-model="deviceList[0].payloadDecoder">
                <option value="-1" disabled>Vælg fra liste ..</option>

                <option v-for="(decoder, index) in payloadDecoder" :value="index">{{ decoder }}</option>
            </select>

        </div>

    </div>


</Content>




</template>

<style scoped>
    .tagbutton
    {
        text-transform: uppercase;
        font-size: 0.7em;
    }
    .tagbutton:hover
    {
        cursor: pointer;
        background-color: var(--color-border-dark)
    }
    label .uid
    {
        font-weight: 600;
        font-size:0.9em!important;
        color: var(--color-border-dark);
    }
    
    button.gray
    {
        background-color: var(--color-border);
    }
    button.gray:hover
    {
        background-color: var(--color-border-dark);
    }
</style>