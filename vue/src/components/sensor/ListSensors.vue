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

    import IconUniqueSensor from '@/components/icons/IconEditItem.vue'
    import IconTemplateSensor from '@/components/icons/IconDuplicateItem.vue'
    
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
        showEditButton: {
            type: Boolean,
            required: false,
            default: true
        },
        header: {
            type: String,
            required: false,
            default: "Registrerede målere"
        }
    })

    const sensors = ref(null)

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
            return
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
                <tr>
                    <th></th>
                    <th>Målernavn</th>
                    <th>Energiart</th>
                    <th>Seneste data</th>
                    <th>Målepunkter</th>
                    <th v-if="showEditButton"></th>
                </tr>
            </thead>
            <tr v-if="sensors != null" v-for="sensor in sensors">
                <td style="max-width: 2rem">
                    <span class="randers" v-if="sensor.defaultValuesTemplateUid == -1">
                        <IconUniqueSensor scale="0.8" />
                    </span>
                    <span class="blue" v-else>
                        <IconTemplateSensor scale="0.8" />
                    </span>
                </td>
                <td>{{sensor.name}}</td>
                <td>{{energiarter[sensor.energiartskode]}}</td>
                <td><span :class="true ? 'red' : 'blue'">{{true ? 'Ingen data' : 'X minutter siden'}}</span></td>
                <td>{{0}}</td>
                <td v-if="showEditButton"><router-link :to="'/editsensor/'"><button @click="">Redigér</button></router-link></td>
            </tr>
            <tr v-else>
                <td :columnspan="showEditButton ? 6 : 5">Der er ingen målere at vise</td>
            </tr>
        </table>
    </Content>

</template>