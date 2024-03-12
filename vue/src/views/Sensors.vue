<script setup>
    import { ref } from 'vue'
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const sensors = ref(null)
    
    // Fetch regler
    fetch('/api/sensors/')
        .then(response => response = response.json())
        .then(value => sensors.value = value)
        //.then(value => console.log(value))

    const keyMap = {
        "Navn": "name"
    }

</script>

<template>

    <h2>Målere</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Registrerede målere</template>

        <span class="paragraph">
            Herunder kan de registrerede målere ses, rettes og slettes.
        </span>
        
        <table>
            <thead>
                <tr>
                    <th v-for="key in Object.keys(keyMap)" class="capitalize">{{key}}</th>
                    <th></th>
                </tr>
            </thead>
            <tr v-for="obj in konteringsregler">
                <td v-for="key in keyMap">{{ obj[key.id][key.key] }}</td>
                <td><router-link :to="'/retkonteringsregel/' + obj[ keyMap.id.id ][ keyMap.id.key ]"><button @click="">Rediger</button></router-link></td>
            </tr>
        </table>
    </Content>

</template>