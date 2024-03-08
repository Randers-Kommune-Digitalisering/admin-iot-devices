<script setup>
    import { ref } from 'vue'

    import Content from '@/components/Content.vue'

    defineProps({
        quickAdd: {
            type: Boolean,
            required: false,
            default: false
        },
        id: {
            type: String,
            required: false
        }
    })

    const sensorMetadata = {
        appEui: "",
        devEui: ""
    }

    var sensorList = ref([])

    // Initialize blank sensor

    newSensor()

    // Helper functions

    function newSensor()
    {
        sensorList.value.push( JSON.parse(JSON.stringify (sensorMetadata)) )
    }

    function deleteSensor(id)
    {
        const firstPart = sensorList.value.slice(0, id)
        const lastPart = sensorList.value.slice(id+1)
        sensorList.value = firstPart.concat(lastPart);
    }

</script>

<template>

<Content :id="id">
    <template #icon>
    </template>
    <template #heading>Måler beskrivelse</template>

    <form @submit.prevent="">
        <fieldset>

            <div class="flexbox" v-for="(sensor, index) in sensorList">

                <div>
                    <label for="key" class="capitalize">
                        <span class="uid" v-if="sensorList.length > 1">#{{index+1}}</span>

                        Enheds EUI (DevEUI)

                    </label>
                    <input type="text" placeholder="..." id="key" v-model="sensor.appEui">
                </div>
                
                <div>
                    <label for="key" class="capitalize">

                        OTAA Application Key (AppKey)

                        <div class="float-right tag tagbutton" v-if="sensorList.length > 1"><a @click="deleteSensor(index)">Slet</a></div>
                    </label>
                    <input type="text" placeholder="..." id="key" v-model="sensor.devEui">
                </div>

            </div>

            <!--input type="submit" value="Tilføj"-->
            <button @click="newSensor()">Tilføj måler</button>
        </fieldset>
    </form>

</Content>

</template>

<style scoped>
    .tagbutton
    {
        text-transform: uppercase;
        font-size: 0.8em;
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