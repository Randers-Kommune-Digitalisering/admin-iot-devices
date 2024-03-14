<script setup>
    import { ref, watch } from 'vue'
    //import { useRouter } from 'vue-router'

    import * as dayjs from 'dayjs'

    //const router = useRouter()
    
    import Content from '@/components/Content.vue'

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
        console.log(measurementPoints.value)

    })




</script>

<template>
    
    <Content>
        <template #icon>
        </template>
        <template #heading>Målepunkter</template>

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

            <tr v-if="measurementPoints != null && measurementPoints.length > 0" v-for="measurement in measurementPoints">

                <td>{{measurement.name}}</td>
                <td>{{measurement.enhed}}</td>

                <td>{{energiarter[measurement.energiartskode]}}</td>
                <td>{{typekoder[measurement.typekode]}}</td>

                <td>
                    <div class="flex col">

                        <span v-if="measurement.lastObservation == null" class="red small flex">
                            <IconDownload scale="0.8" /> <span>Ingen import</span>
                        </span>
                        <span v-else class="randers small flex">
                            <IconDownload scale="0.8" /> <span>{{ dayjs(measurement.lastObservation).format("DD/MM-YYYY") }}</span>
                        </span>

                        <span class="red small flex">
                            <IconUpload scale="0.8" /> <span>Ingen export</span>
                        </span>
                        
                    </div>
                </td>

                <td>
                    <router-link :to="'/sensors/' + measurement.uid">
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


            <tr> <!-- Add sensor row -->
                <td colspan="5"></td>
                <td>
                    <router-link :to="'/editsensor/'">
                        <button @click="" class="rowbutton blue wide">
                            <IconNewItem />
                            <span>
                                Tilføj
                            </span>
                        </button>
                    </router-link>
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

</style>