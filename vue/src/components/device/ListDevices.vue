<!--script>

    const filters = {
        Inactive: "inactive",
        ActiveNoMeasurementPoints: "activeNoMeasurementPoints",
        ActiveWithMeasurementPoints: "activeWithMeasurementPoints",
        NoFilter: "noFilter"
    }

    export default { filters }

</script-->
<script setup>
    import { ref, watch } from 'vue'
    import { useRouter } from 'vue-router'

    import Content from '@/components/Content.vue'
    import DecodeHtml from '@/components/utility/DecodeHtml.vue'
    import DateFormatter from '@/components/utility/DateFormatter.vue'

    import IconUniqueDevice from '@/components/icons/IconEditItem.vue'
    import IconTemplateDevice from '@/components/icons/IconDuplicateItem.vue'
    import IconUpload from '@/components/icons/IconUpload.vue'
    import IconDownload from '@/components/icons/IconDownload.vue'
    
    import energiarter from '@/data/energiarter.json'

    const router = useRouter()

    const props = defineProps({
        devices: {
            type: Array,
            required: false
        },
        filter: {
            type: String,
            required: false,
            //default: filters.NoFilter
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

    const devices = ref(props.devices)

    // Watch when changing props

    watch( () => props.devices, (current, previous) => {

        devices.value = current
        //console.log("New device-list retrieved:")
        //console.log(current)

    })

    /*
    watch( () => props.filter, (current, previous) => {
        
        //console.log("New filter set:")
        //console.log(current)
    })

    // Filter function

    function filterDevices(filter)
    {
        if(filter == filter.Inactive)
            devices.value = devices.value.filter(item => item.maalepunktCount > 0)
    }*/

    // Click

    function clickDevice(uid)
    {
        router.push('/devices/' + uid)
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
                    <th>Målepunkter</th>
                    <th>Seneste data</th>
                    <!--th></th-->
                </tr>
            </thead>

            <tr v-if="devices != null && devices.length > 0" v-for="device in devices" @click="clickDevice(device.uid)" :class="!allowClick ? 'nohover' : ''">

                <td class="deviceTypeTd"> <!-- Device type (if based on template or not) -->
                    <span :class="device.isTemplate ? 'orange' : 'randers'" v-if="device.templateUid == -1">
                        <IconUniqueDevice :scale="0.8" />
                    </span>
                    <span class="blue" v-else>
                        <IconTemplateDevice :scale="0.8" />
                    </span>
                </td>

                <td>
                    <div class="flex col">
                        <span>{{DecodeHtml.decode(device.name)}}</span>
                        <span v-if="device.templateUid != -1" class="tiny blue">Baseret på {{DecodeHtml.decode(device.templateName) ?? 'skabelon'}}</span>
                        <span v-if="device.isTemplate" class="tiny orange">Skabelon</span>
                    </div>
                </td>
                <td>{{energiarter[device.energiartskode ?? device.energiart]}}</td>

                <td>
                    {{device.maalepunktCount}}
                </td>

                <td>
                    <div class="flex col" v-if="!device.isTemplate">

                        <span v-if="device.lastObservation == null || device.lastObservation == '0000-00-00 00:00:00'" class="red small flex">
                            <IconDownload :scale="0.8" /> <span>Ingen import</span>
                        </span>
                        <span v-else class="randers small flex">
                            <IconDownload :scale="0.8" /> <span>{{ DateFormatter.formatDate(device.lastObservation) }}</span>
                        </span>

                        <span v-if="device.lastExport == null || device.lastExport == '0000-00-00 00:00:00'" class="red small flex">
                            <IconUpload :scale="0.8" /> <span>Ingen export</span>
                        </span>
                        <span v-else class="green small flex">
                            <IconUpload :scale="0.8" /> <span>{{ DateFormatter.formatDate(device.lastExport) }}</span>
                        </span>
                    </div>
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
        background-color: var(--color-bg)
    }

</style>