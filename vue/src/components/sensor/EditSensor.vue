<script>
    import { ref, watch  } from 'vue'

    const sensorList = ref([])
    const isTemplate = ref(false)
    const lockSharedProperties = ref(false)

    // Retrieve sensor data

    function getSensorList()
    {
        return sensorList.value
    }

    function setTemplateValues(template)
    {
        // Update value(s) for properties shared with template
        sensorList.value[0].templateUid = template.uid
        sensorList.value[0].energiart = template.energiartskode
        
        // Lock input fields
        lockSharedProperties.value = true
    }

    function resetSensorList()
    {
        sensorList.value = []
        //newSensor()
    }

    export default {
        getSensorList, setTemplateValues, resetSensorList
    }

</script>
<script setup>

    import Content from '@/components/Content.vue'

    import IconEditSimple from '../icons/IconEditSimple.vue'
    import IconSettings from '../icons/IconSettings.vue'

    import sensorMetadata from '@/data/sensorMetadata.json'
    import energiarter from '@/data/energiarter.json'

    const props = defineProps({
        sensor: {
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

    // Define emit update in sensor count
    // Define emit update set as template

    const emit = defineEmits(['onUpdateSensorCount', 'onUpdateSetAsTemplate'])

    const setEmit = (_emi, value) => {
        emit(_emi, value)
    }

    // Watch when editing sensor data

    watch( () =>  props.sensor, (current, previous) => {
        
        if(current.isTemplate)
        {
            isTemplate.value = true
        }

        sensorList.value[0].uid = current.uid
        sensorList.value[0].devEui = current.deviceEui
        sensorList.value[0].appKey = current.applicationKey
        sensorList.value[0].name = current.name
        sensorList.value[0].energiart = current.energiartskode
        sensorList.value[0].serviceProfile = current.serviceProfileUid
        sensorList.value[0].payloadDecoder = current.serviceProfileUid
        sensorList.value[0].templateUid = current.defaultValuesTemplateUid
        
        //console.log("Updated sensor data: ")
        console.log(current)
    })

    // Watch when toggling template

    watch( () => isTemplate.value, (current, previous) => {
        sensorList.value[0].isTemplate = current
        setEmit('onUpdateSetAsTemplate', current)
    })

    // Watch forceNoTemplate

    watch( () => props.forceNoTemplate, (current, previous) => {
        if(current == true)
            isTemplate.value = false
    })

    // Initialize blank sensor

    newSensor()
    cleanSensorList()

    // Clean sensor list when changing mode

    watch( () => props.quickAddMode, (current, previous) => {
        
        if(current !== previous)
        {
            cleanSensorList()

            // Update value(s) for properties shared with template
            sensorList.value[0].templateUid = -1
            sensorList.value[0].energiart = -1
            
            // Unlock input fields
            lockSharedProperties.value = false
        }
    })


    // Helper functions

    function newSensor() // Adds a sensor to the list
    {
        sensorList.value.push( JSON.parse(JSON.stringify (sensorMetadata)) )
        setEmit('onUpdateSensorCount', sensorList.value.length)
    }

    function deleteSensor(id) // Deletes sensor from list
    {
        const firstPart = sensorList.value.slice(0, id)
        const lastPart = sensorList.value.slice(id+1)
        sensorList.value = firstPart.concat(lastPart)
        setEmit('onUpdateSensorCount', sensorList.value.length)
    }

    function cleanSensorList() // Removes all sensors but index 0
    {
        sensorList.value = [sensorList.value[0]]
        setEmit('onUpdateSensorCount', sensorList.value.length)
    }

    // Test data

    const serviceProfile = ["Test service profil A", "Test service profil B"]
    const payloadDecoder = ["Test payload decoder I", "Test payload decoder II"]

</script>

<template>

<!-- DevEUI + AppKey list + Name + Energiart -->

<Content :id="id">
    <template #icon>
        <IconEditSimple />
    </template>
    <template #heading>Beskrivelse</template>

        <div v-if="!quickAddMode && (sensorList[0].templateUid == -1)">
            <input type="checkbox" id="istemplate" name="One" value="One" style="margin-bottom: 2.5rem" v-model="isTemplate">
            <label v-if="isTemplate" for="istemplate" class="orange">Markeret som skabelon</label>
            <label v-else for="istemplate" class="randers">Markér som skabelon</label>
        </div>


        <div class="flexbox" v-if="!isTemplate" v-for="(sensor, index) in sensorList">
            <div>
                <label :for="'eui_' + index" class="capitalize">
                    <span class="uid" v-if="sensorList.length > 1">#{{index+1}}</span>

                    Enheds EUI (DevEUI)

                </label>
                <input type="text" placeholder="..." :id="'eui_' + index" v-model="sensor.devEui" :disabled="lockEui" required>
            </div>
            <div>
                <label :for="'app_' + index" class="capitalize">
                    <span class="uid" v-if="sensorList.length > 1">#{{index+1}}</span>

                    OTAA Application Key (AppKey)

                    <div @click="deleteSensor(index)" class="float-right tag tagbutton" v-if="sensorList.length > 1">Slet</div>
                </label>
                <input type="text" placeholder="..." :id="'app_' + index" v-model="sensor.appKey" required>
            </div>

            <input type="hidden" v-model="sensor.uid" /> <!-- Hidden sensor UID when editiing sensor -->

        </div>
        <button @click="newSensor()" v-if="quickAddMode" type="button" class="gray">Tilføj måler</button>


        
        <!-- Sensor description -->
    
        <div class="flexbox" :style="( quickAddMode ? 'margin-top:2rem;' : '' )">
            
            <div>
                <label for="name_0" class="capitalize">

                    Navn

                </label>
                <input type="text" :placeholder="isTemplate ? 'F.eks. `Brunata Minomess vandmåler`' : 'F.eks. `El-måler Grønhøjskolen`'" id="name_0" v-model="sensorList[0].name" required>
            </div>

            
            <div>
                <label for="energiart_0" class="capitalize">

                    Energiart

                </label>
                <select name="template" id="template" v-model="sensorList[0].energiart" :disabled="lockSharedProperties || (sensorList[0] != null && sensorList[0].templateUid != -1)" required>
                    <option value="-1" disabled>Vælg fra liste ..</option>

                    <option v-for="(energiart, index) in energiarter" :value="index">{{ energiart }}</option>
                </select>

            </div>

        </div>

</Content>

    <!-- Sensor configuration -->

<hr v-if="!quickAddMode && (sensorList[0].templateUid == -1)" />

<Content v-if="!quickAddMode && (sensorList[0].templateUid == -1)">
    <template #icon>
        <IconSettings />
    </template>
    <template #heading>Konfiguration</template>


    
    <div class="flexbox">
            
        <div>
            <label for="deviceprofile_0" class="capitalize">

                Serviceprofil

            </label>
            <select name="template" id="template" v-model="sensorList[0].serviceProfile">
                <option value="-1" disabled>Vælg fra liste ..</option>

                <option v-for="(profile, index) in serviceProfile" :value="index">{{ profile }}</option>
            </select>

        </div>
        
        <div>
            <label for="deviceprofile_0" class="capitalize">

                Dekoder

            </label>
            <select name="template" id="template" v-model="sensorList[0].payloadDecoder">
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