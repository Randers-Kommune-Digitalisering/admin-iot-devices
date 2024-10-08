<script>
    import { ref, watch  } from 'vue'
    
    import DecodeHtml from '@/components/utility/DecodeHtml.vue'

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
        lockEui: { /* Edit mode = Locks EUI input and template switch, and payload decoders for templates */
            type: Boolean,
            required: false,
            default: false
        }
    })

    // Define emit update in device count
    // Define emit update set as template

    const emit = defineEmits(['onUpdateDeviceCount', 'onUpdateSetAsTemplate', 'onUpdateInputValidity'])

    const setEmit = (_emi, value) => {
        emit(_emi, value)
    }

    // Input validity - visual representation of valid/invalid input

    const devEuiIsValid = ref([null])
    const devEuiIsUnique = ref([true])
    const appKeyIsValid = ref([null])

    const devEuiIsEdited = ref([false])
    const appKeyIsEdited = ref([false])


    // Watch when editing device data

    watch( () =>  props.device, (current, previous) => {
        
        deviceList.value[0].uid = current.uid
        deviceList.value[0].devEui = current.deviceEui
        deviceList.value[0].appKey = current.applicationKey
        deviceList.value[0].name = DecodeHtml.decode(current.name)
        deviceList.value[0].energiart = current.energiartskode
        //deviceList.value[0].deviceProfile = current.deviceProfileUid
        deviceList.value[0].payloadDecoder = current.payloadDecoderUid
        deviceList.value[0].templateUid = current.templateUid
        deviceList.value[0].isTemplate = current.isTemplate
        deviceList.value[0].installationsnummer = current.installationsnummer
        isTemplate.value = current.isTemplate == 1 ? true : false

        // Update validity
        devEuiIsValid.value = [true]
        appKeyIsValid.value = [true]
        devEuiIsUnique.value = [true]
        updateValidity()

        devEuiIsEdited.value = [false]
        appKeyIsEdited.value = [false]
    })

    // Watch when toggling template

    watch( () => isTemplate.value, (current, previous) => {
        deviceList.value[0].isTemplate = current

        if(current == true)
        {
            deviceList.value[0].devEui = null
            deviceList.value[0].appKey = null
        }

        setEmit('onUpdateSetAsTemplate', current)
    })

    // Watch forceNoTemplate

    watch( () => props.forceNoTemplate, (current, previous) => {
        if(current == true)
            isTemplate.value = false
    })

    // Initialize blank device

    newDevice(false)
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

    function newDevice(isAdditionalDevice = true) // Adds a device to the list
    {
        deviceList.value.push( JSON.parse(JSON.stringify (deviceMetadata)) )
        setEmit('onUpdateDeviceCount', deviceList.value.length)
        
        // Disable submit button as new device does not have valid length
        if(isAdditionalDevice)
        {
            setEmit("onUpdateInputValidity", false)

            devEuiIsValid.value.push(null)
            appKeyIsValid.value.push(null)
            devEuiIsUnique.value.push(null)
        }
    }

    function deleteDevice(id) // Deletes device from list
    {
        // Remove item at index "id" from deviceList
        deviceList.value.splice(id, 1)
    
        // Emit new count
        setEmit('onUpdateDeviceCount', deviceList.value.length);
    
        // Remove item at index "id" from devEuiIsValid, appKeyIsValid and devEuiIsUnique
        devEuiIsValid.value.splice(id, 1)
        appKeyIsValid.value.splice(id, 1)
        devEuiIsUnique.value.splice(id, 1)

        // Update validity
        updateValidity()
    }

    function cleanDeviceList() // Removes all devices but index 0
    {
        deviceList.value = [deviceList.value[0]]
        setEmit('onUpdateDeviceCount', deviceList.value.length)

        // Update validity
        devEuiIsValid.value = [devEuiIsValid.value[0]]
        appKeyIsValid.value = [appKeyIsValid.value[0]]
        devEuiIsUnique.value = [devEuiIsUnique.value[0]]
        
        updateValidity()
    }

    // Check if an input field value is valid
    
    async function InputValidityCheck(type, index) // Type == "appKey" or "devEui"
    {
        //console.log("This runs: " + type + " - " + index)
        if(deviceList.value[index] == null)
            return;

        if(type == "appKey")
        {
            appKeyIsEdited.value[index] = true
            deviceList.value[index].appKey = deviceList.value[index].appKey.replace(" " , "").trim()
            appKeyIsValid.value[index] = deviceList.value[index].appKey.length <= 32
            updateValidity()
        }

        else if(type == "devEui")
        {
            devEuiIsEdited.value[index] = true
            deviceList.value[index].devEui = deviceList.value[index].devEui.replace(" " , "").trim()
            devEuiIsValid.value[index] = deviceList.value[index].devEui.length >= 16

            // If valid, check if it already exists
            if(devEuiIsValid.value[index] == true)
            {
                fetch('/api/checkeui/' + deviceList.value[index].devEui, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                })
                .then(response => response.json())
                .then(value => {
                    devEuiIsUnique.value[index] = value;
                    updateValidity()
                });
            }
            else
            {
                devEuiIsUnique.value[index] = true;
                updateValidity()
            }
        }
    }

    // Check if all inputs are valid and emit to parent

    function updateValidity()
    {
        var isValid = ( (devEuiIsValid.value.some(x => x == false || x == null) == false )
                     && (appKeyIsValid.value.some(x => x == false || x == null) == false )
                     && (devEuiIsUnique.value.some(x => x == false || x == null) == false ) )

        setEmit("onUpdateInputValidity", isValid)
    }


    // Payload decoders

    const payloadDecoder = ref(null)

    function fetchDecoders()
    {
        const data = ref(null)

        fetch('/api/decoders', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response = response.json())
        .then(value => data.value = value)

        return data
    }

    payloadDecoder.value = fetchDecoders()

    // Device profiles

    /*const deviceProfile = ref(null) // DIsabled for now, as only 1 device profile is used

    function fetchDeviceProfiles()
    {
        const data = ref(null)

        fetch('/api/deviceprofiles', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response = response.json())
        .then(value => data.value = value)

        return data
    }

    deviceProfile.value = fetchDeviceProfiles()*/

