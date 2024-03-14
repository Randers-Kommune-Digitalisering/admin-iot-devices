<script>

    const filters = {
        Inactive: "inactive",
        ActiveNoMeasurementPoints: "activeNoMeasurementPoints",
        ActiveWithMeasurementPoints: "activeWithMeasurementPoints",
        NoFilter: "noFilter"
    }

    export default { filters }

</script>

<script setup>
    import { ref, watch } from 'vue'
    //import { useRouter } from 'vue-router'

    import * as dayjs from 'dayjs'

    //const router = useRouter()

    import IconUniqueSensor from '@/components/icons/IconEditItem.vue'
    import IconTemplateSensor from '@/components/icons/IconDuplicateItem.vue'
    import IconEdit from '@/components/icons/IconEditSimple.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconUpload from '@/components/icons/IconUpload.vue'
    import IconDownload from '@/components/icons/IconDownload.vue'
    
    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'

    const props = defineProps({
        measurementPoints: {
            type: Array,
            required: false
        }
    })

    const measurementPoints = ref(null)

    // Watch when changing props

    watch( () => props.measurementPoints, (current, previous) => {

        measurementPoints.value = current
        console.log("New measurementPoints-list retrieved:")
        console.log(current)

    })


</script>

<template>
    
    <Content>
        <template #icon>
        </template>
        <template #heading>{{header}}</template>

        <span class="paragraph">
            Herunder kan målepunkter for måleren ses, rettes og slettes. Målepunkter eksporteres automatisk til EnergyKey.
        </span>
        
        <table>
            <thead>
                <tr class="nohover">
                    <th>Navn</th>
                    <th>Enhed</th>
                    <th>Energiart</th>
                    <th>Type</th>
                    <th>Seneste data</th>
                    <th></th>
                </tr>
            </thead>

            <tr v-if="sensors != null && sensors.length > 0" v-for="measurement in measurementPoints" @click="clickSensor(sensor.uid)" :class="!allowClick ? 'nohover' : ''">

                <td>{{measurement.name}}</td>
                <td>{{measurement.unit}}</td>

                <td>{{energiarter[measurement.energiartskode]}}</td>
                <td>{{typekoder[measurement.typekode]}}</td>

                <td>
                    <div class="flex col">

                        <span v-if="measurement.lastObservation == '0000-00-00 00:00:00'" class="red small flex">
                            <IconDownload scale="0.8" /> <span>Ingen import</span>
                        </span>
                        <span v-else class="randers small flex">
                            <IconDownload scale="0.8" /> <span>{{ dayjs(sensor.lastObservation).format("DD/MM-YYYY") }}</span>
                        </span>

                        <span class="red small flex">
                            <IconUpload scale="0.8" /> <span>Ingen export</span>
                        </span>
                        
                    </div>
                </td>

                <td>
                    
                </td>

                <!--td>
                    <div class="flex">
                        <span class="fullheight">
                            {{0}}
                        </span>
                        <router-link v-if="showEditButton" :to="'/editsensor/'">
                            <button @click="" class="rowbutton ext blue">
                                <IconNewItem />
                                <span>
                                    Tilføj
                                </span>
                            </button>
                        </router-link>
                    </div>
                </td-->

                <td>
                    <router-link v-if="showEditButton" :to="'/sensors/' + sensor.uid">
                        <button @click="" class="rowbutton wide">
                            <IconEdit />
                            <span>
                                Redigér
                            </span>
                        </button>
                    </router-link>
                </td>

            </tr>

            <tr v-else class="nohover">
                <td :colspan="6">Der er ingen målepunkter tilknyttet måleren.</td>
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
    .rowbutton 
    {
        width: 4rem;
        height: 4.5rem;
        padding: 0.5rem;
        margin-bottom: 0rem;
        position:relative;
    }
    .rowbutton.wide
    {
        width: 5rem;
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
            bottom: 0.5rem;
            font-size: 0.6em;
        }
        .rowbutton svg
        {
            position:absolute;
            left: calc(50% - 10px);
            bottom: calc(50% - 4px);
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