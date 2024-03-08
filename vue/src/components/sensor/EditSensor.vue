<script setup>
    import { ref, watch  } from 'vue'

    import Content from '@/components/Content.vue'

    import sensorMetadata from '@/data/sensorMetadata.json'
    import energiarter from '@/data/energiarter.json'

    const props = defineProps({
        quickAddMode: {
            type: Boolean,
            required: false,
            default: false
        },
        id: {
            type: String,
            required: false
        }
    })

    var sensorList = ref([])

    // Initialize blank sensor

    newSensor()

    // Clean list when changing mode

    watch( () => props.quickAddMode, (current, previous) => {
        if(current !== previous)
            cleanSensorList();
    })


    // Helper functions

    function newSensor()
    {
        sensorList.value.push( JSON.parse(JSON.stringify (sensorMetadata)) )
    }

    function deleteSensor(id)
    {
        const firstPart = sensorList.value.slice(0, id)
        const lastPart = sensorList.value.slice(id+1)
        sensorList.value = firstPart.concat(lastPart)
    }

    function cleanSensorList()
    {
        sensorList.value = [sensorList.value[0]]
    }
</script>

<template>

<Content :id="id">
    <template #icon>
    </template>
    <template #heading>Måler beskrivelse</template>

    <form @submit.prevent="">
        <fieldset>

            <!-- DevEUI + AppKey list -->
            <div class="flexbox" v-for="(sensor, index) in sensorList">
                <div>
                    <label :for="'eui_' + index" class="capitalize">
                        <span class="uid" v-if="sensorList.length > 1">#{{index+1}}</span>

                        Enheds EUI (DevEUI)

                    </label>
                    <input type="text" placeholder="..." :id="'eui_' + index" v-model="sensor.appEui">
                </div>
                <div>
                    <label :for="'app_' + index" class="capitalize">

                        OTAA Application Key (AppKey)

                        <div @click="deleteSensor(index)" class="float-right tag tagbutton" v-if="sensorList.length > 1">Slet</div>
                    </label>
                    <input type="text" placeholder="..." :id="'app_' + index" v-model="sensor.devEui">
                </div>

            </div>
            <button @click="newSensor()" v-if="quickAddMode">Tilføj måler</button>

            <!-- Full sensor metadata -->
            <div v-if="!quickAddMode" class="flexbox">
                
                <div>
                    <label for="name_0" class="capitalize">

                        Målernavn

                    </label>
                    <input type="text" placeholder="..." id="name_0" v-model="sensorList[0].name">
                </div>

                
                <div>
                    <label for="energiart_0" class="capitalize">

                        Energiart

                    </label>
                    <select name="template" id="template" v-model="sensorList[0].energiart">
                        <option value="-1" disabled>Vælg fra liste ..</option>

                        <option v-for="(energiart, index) in energiarter" :value="index">{{ energiart }}</option>
                    </select>

                </div>

            </div>

        </fieldset>
    </form>

</Content>

</template>

<style scoped>
    .tagbutton
    {
        text-transform: uppercase;
        font-size: 0.7em;
    }
    .tagbutton:hover
    {
        cursor: pointer;
    }
    label .uid
    {
        font-weight: 600;
        font-size:0.9em!important;
    }
</style>