<script setup>

    // Import vue
    import { ref, watch } from 'vue'
    //import { useRouter } from 'vue-router'
    //const router = useRouter()

    // Import scripts
    import Device from '@/components/connector/Device.vue'

    // Import components
    import Content from '@/components/Content.vue'

    import SelectTemplate from '@/components/device/SelectTemplate.vue'
    import EditDevice from '@/components/device/EditDevice.vue'
    import ListDevices from '@/components/device/ListDevices.vue'

    // Import Icons
    import IconNewDevice from '@/components/icons/IconEditItem.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconTemplateDevice from '@/components/icons/IconDuplicateItem.vue'
    import IconOK from '@/components/icons/IconOK.vue'

    // Set refs for state
    const startingPointSelected = ref(false)
    const startUsingTemplate = ref(null)
    const hasSelectedTemplate = ref(false)
    const isTemplate = ref(false)
    const currentDeviceCount = ref(1)
    const httpResponse = ref(null)
    const inputValidity = ref(false)

    // Functions to continue flow

    function selectStartingPoint(useTemplate)
    {

        // If no starting point has been selected previously

        if(startingPointSelected.value == false)
        {
            startingPointSelected.value = true
            startUsingTemplate.value = useTemplate

            if(useTemplate)
                scrollTo("selectTemplate")
            else
                scrollTo("editDevice")
        }

        // If previous starting point was undone
        else
        {
            scrollTo("start")
            startingPointSelected.value = false
        }


    }

    function selectTemplate(template)
    {
        // Update shared properties in EditDevice.vue component
        // Lock input fields for shared properties
        EditDevice.setTemplateValues(template)

        // Update state and scroll
        hasSelectedTemplate.value = true
        scrollTo("editDevice")
    }

    function createDevice(useTemplate = false)
    {
        console.log("Creating device")

        // Create device in Node-RED
        Device.create(EditDevice.getDeviceList())
        .then(response => httpResponse.value = response)
        .then(response => console.log(response))
    }

    function resetAll()
    {
        startingPointSelected.value = false
        startUsingTemplate.value = null
        hasSelectedTemplate.value = false
        isTemplate.value = false
        currentDeviceCount.value = 1
        httpResponse.value = null

        EditDevice.resetDeviceList()
    }


    // Helper functions

    function scrollTo(id)
    {
        setTimeout(function() {
        
            const item = document.getElementById(id)
            let rect = item.getBoundingClientRect()
            let calc = rect.top - 120
            window.scrollBy(0, calc)
        
        }, 400) // Wait for animations before scrolling
    }


    // Function to update values on template selection

    const updateTemplateValues = (metadata) => {
        console.log("Receieved metadata: " + JSON.stringify(metadata))
    }

    // Function to update count on device edit

    const updateDeviceCount = (count) => {
        currentDeviceCount.value = count
    }
    
    // Function to update input validity (= submit button availability)

    const updateInputVality = (value) => {
        inputValidity.value = value
    }

    // Function to on set as template

    const updateSetAsTemplate = (setAsTemplate) => {
        //console.log(isTemplate)
        isTemplate.value = setAsTemplate
    }   

    // Reset previous values when loading the page 

    resetAll()

</script>

