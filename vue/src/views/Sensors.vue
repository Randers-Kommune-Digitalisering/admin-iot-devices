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
        "id": {
            "id": 4,
            "key": "ruleId"
        },
        "navn": {
            "id": 0,
            "key": "value"
        },
        "nummer": {
            "id": 1,
            "key": "value"
        },
        "posteringstekst": {
            "id": 3,
            "key": "Posteringstekst"
        }
    }

</script>

<template>

    <h2>Konteringsregler</h2>
    
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Aktuelle konteringsregler</template>

        <span class="paragraph">
            Herunder kan de aktuelle konteringsregler ses, rettes og slettes. Vær opmærksom på at rettelser overskrives hvis der laves ændringer i <code>konteringsregler.csv</code>.
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