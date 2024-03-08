<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()

    import Content from '@/components/Content.vue'

    import SelectTemplate from '@/components/sensor/SelectTemplate.vue'
    import EditSensor from '@/components/sensor/EditSensor.vue'

    import IconNewSensor from '@/components/icons/IconEditItem.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconTemplateSensor from '@/components/icons/IconDuplicateItem.vue'


    var startingPointSelected = ref(false)
    var startUsingTemplate = ref(null)

    var hasSelectedTemplate = ref(false)
    var isTemplate = ref(false)

    var currentSensorCount = ref(1)

    // Functions to continue flow

    function selectStartingPoint(useTemplate)
    {

        // If no starting point has been selected

        if(startingPointSelected.value == false)
        {
            startingPointSelected.value = true
            startUsingTemplate.value = useTemplate

            if(useTemplate)
                scrollTo("selectTemplate")
            else
                scrollTo("editSensor")
        }

        // Otherwise
        else
        {
            scrollTo("start")
            startingPointSelected.value = false
        }


    }

    function selectTemplate(templateUid)
    {
        hasSelectedTemplate.value = true
        scrollTo("editSensor")
    }

    function createSensor(useTemplate = false)
    {
        console.log("Creating sensor")
    }


    // Helper functions

    function scrollTo(id)
    {
        console.log("scrolling to " + id)
        setTimeout(function() {
        
            router.push({ hash: '#' + id })

            const item = document.getElementById(id);
            var rect = item.getBoundingClientRect();

            let count = rect.top- window.scrollY - 120

            //document.getElementById(id).scrollIntoView();
            window.scrollBy(0, count)
        
        }, 400)
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
        console.log(isTemplate)
        isTemplate.value = setAsTemplate
    }   


</script>

<template>
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
                <EditSensor id="editSensor" @onUpdateSensorCount="updateSensorCount" @onUpdateSetAsTemplate="updateSetAsTemplate" :quickAddMode="( startUsingTemplate ? true : false )" />
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