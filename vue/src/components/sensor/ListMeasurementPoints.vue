<script setup>
    import { ref, watch } from 'vue'
    //import { useRouter } from 'vue-router'

    import * as dayjs from 'dayjs'

    //const router = useRouter()

    import Content from '@/components/Content.vue'
    import EditMeasurementPoint from '@/components/sensor/EditMeasurementPoint.vue'

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

    function selectMeasurementPoint(point)
    {
        if(measurementPointSelected.value == point)
        {
            measurementPointSelected.value = null
            editingMeasurementPoint.value = false
            return
        }
        else if(editingMeasurementPoint.value && point.uid != -1)
            return; // Don't swap if creating new measurement point
        
        console.log("Editing measurement point #" + point.uid)
        console.log(point)

        measurementPointSelected.value = point
        editingMeasurementPoint.value = true
    }

    // Add new

    function newMeasurementPoint()
    {
        //measurementPointSelected.value = {}
        //console.log(measurementPointSelected.value)
        measurementPointSelected.value = JSON.parse(JSON.stringify(measurementPointMetadata))

        // Update refs in object
        measurementPointSelected.value.devUid = props.deviceUid

        editingMeasurementPoint.value = true
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

            <tr v-if="measurementPoints != null && measurementPoints.length > 0" v-for="measurement in measurementPoints" @click="selectMeasurementPoint(measurement)" :class="(editingMeasurementPoint && measurementPointSelected.uid == -1) ? ' nohover' : ''">

                <td class="sensorTypeTd"> <!-- Measurement point status (if data is being imported and exported) -->
                    <span class="red">
                        <IconMeasurementPoint :scale="0.8" />
                    </span>
                </td>

                <td>{{measurement.name}}</td>
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
                <EditMeasurementPoint :measurementPoint="measurementPointSelected" :deviceUid="deviceUid" />
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
        background-color: var(--color-bg)
    }

</style>