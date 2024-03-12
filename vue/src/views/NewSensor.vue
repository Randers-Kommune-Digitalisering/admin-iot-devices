<script setup>

    // Import vue
    import { ref, watch } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()

    // Import scripts
    import CreateSensor from '@/components/connector/CreateSensor.vue'

    // Import components
    import Content from '@/components/Content.vue'

    import SelectTemplate from '@/components/sensor/SelectTemplate.vue'
    import EditSensor from '@/components/sensor/EditSensor.vue'

    // Import Icons
    import IconNewSensor from '@/components/icons/IconEditItem.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconTemplateSensor from '@/components/icons/IconDuplicateItem.vue'
    import IconOK from '@/components/icons/IconOK.vue'

    // Set refs for state
    const startingPointSelected = ref(false)
    const startUsingTemplate = ref(null)
    const hasSelectedTemplate = ref(false)
    const isTemplate = ref(false)
    const currentSensorCount = ref(1)
    const httpResponse = ref(null)

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
                scrollTo("editSensor")
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
        // Update shared properties in EditSensor.vue component
        // Lock input fields for shared properties
        EditSensor.setTemplateValues(template)

        // Update state and scroll
        hasSelectedTemplate.value = true
        scrollTo("editSensor")
    }

    function createSensor(useTemplate = false)
    {
        console.log("Creating sensor")

        // Create sensor in Node-RED
        CreateSensor.create(EditSensor.getSensorList())
        .then(response => httpResponse.value = response)
        .then(response => console.log(response))
    }

    function resetAll()
    {
        startingPointSelected.value = false
        startUsingTemplate.value = null
        hasSelectedTemplate.value = false
        isTemplate.value = false
        currentSensorCount.value = 1
        httpResponse.value = null

        EditSensor.resetSensorList()
    }


    // Helper functions

    function scrollTo(id)
    {
        setTimeout(function() {
        
            router.push({ hash: '#' + id })
            const item = document.getElementById(id);
            let rect = item.getBoundingClientRect();
            let count = rect.top- window.scrollY - 120
            window.scrollBy(0, count)
        
        }, 400) // Wait for animations before scrolling
    }


    // Function to update values on template selection

    const updateTemplateValues = (metadata) => {
        console.log("Receieved metadata: " + JSON.stringify(metadata))
    }

    // Function to update count on sensor edit

    const updateSensorCount = (count) => {
        currentSensorCount.value = count
    }

    // Function to on set as template

    const updateSetAsTemplate = (setAsTemplate) => {
        //console.log(isTemplate)
        isTemplate.value = setAsTemplate
    }   


</script>

<template>
<div v-if="httpResponse == null">

    <h2 id="start">Opret måler</h2>

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
                <br /><IconNewSensor :scale="startingPointSelected ? 0.85 : 1.7" />
            </button>

            <button style="width: 22rem" :class="'buttomFromTemplate'
                            + ( startingPointSelected ? ' collapse' : '' )
                            + ( startingPointSelected ? ( startUsingTemplate ? ' blue' : ' gray' ) : ' blue' )
                            " @click="selectStartingPoint(true)">
                Registrer måler
                <br /><span class="big">med skabelon</span>
                <br /><IconTemplateSensor :scale="startingPointSelected ? 1 : 2" />
            </button>

        </Content>
    </div>

            
    <form @submit.prevent="createSensor">
        <fieldset>

            <!-- Template -->

            <div :style="( startingPointSelected ? ( startUsingTemplate ? ' padding-top: 2rem;' : '' ) : '' )
                        + (hasSelectedTemplate ? 'opacity: 0.5;' : '') + 'transition-delay:150ms;'"
                :class="( startingPointSelected ? ( startUsingTemplate ? ' anim' : ' anim hidden' ) : ' anim hidden' )">
                <SelectTemplate id="selectTemplate" @onSelectTemplate="selectTemplate" />
            </div>

            <!-- Sensor metadata -->

            <div :style="startingPointSelected ? 'transition-delay: 300ms' : ''"  :class="( startingPointSelected ? ( startUsingTemplate ? ( hasSelectedTemplate ? ' anim' : ' anim hidden' ) : ' anim' ) : ' anim hidden' )">
                <EditSensor id="editSensor" @onUpdateSensorCount="updateSensorCount" @onUpdateSetAsTemplate="updateSetAsTemplate" :forceNoTemplate="startUsingTemplate" :quickAddMode="( startUsingTemplate ? true : false )" />
            </div>

            <!-- Register sensor(s) button -->

            <div :style="startingPointSelected ? 'transition-delay: 600ms' : ''" :class="( startingPointSelected ? ( startUsingTemplate ? ( hasSelectedTemplate ? ' anim' : ' anim hidden' ) : ' anim' ) : ' anim hidden' )">
                <Content>
                    <button :class="'addsensor' + (startUsingTemplate ? ' blue' : isTemplate ? ' orange' : '')">
                        <span v-if="startUsingTemplate">
                            <span v-if="currentSensorCount > 1">
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

    <h2 id="start">{{currentSensorCount > 1 ? 'Målere' : 'Måler'}} registreret</h2>
    
    <Content>
        <template #icon>
                <IconOK />
        </template>
        <template #heading>
            <span :class="httpResponse.affectedRows >= 1 ? 'green' : 'red'">
                <span class="heavy">
                    {{ JSON.stringify( httpResponse.affectedRows )}} {{currentSensorCount > 1 ? 'nye målere' : 'ny måler'}}
                </span> blev registreret
            </span>
        </template>
        
        <button @click="resetAll()">Registrér endnu en måler</button>
        
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