<script setup>
    import { ref, watch  } from 'vue'
    
    import Content from '@/components/Content.vue'

    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'

    const props = defineProps({
        uid: {
            type: Number,
            required: false
        },
        measurementPoint: {
            type: Object,
            required: true
        }
    })

    const measurementPoint = ref(props.measurementPoint)

</script>

<template>

     <!-- Sensor description -->
    
        <div class="flexbox" v-if="measurementPoint != null">
            
            <div>
                <label for="name_0" class="capitalize">

                    Navn

                </label>
                <input type="text" :placeholder="isTemplate ? 'F.eks. `Brunata Minomess vandmåler`' : 'F.eks. `El-måler Grønhøjskolen`'" id="name_0" v-model="measurementPoint.name" required>
            </div>

            
            <div>
                <label for="energiart_0" class="capitalize">

                    Energiart

                </label>
                <select name="template" id="template" v-model="measurementPoint.energiartskode" :disabled="lockSharedProperties" required>
                    <option value="-1" disabled>Vælg fra liste ..</option>

                    <option v-for="(energiart, index) in energiarter" :value="index">{{ energiart }}</option>
                </select>

            </div>         

            <div>
                <label for="type_0" class="capitalize">

                    Type

                </label>
                <select name="template" id="template" v-model="measurementPoint.typekode" required>
                    <option value="-1" disabled>Vælg fra liste ..</option>

                    <option v-for="(type, index) in typekoder" :value="index">{{ type }}</option>
                </select>

            </div>

        </div>    

</template>