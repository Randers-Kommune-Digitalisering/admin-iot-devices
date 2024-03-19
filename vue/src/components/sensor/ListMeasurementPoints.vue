<script setup>
    import { ref, watch } from 'vue'
    //import { useRouter } from 'vue-router'

    import * as dayjs from 'dayjs'

    //const router = useRouter()

    import Content from '@/components/Content.vue'
    import EditMeasurementPoint from '@/components/sensor/EditMeasurementPoint.vue'
    import MeasurementPoint from '@/components/connector/MeasurementPoint.vue'

    import IconMeasurementPoint from '@/components/icons/IconCircle.vue'
    import IconEdit from '@/components/icons/IconEditSimple.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconUpload from '@/components/icons/IconUpload.vue'
    import IconDownload from '@/components/icons/IconDownload.vue'
    
    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'
    import measurementPointMetadata from '@/data/measurementPointMetadata.json'

    const props = defineProps({
        measurementPoints: {
            type: Array,
            required: false
        },
        deviceUid: {
            type: Number,
            required: true
        }
    })

    const measurementPoints = ref(null)

    // Watch when changing props

    watch( () => props.measurementPoints, (current, previous) => {

        measurementPoints.value = current
        console.log("New measurementPoints-list retrieved:")
        console.log(measurementPoints.value)

    })

    // Editing functionality

    const editingMeasurementPoint = ref(false)
    const measurementPointSelected = ref(null)
    const measurementPointPreviousValues = ref(null)

    function selectMeasurementPoint(point)
    {
        if(point.deviceUid != props.deviceUid) // If click on template measurement point
        {
            return;
        }
        else if(measurementPointSelected.value == point) // If clicking already selected point
        {
            measurementPointSelected.value = null
            editingMeasurementPoint.value = false
            return
        }
        else if(editingMeasurementPoint.value && measurementPointSelected.value.uid == -1 && point.uid != -1) // Don't allow click if currently creating new measurement point
        {
            return; 
        }
        
        console.log("Editing measurement point #" + point.uid)
        console.log(point)

        measurementPointSelected.value = point
        measurementPointPreviousValues.value = JSON.parse(JSON.stringify(point))
        editingMeasurementPoint.value = true
    }

    // Start adding new

    function newMeasurementPoint()
    {
        // Select empty measurement point
        measurementPointSelected.value = JSON.parse(JSON.stringify(measurementPointMetadata))

        // Update refs in object
        measurementPointSelected.value.devUid = props.deviceUid

        editingMeasurementPoint.value = true
    }

    // Save / cancel

    function saveEdit()
    {
        console.log("Saving")
        
        if(measurementPointSelected.value.uid == -1)
        {
            MeasurementPoint.create(measurementPointSelected.value)
            .then(response => measurementPointSelected.value.uid = response.dbResponse.insertId)
            .then(response => measurementPoints.value.push(measurementPointSelected.value))
            .then(response => {
                // Remove selection
                measurementPointSelected.value = null
                editingMeasurementPoint.value = false
            })
                
        }
        else
            MeasurementPoint.update(measurementPointSelected.value)
            .then(response => {
                // Remove selection
                measurementPointSelected.value = null
                editingMeasurementPoint.value = false
            })
    }

    function cancelEdit()
    {
        // Reset changes
        if(measurementPointSelected.value.uid != -1)
            measurementPoints.value[measurementPoints.value.findIndex(x => x.uid == measurementPointPreviousValues.value.uid)] = measurementPointPreviousValues.value

        // Remove selection
        measurementPointSelected.value = null
        editingMeasurementPoint.value = false
    }

</script>

