<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()

    import Content from '@/components/Content.vue'

    import SelectTemplate from '@/components/sensor/SelectTemplate.vue'
    import EditSensor from '@/components/sensor/EditSensor.vue'

    import IconNewSensor from '@/components/icons/IconEditItem.vue'
    import IconTemplateSensor from '@/components/icons/IconDuplicateItem.vue'


    var startingPointSelected = ref(false)
    var startUsingTemplate = ref(null)

    var isEditingSensor = ref(false)

    function selectStartingPoint(useTemplate)
    {

        // If no starting point has been selected

        if(startingPointSelected.value == false)
        {
            startingPointSelected.value = true
            startUsingTemplate = useTemplate

            if(useTemplate)
                scrollTo("selectTemplate")
        }

        // Otherwise
        else
        {
            scrollTo("start")
            startingPointSelected.value = false
        }


    }

    function createSensor(useTemplate = false)
    {

    }


    // Helper functions

    function scrollTo(id)
    {
        console.log("Scrolling to " + id)
        setTimeout(function() {
        
            router.push({ hash: '#' + id })
            document.getElementById(id).scrollIntoView();
        
        }, 200)
    }


</script>

<template>
    <h2 id="start">Opret måler</h2>

    <!-- Select starting point -->

    <div :style="(startingPointSelected ? 'opacity: 0.5;' : '')">
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

    <!-- Template -->

    <div style="padding-top: 2rem" :class="( startingPointSelected ? ( startUsingTemplate ? 'anim' : 'anim hidden' ) : 'anim hidden' )">
        <SelectTemplate id="selectTemplate" />
    </div>

    <!-- Sensor metadata -->

    <div style="padding-top: 2rem" :class="( startingPointSelected ? ( startUsingTemplate ? 'anim' : 'anim hidden' ) : 'anim hidden' )">
        <EditSensor id="editSensor" />
    </div>

</template>

<style scoped>
button
{
    height: 12rem;
    font-size: 1em;
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

button.collapse
{
    height: 8rem;
    font-size: 0.8em!important;
    padding-bottom: 0rem;
}
    button.collapse svg
    {
        margin-top: 0.5rem;
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
    transition: 200ms;
    transform: scaleY(1);
    opacity: 1;
}
.hidden
{
    max-height: 0rem;
    transform: scaleY(0);
    opacity: 0;
    overflow: hidden;
}
</style>