</script>

<template>

<!-- DevEUI + AppKey list + Name + Energiart -->

<Content :id="props.id">
    <template #icon>
        <IconEditSimple />
    </template>
    <template #heading>Beskrivelse</template>

        <div v-if="!quickAddMode && (deviceList[0].templateUid == -1) && !lockEui">
            <input type="checkbox" id="istemplate" name="One" value="One" style="margin-bottom: 2.5rem" v-model="isTemplate">
            <label v-if="isTemplate" for="istemplate" class="orange">Markeret som skabelon</label>
            <label v-else for="istemplate" class="randers">Markér som skabelon</label>
        </div>

        <!-- Device description -->
        <div class="flexbox" :style="( quickAddMode ? 'margin-top:2rem;' : '' )">
            
            <div>
                <label for="name_0" class="capitalize">

                    Navn

                </label>
                <input type="text" :placeholder="isTemplate ? 'F.eks. `Brunata Minomess vandmåler`' : 'F.eks. `El-måler Grønhøjskolen`'" id="name_0" v-model="deviceList[0].name" required>
            </div>

        </div>

        <div class="flexbox triflex" v-if="!isTemplate" v-for="(device, index) in deviceList">
            <div>
                <label :for="'eui_' + index" class="capitalize">
                    <span class="uid" v-if="deviceList.length > 1">#{{index+1}}</span>

                    Enheds EUI

                    <span :style="devEuiIsValid[index] != null ? devEuiIsValid[index] ? 'display:none' : '' : 'display:none'" class="small red">
                        Mindst 16 tegn
                    </span>
                    <span :style="devEuiIsUnique[index] != null ? devEuiIsUnique[index] ? 'display:none' : '' : 'display:none'" class="small red">
                        EUI findes allerede
                    </span>

                </label>
                <input  type="text" placeholder="..." :id="'eui_' + index"
                        v-model="device.devEui"
                        :disabled="lockEui"
                        :class="devEuiIsValid[index] != null && devEuiIsEdited[index] ? (devEuiIsValid[index] && devEuiIsUnique[index]) ? 'green' : 'red' : ''"
                        @focusout="InputValidityCheck('devEui', index)"
                        required>
            </div>

            <div>
                <label :for="'app_' + index" class="capitalize">
                    <span class="uid" v-if="deviceList.length > 1">#{{index+1}}</span>

                    OTAA Application Key

                    <span :style="appKeyIsValid[index] != null ? appKeyIsValid[index] ? 'display:none' : '' : 'display:none'" class="small red">
                        Maks 32 tegn
                    </span>

                </label>
                <input  type="text" placeholder="..." :id="'app_' + index"
                        v-model="device.appKey"
                        :class="appKeyIsValid[index] != null && appKeyIsEdited[index] ? appKeyIsValid[index] ? 'green' : 'red' : ''"
                        @focusout="InputValidityCheck('appKey', index)"
                        required>
            </div>

            <div>
                <label :for="'installnumber_' + index" class="capitalize">
                    <span class="uid" v-if="deviceList.length > 1">#{{index+1}}</span>

                    Installationsnr.
                    
                    <div @click="deleteDevice(index)" class="float-right tag tagbutton" v-if="deviceList.length > 1">Slet</div>

                    
                </label>
                <input type="text" placeholder="..." :id="'installnumber_' + index"
                       v-model="device.installationsnummer">
            </div>

            <input type="hidden" v-model="device.uid" /> <!-- Hidden device UID when editiing device -->

        </div>
        <button @click="newDevice()" v-if="quickAddMode" type="button" class="blue">Tilføj måler</button>

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

            <label for="energiart_0" class="capitalize">

                Energiart

            </label>
            <select name="template" id="template" v-model="deviceList[0].energiart" :disabled="lockSharedProperties || (deviceList[0] != null && deviceList[0].templateUid != -1)" required>
                <option value="-1" disabled>Vælg fra liste ..</option>

                <option v-for="(energiart, index) in energiarter" :value="index">{{ energiart }}</option>
            </select>

        </div>
            
        <!--div>
            <label for="deviceprofile" class="capitalize">

                Enhedsprofil

            </label>
            <select v-if="deviceProfile == null || (Array.isArray(deviceProfile.value) && deviceProfile.value.length == 0)" >
                <option value="-1" disabled>Indlæser ..</option>
            </select>
            <select v-else id="deviceprofile" v-model="deviceList[0].deviceProfile">
                <option value="-1" disabled>Vælg fra liste ..</option>

                <option v-for="profile in deviceProfile.value" :value="profile.uid">{{ profile.name }}</option>
            </select>

        </div-->
        
        <div>
            <label for="decoder" class="capitalize">

                Dekoder

            </label>
            <select v-if="payloadDecoder == null || (Array.isArray(payloadDecoder.value) && payloadDecoder.value.length == 0)"
                    disabled>
                <option value="-1" disabled>Indlæser ..</option>
            </select>
            <select v-else name="template" id="template" v-model="deviceList[0].payloadDecoder" :disabled="(props.lockEui && isTemplate)">
                <option value="-1" disabled>Vælg fra liste ..</option>

                <option v-for="decoder in payloadDecoder.value" :value="decoder.uid">{{ decoder.name }}</option>
            </select>

        </div>

    </div>


</Content>




</template>

<style scoped>
    .small
    {
        font-size: 0.8em;
        text-transform: none;
        float: right;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
    }
    .tagbutton
    {
        text-transform: uppercase;
        font-size: 0.7em;
        margin-top: 0.4rem;
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
    input.green {
        border-color: var(--color-green-light);
    }
    input.red {
        border-color: var(--color-red-light);
    }

    @media screen and (min-width: 54rem) /* 640 px */
    {
        .triflex > *
        {
            flex-wrap:nowrap;
        }
        .triflex > :nth-child(1)
        {
            width: calc(28.5% - 0.5rem);
        }
        .triflex > :nth-child(2)
        {
            width: calc(42% - 0.5rem);
        }
        .triflex > :nth-child(3)
        {
            width: calc(28.5% - 0.5rem);
        }
    }
</style>