<template>
    
    <Content>
        <template #icon>
            <IconMeasurementPoint />
        </template>
        <template #heading>Målepunkter</template>

        <span class="paragraph">
            Herunder kan målepunkter for måleren ses, rettes og slettes. Målepunkter eksporteres automatisk til EnergyKey.
        </span>
        
        <table>
            <thead>
                <tr class="nohover">
                    <th></th>
                    <th>Navn</th>
                    <th>Enhed</th>
                    <th>Energiart</th>
                    <th>Type</th>
                    <th>Seneste data</th>
                </tr>
            </thead>

            <tr v-if="measurementPoints != null && measurementPoints.length > 0" v-for="measurement in measurementPoints" @click="selectMeasurementPoint(measurement)"
                :class="editingMeasurementPoint && measurementPointSelected.uid == measurement.uid ? 'orange' : ((editingMeasurementPoint && measurementPointSelected.uid == -1) || measurement.deviceUid != props.deviceUid ? ' nohover' : '')">

                <td class="sensorTypeTd"> <!-- Measurement point status (if data is being imported and exported) -->
                    <span :class="measurement.deviceUid != props.deviceUid ? 'blue' : 'red'">
                        <IconMeasurementPoint :scale="0.8" />
                    </span>
                </td>

                <td>
                    <div class="flex col">
                        <span>{{measurement.name}}</span>
                        <span v-if="measurement.deviceUid != props.deviceUid" class="tiny blue">Indlæst fra skabelon</span>
                    </div>
                </td>
                <td>{{measurement.enhed == "" ? measurement.inputenhed : (measurement.inputenhed + " → " + measurement.enhed)}}</td>

                <td>{{energiarter[measurement.energiartskode]}}</td>
                <td>{{typekoder[measurement.typekode]}}</td>

                <td>
                    <div class="flex col">

                        <span v-if="measurement.lastObservation == null" class="red small flex">
                            <IconDownload :scale="0.8" /> <span>Ingen import</span>
                        </span>
                        <span v-else class="randers small flex">
                            <IconDownload :scale="0.8" /> <span>{{ dayjs(measurement.lastObservation).format("DD/MM-YYYY") }}</span>
                        </span>

                        <span class="red small flex">
                            <IconUpload :scale="0.8" /> <span>Ingen export</span>
                        </span>
                        
                    </div>
                </td>


            </tr>

            <tr v-else class="nohover">
                <td :colspan="6">Der er ingen målepunkter tilknyttet måleren.</td>
            </tr>


            <tr v-if="editingMeasurementPoint" class="nohover">
                <td colspan="6">
                <EditMeasurementPoint :measurementPoint="measurementPointSelected" :deviceUid="deviceUid" @onSaveEdit="saveEdit()" @onCancelEdit="cancelEdit()" />
                </td>
            </tr>

            <tr v-else class="nohover"> <!-- Add sensor row -->
                <td colspan="5"></td>
                <td>
                    <button @click="newMeasurementPoint()" class="rowbutton blue wide">
                        <IconNewItem />
                        <span>
                            Tilføj målepunkt
                        </span>
                    </button>
                </td>
            </tr>

        </table>
        
    </Content>

</template>

<style scoped>

    th
    {
        font-size: 0.8em;
    }
    td
    {
        font-size: 1em;
    }
    table
    {
        margin-bottom: 3rem;
    }
    .rowbutton 
    {
        width: 8rem;
        height: 4.8rem;
        padding: 0.5rem;
        margin-bottom: 0rem;
        position:relative;
    }
    .rowbutton.wide
    {
        width: 10rem;
    }
    .rowbutton.ext
    {
        margin-left: 0.2rem;
    }
        .rowbutton > span
        {
            position:absolute;
            left:0px;
            width:100%;
            text-align: center;
            bottom: 0.6rem;
            font-size: 0.7em;
        }
        .rowbutton svg
        {
            position:absolute;
            left: calc(50% - 10px);
            bottom: calc(50% - 3px);
        }
        
    .small
    {
        font-size: 0.7em;
    }
    .tiny
    {
        font-size: 0.6em;
    }

    .flex
    {
        display:flex;
        gap: 0.5rem;
    }
    .flex.right
    {
        justify-content:flex-end;
    }
    .flex:not(.col)
    {
        align-items:center;
    }
    .flex.col
    {
        flex-direction:column;
    }
        .flex > .fullheight
        {
            display:block;
            height: 100%;
        }

    
    .sensorTypeTd
    {
        max-width: 1.5rem;
        padding-right:0rem;
    }
    .sensorTypeTd > span
    {
        transform: translateY(0.3rem);
    }


    tr:not(.nohover):hover
    {
        cursor:pointer;
        background-color: var(--color-bg);
        transition: 200ms;
    }
    tr.orange
    {
        background-color: var(--color-bg);
        
    }
    tr.orange td {
        border-bottom-color: var(--color-orange);
    }
/*
    tr.orange:hover
    {
        background-color: var(--color-orange)
    }
    tr.orange td:first-child { border-top-left-radius: 0.5rem; }
    tr.orange td:last-child { border-top-right-radius: 0.5rem; }
    tr.orange td:first-child { border-bottom-left-radius: 0.5rem; }
    tr.orange td:last-child { border-bottom-right-radius: 0.5rem; }*/

</style>