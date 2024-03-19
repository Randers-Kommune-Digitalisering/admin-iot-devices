<script setup>
    import { ref, watch  } from 'vue'
    
    import Content from '@/components/Content.vue'

    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'

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
    const httpResponse = ref(null)

    // Watch when changing props

    watch( () => props.measurementPoint, (current, previous) => {

        measurementPoint.value = current

        if(measurementPoint.valuedeviceUid == -1)
            measurementPoint.valuedeviceUid = props.deviceUid

        console.log("New measurementPoint retrieved:")
        console.log(measurementPoint.value)

    })

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

     <!-- Sensor description -->
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
                <label for="valuekey" class="capitalize">

                    Nøgle

                </label>
                <input type="text" placeholder="..." id="valuekey" v-model="measurementPoint.valuekey" required>
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

            
            <button @click="" class="blue">
                <IconNewItem />
                <span>
                    {{measurementPoint.uid == -1 ? 'Tilføj målepunkt' : 'Gem ændringer'}}
                </span>
            </button>

            <button type="button" @click="cancelEdit()" class="gray">
                <IconNewItem />
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
    margin-bottom: 2rem;
    
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
    overflow: auto; 
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