<template>
<div v-if="httpResponse == null">

    <h2 id="start">Ny måler</h2>

    <!-- Select starting point -->

    <div :style="(startingPointSelected ? 'opacity: 0.5;' : '')" id="sectionStart">
        <Content>
            <template #icon>
            </template>
            <template #heading>Hvordan vil du starte?</template>
            
            <button style="width: 16rem" :class="'buttomFromTemplate'
                            + ( startingPointSelected ? ' collapse' : '' )
                            + ( startingPointSelected ? ( !startUsingTemplate ? '' : ' gray' ) : '' )
                            " @click="selectStartingPoint(false)">
                Opret
                <br /><span class="big">ny måler</span>
                <br /><IconNewDevice :scale="startingPointSelected ? 0.85 : 1.7" />
            </button>

            <button style="width: 22rem" :class="'buttomFromTemplate'
                            + ( startingPointSelected ? ' collapse' : '' )
                            + ( startingPointSelected ? ( startUsingTemplate ? ' blue' : ' gray' ) : ' blue' )
                            " @click="selectStartingPoint(true)">
                Registrer måler
                <br /><span class="big">med skabelon</span>
                <br /><IconTemplateDevice :scale="startingPointSelected ? 1 : 2" />
            </button>

        </Content>
    </div>

            
    <form @submit.prevent="createDevice">
        <fieldset>

            <!-- Template -->

            <div :style="( startingPointSelected ? ( startUsingTemplate ? ' padding-top: 2rem;' : '' ) : '' )
                        + (hasSelectedTemplate ? 'opacity: 0.5;' : '') + 'transition-delay:150ms;'"
                :class="( startingPointSelected ? ( startUsingTemplate ? ' anim' : ' anim hidden' ) : ' anim hidden' )">
                <SelectTemplate id="selectTemplate" @onSelectTemplate="selectTemplate" />
            </div>

            <!-- Device metadata -->

            <div :style="startingPointSelected ? 'transition-delay: 300ms' : ''"  :class="( startingPointSelected ? ( startUsingTemplate ? ( hasSelectedTemplate ? ' anim' : ' anim hidden' ) : ' anim' ) : ' anim hidden' )">
                <hr />
                <EditDevice id="editDevice"
                            @onUpdateDeviceCount="updateDeviceCount"
                            @onUpdateSetAsTemplate="updateSetAsTemplate"
                            @onUpdateInputValidity="updateInputVality"
                            :forceNoTemplate="startUsingTemplate"
                            :quickAddMode="( startUsingTemplate ? true : false )" />
            </div>

            <!-- Register device(s) button -->

            <div :style="startingPointSelected ? 'transition-delay: 600ms' : ''" :class="( startingPointSelected ? ( startUsingTemplate ? ( hasSelectedTemplate ? ' anim' : ' anim hidden' ) : ' anim' ) : ' anim hidden' )">
                <Content>
                    <button :class="'adddevice' + (startUsingTemplate ? ' blue' : isTemplate ? ' orange' : '')"
                            :disabled="inputValidity == false && isTemplate == false">
                        <span v-if="startUsingTemplate">
                            <span v-if="currentDeviceCount > 1">
                                Registrér målere
                            </span>
                            <span v-else>
                                Registrér måler
                            </span>
                        </span>
                        <span v-else>
                            <span v-if="isTemplate">Opret skabelon</span>
                            <span v-else>Opret måler</span>
                        </span>
                        <br /><IconNewItem />
                    </button>
                </Content>
            </div>

        </fieldset>
    </form>

</div>
<div v-else>

    <!-- Register sucess -->
    <h2 id="start">{{
            isTemplate ? 'Skabelon oprettet' :
            ( currentDeviceCount > 1 ? 'Målere registreret' : 'Måler registreret' )
        }}</h2>
    
    <Content>
        <template #icon>
                <IconOK />
        </template>
        <template #heading>
            <span :class="httpResponse.dbResponse.affectedRows >= 1 ? '' : 'red'">
                <span>
                    {{
                        isTemplate ? 'Ny skabelon blev oprettet' :
                        ( JSON.stringify( httpResponse.dbResponse.affectedRows ) + ( currentDeviceCount > 1 ? ' nye målere blev registreret' : ' ny måler blev registreret' ))
                    }}
                </span>
            </span>
        </template>

        <ListDevices :devices="httpResponse.requestBody" />

        <button class="adddevice" @click="resetAll()">Registrér en ny måler</button>
        
    </Content>


</div>
</template>

<style scoped>
    #sectionStart button
    {
        height: 12rem;
        font-size: 0.9em;
        padding-bottom: 0.8rem;

        font-weight: 300;
        text-transform: unset;
        line-height: normal;
    }
        button svg
        {
            transition: 200ms;
            margin-top: 2rem;
        }

    button.selected
    {
        background-color: var(--color-green);
    }

    #sectionStart button.collapse
    {
        height: 8rem;
        font-size: 0.8em!important;
        padding-bottom: 0rem;
    }
        button.collapse svg
        {
            margin-top: 0.5rem;
        }

    .adddevice {
        margin-top: 2.5rem;
        font-size: 0.9em;
        height: 7.5rem;
        width: 20rem;
        font-weight: 300;
    }
    .adddevice svg
    {
        margin-top: 1rem;
    }

    button.gray
    {
        background-color: var(--color-border);
    }
    button.gray:hover
    {
        background-color: var(--color-border-dark);
    }

    .anim
    {
        transition: 300ms;
        transform: scaleY(1);
        opacity: 1;
    }
    .hidden
    {
        max-height: 0rem;
        transform: scaleY(0) translateY(-60%);
        opacity: 0;
        overflow: hidden;
    }
</style>