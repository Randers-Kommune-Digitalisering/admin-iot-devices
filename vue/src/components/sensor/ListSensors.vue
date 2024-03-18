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
    import { useRouter } from 'vue-router'

    import * as dayjs from 'dayjs'

    import Content from '@/components/Content.vue'

    const router = useRouter()

    import IconUniqueSensor from '@/components/icons/IconEditItem.vue'
    import IconTemplateSensor from '@/components/icons/IconDuplicateItem.vue'
    import IconNewItem from '@/components/icons/IconNewItem.vue'
    import IconUpload from '@/components/icons/IconUpload.vue'
    import IconDownload from '@/components/icons/IconDownload.vue'
    
    import energiarter from '@/data/energiarter.json'

    const props = defineProps({
        sensors: {
            type: Array,
            required: false
        },
        filter: {
            type: String,
            required: false,
            default: filters.NoFilter
        },
        allowClick: {
            type: Boolean,
            required: false,
            default: true
        },
        header: {
            type: String,
            required: false
        }
    })

    const sensors = ref(props.sensors)

    // Watch when changing props

    watch( () => props.sensors, (current, previous) => {

        sensors.value = current
        console.log("New sensor-list retrieved:")
        console.log(current)

    })

    watch( () => props.filter, (current, previous) => {
        
        console.log("New filter set:")
        console.log(current)
    })

    // Filter function

    function filterSensors(filter)
    {
        if(filter == filter.Inactive)
            sensors.value = sensors.value.filter(item => item.maalepunktCount > 0)
    }

    // Click

    function clickSensor(uid)
    {
        router.push('/sensors/' + uid)
    }

</script>

<template>
    
    <Content>
        <template #icon>
        </template>
        <template #heading>{{header}}</template>

        <span class="paragraph">
            Herunder kan de registrerede målere ses, rettes og slettes.
        </span>
        
        <table>
            <thead>
                <tr class="nohover">
                    <th></th>
                    <th>Målernavn</th>
                    <th>Energiart</th>
                    <th>Seneste data</th>
                    <th>Målepunkter</th>
                    <!--th></th-->
                </tr>
            </thead>

            <tr v-if="sensors != null && sensors.length > 0" v-for="sensor in sensors" @click="clickSensor(sensor.uid)" :class="!allowClick ? 'nohover' : ''">

                <td class="sensorTypeTd"> <!-- Sensor type (if based on template or not) -->
                    <span :class="sensor.isTemplate ? 'orange' : 'randers'" v-if="sensor.defaultValuesTemplateUid == -1">
                        <IconUniqueSensor :scale="0.8" />
                    </span>
                    <span class="blue" v-else>
                        <IconTemplateSensor :scale="0.8" />
                    </span>
                </td>

                <td>
                    <div class="flex col">
                        <span>{{sensor.name}}</span>
                        <span v-if="sensor.defaultValuesTemplateUid != -1" class="tiny blue">Baseret på <span style="text-decoration: underline">{{sensor.templateName}}</span></span>
                        <span v-if="sensor.isTemplate" class="tiny orange">Markeret som skabelon</span>
                    </div>
                </td>
                <td>{{energiarter[sensor.energiartskode ?? sensor.energiart]}}</td>

                <td>
                    <div class="flex col">

                        <span v-if="sensor.lastObservation == null || sensor.lastObservation == '0000-00-00 00:00:00'" class="red small flex">
                            <IconDownload :scale="0.8" /> <span>Ingen import</span>
                        </span>
                        <span v-else class="randers small flex">
                            <IconDownload :scale="0.8" /> <span>{{ dayjs(sensor.lastObservation).format("DD/MM-YYYY") }}</span>
                        </span>

                        <span class="red small flex">
                            <IconUpload :scale="0.8" /> <span>Ingen export</span>
                        </span>
                        <!--span :class="true ? 'red' : 'blue'">{{true ? 'Ingen data' : 'X minutter siden'}}</span-->
                    </div>
                </td>

                <td>
                    {{0}}
                </td>

            </tr>

            <tr v-else class="nohover">
                <td :colspan="6">Der er ingen målere at vise.</td>
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