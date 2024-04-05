<script setup>
    import { ref, watch  } from 'vue'
    
    import Content from '@/components/Content.vue'

    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'
    import enheder from '@/data/enheder.json'

    const props = defineProps({
        measurementPoint: {
            type: Object,
            required: true
        },
        
        deviceUid: {
            type: Number,
            required: false
        }
    })

    const measurementPoint = ref(props.measurementPoint)
    const dataDimensions = ref(null)
    const httpResponse = ref(null)

    // Watch when changing measurement point prop

    watch( () => props.measurementPoint, (current, previous) => {

        measurementPoint.value = current

        if(measurementPoint.value.deviceUid == -1)
            measurementPoint.value.deviceUid = props.deviceUid

        console.log("This runs")

        // Fetch data dimensions
        dataDimensions.value = fetchDimensions()
        
    })

    // Fetch data dimensions

    function fetchDimensions()
    {
        const data = ref(null)

        const deviceUid = measurementPoint.value.deviceUid == -1 ? props.deviceUid : measurementPoint.value.deviceUid

        fetch('/api/devices/' + props.deviceUid + '/dimensions', {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response = response.json())
        .then(value => data.value = value)

        return data
    }
    
    // Fetch immediately after loading 

    dataDimensions.value = fetchDimensions()

    // Set export unit to the same as newly selected input unit

    function selectUnit()
    {
        measurementPoint.value.enhed = measurementPoint.value.inputenhed
    }

    // Define emit for save and cancel

    const emit = defineEmits(['onSaveEdit', 'onCancelEdit'])

    const setEmit = (_emi) => {
        emit(_emi)
    }

    function cancelEdit()
    {
        setEmit('onCancelEdit')
    }
    function saveEdit()
    {
        console.log(measurementPoint.value)
        setEmit('onSaveEdit')
    }

</script>

<template>

     <!-- Device description -->
    <form @submit.prevent="saveEdit">
        <fieldset>

    <div class="card orange">
        <div class="header">
            {{measurementPoint.uid == -1 ? 'Nyt målepunkt' : 'Redigér målepunkt'}} <!-- - deviceUid: {{measurementPoint.deviceUid == -1 ? props.deviceUid : measurementPoint.deviceUid}} -->
        </div>

        <div class="card-body flexbox">

            
            <div>
                <label for="name" class="capitalize">

                    Navn

                </label>
                <input type="text" placeholder="F.eks. `El-import`" id="name" v-model="measurementPoint.name" required>
            </div>

            
            <div>
                <label for="propertyName" class="capitalize">

                    Nøgle

                </label>
                <input v-if="dataDimensions == null || (Array.isArray(dataDimensions.value) && dataDimensions.value.length == 0)" type="text" placeholder="..." id="propertyName" v-model="measurementPoint.propertyName" required>
                <select v-else name="propertyName" id="propertyName" v-model="measurementPoint.propertyName" required>
                    <option value="" disabled>Vælg fra liste ..</option>

                    <option v-for="property in dataDimensions.value" :value="property">{{ property }}</option>
                </select>
            </div>

            
            <div>
                <label for="energiart" class="capitalize">

                    Energiart

                </label>
                <select name="energiart" id="template" v-model="measurementPoint.energiartskode" required>
                    <option value="-1" disabled>Vælg fra liste ..</option>

                    <option v-for="(energiart, index) in energiarter" :value="index">{{ energiart }}</option>
                </select>

            </div>         

            <div>
                <label for="type" class="capitalize">

                    Type

                </label>
                <select name="type" id="template" v-model="measurementPoint.typekode" required>
                    <option value="-1" disabled>Vælg fra liste ..</option>

                    <option v-for="(type, index) in typekoder" :value="index">{{ type }}</option>
                </select>

            </div>

            <div>
                <label for="inputenhed" class="capitalize">

                    Enhed

                </label>
                <select name="inputenhed" id="template" v-model="measurementPoint.inputenhed" @change="selectUnit()" required>
                    <option value="" disabled>Vælg fra liste ..</option>

                    <option v-for="enhed in enheder" :value="enhed">{{ enhed }}</option>
                </select>

            </div>

            <div>
                <label for="enhed" class="capitalize">

                    Eksportenhed

                </label>
                <select name="enhed" id="template" v-model="measurementPoint.enhed" required>
                    <option value="" disabled>Vælg fra liste ..</option>

                    <option v-for="enhed in enheder" :value="enhed">{{ enhed }}</option>
                </select>

            </div>  


            <!-- Save / cancel -->

            <button @click="" class="blue">
                <span>
                    {{measurementPoint.uid == -1 ? 'Tilføj målepunkt' : 'Gem ændringer'}}
                </span>
            </button>

            <button type="button" @click="cancelEdit()" class="gray">
                <span>
                    Anullér
                </span>
            </button>

        </div>
    </div>

        </fieldset>
    </form>

</template>

<style scoped>
.card {
    width: 100%!important;
    
    animation: fadein 400ms;
}
.hidden
{
    max-height: 0rem;
    transform: scaleY(0) translateY(-60%);
    opacity: 0;
    overflow: hidden;
}

@keyframes fadein
{
  from {
    max-height: 0rem;
    transform: scaleY(0) translateY(-60%);
    opacity: 0;
    overflow: hidden; 
    }
  to { 
    max-height: 50rem;
    transform: scaleY(1) translateY(0%);
    opacity: 1;
  }
}

button ~ button {
    margin-left: 0rem;
}
button.gray
{
    background-color: var(--color-border);
}
button.gray:hover
{
    background-color: var(--color-border-dark);
}
</style>