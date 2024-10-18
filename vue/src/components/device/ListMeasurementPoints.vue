<script setup>
    import { ref, watch } from 'vue'

    // Components
    import Content from '@/components/Content.vue'
    import EditMeasurementPoint from '@/components/device/EditMeasurementPoint.vue'
    import MeasurementPoint from '@/components/connector/MeasurementPoint.vue'
    import DateFormatter from '@/components/utility/DateFormatter.vue'

    // Icons
    import IconMeasurementPoint from '@/components/icons/IconCircle.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconUpload from '@/components/icons/IconUpload.vue'
    import IconDownload from '@/components/icons/IconDownload.vue'
    
    // Data
    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'
    import measurementPointMetadata from '@/data/measurementPointMetadata.json'

    // Props
    const props = defineProps({
        measurementPoints: {
            type: Array,
            required: false
        },
        deviceUid: {
            type: Number,
            required: true
        },
        showDataStats: {
            type: Boolean,
            default: true
        }
    })

    const measurementPoints = ref(null)

    // Watch when changing props

    watch( () => props.measurementPoints, (current, previous) => {

        // Ensure ratio value exists
        if(current != null)
            current.forEach( measurement =>
            {
                if(measurement.pulsEnhedRatio == null)
                        measurement.pulsEnhedRatio = 1
            })

        // Update values
        measurementPoints.value = current

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
        
        //console.log("Editing measurement point #" + point.uid)
        measurementPointSelected.value = point // Set selection
        measurementPointPreviousValues.value = JSON.parse(JSON.stringify(point)) // Copy values of selected item
        editingMeasurementPoint.value = true

        scrollTo("editMeasurementPoint")
    }

    // Start adding new

    function newMeasurementPoint()
    {
        // Select empty measurement point
        measurementPointSelected.value = JSON.parse(JSON.stringify(measurementPointMetadata))

        // Update refs in object
        measurementPointSelected.value.deviceUid = props.deviceUid
        editingMeasurementPoint.value = true

        scrollTo("editMeasurementPoint")
    }

    // Save / cancel

    function saveEdit()
    {        
        if(measurementPointSelected.value.uid == -1) // New measurement point
        {
            //console.log("Creating new measurement point with deviceUid: " + measurementPointSelected.value.deviceUid)
            
            MeasurementPoint.create(measurementPointSelected.value)
            .then(response => measurementPointSelected.value.uid = response.dbResponse.insertId)
            .then(response => measurementPoints.value.push(measurementPointSelected.value))
            .then(response => {
                // Remove selection
                measurementPointSelected.value = null
                editingMeasurementPoint.value = false
            })
                
        }
        else // Editing existing measurement point
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

    
    // Helper functions

    function scrollTo(id)
    {
        setTimeout(function() {
        
            const item = document.getElementById(id)
            let rect = item.getBoundingClientRect()
            let viewportHeight = window.innerHeight || document.documentElement.clientHeight
            let calc = rect.bottom - viewportHeight + 15

            if(calc > 0)
                window.scrollBy(0, calc)
        }, 300) // Wait for animations before scrolling
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

            <tr v-if="measurementPoints != null && measurementPoints.length > 0"
                v-for="measurement in measurementPoints"
                @click="selectMeasurementPoint(measurement)"
                :id="measurement.uid"
                :class="editingMeasurementPoint && measurementPointSelected.uid == measurement.uid ? 'orange'
                        : ((editingMeasurementPoint && measurementPointSelected.uid == -1) || measurement.deviceUid != props.deviceUid ? ' nohover' : '')"
            >

                <td class="deviceTypeTd"> <!-- Measurement point status (if data is being imported and exported) -->
                    <span :class="!props.showDataStats ? 'orange'
                                : measurement.deviceUid != props.deviceUid ? 'blue'
                                : measurement.lastExport != null && measurement.lastExport != '0000-00-00 00:00:00' ?  'green'
                                : measurement.lastObservation != null && measurement.lastObservation != '0000-00-00 00:00:00' ?  'randers'
                                : 'red'">
                        <IconMeasurementPoint :scale="0.8" />
                    </span>
                </td>

                <td>
                    <div class="flex col">
                        <span>{{measurement.name}}</span>
                        <span v-if="measurement.deviceUid != props.deviceUid" class="tiny blue">Indlæst fra skabelon</span>
                    </div>
                </td>
                <td>{{measurement.enhed == measurement.inputenhed ? measurement.inputenhed : (measurement.inputenhed + " → " + measurement.enhed)}}</td>

                <td>{{energiarter[measurement.energiartskode]}}</td>
                <td>{{typekoder[measurement.typekode]}}</td>

                <td>
                    <div class="flex col" v-if="props.showDataStats">

                        <span v-if="measurement.lastObservation == null || measurement.lastObservation == '0000-00-00T00:00:00.000Z'" class="red small flex">
                            <IconDownload :scale="0.8" /> <span>Ingen import</span>
                        </span>
                        <span v-else class="randers small flex">
                            <IconDownload :scale="0.8" /> <span>{{ DateFormatter.formatDate(measurement.lastObservation) }}</span>
                        </span>

                        <span v-if="measurement.lastExport == null || measurement.lastExport == '0000-00-00 00:00:00' || measurement.lastExport == '0000-00-00T00:00:00.000Z'" class="red small flex">
                            <IconUpload :scale="0.8" /> <span>Ingen export</span>
                        </span>
                        <span v-else class="green small flex">
                            <IconUpload :scale="0.8" /> <span>{{ DateFormatter.formatDate(measurement.lastExport) }}</span>
                        </span>
                        
                    </div>
                </td>


            </tr>

            <tr v-else class="nohover">
                <td :colspan="6">Der er ingen målepunkter tilknyttet måleren.</td>
            </tr>


            <tr v-if="editingMeasurementPoint" class="nohover">
                <td colspan="6">
                <EditMeasurementPoint
                    id="editMeasurementPoint"
                    :measurementPoint="measurementPointSelected"
                    :deviceUid="deviceUid"
                    @onSaveEdit="saveEdit()"
                    @onCancelEdit="cancelEdit()"
                />
                </td>
            </tr>

            <tr v-else class="nohover"> <!-- Add device row -->
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

    
    .deviceTypeTd
    {
        max-width: 1.5rem;
        padding-right:0rem;
    }
    .deviceTypeTd > span
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