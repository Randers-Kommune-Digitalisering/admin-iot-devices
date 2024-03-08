<script setup>
    import { ref, watch  } from 'vue'
    
    import Content from '@/components/Content.vue'

    import energiarter from '@/data/energiarter.json'
    import typekoder from '@/data/typekoder.json'

    


</script>

<template>
    <!-- Table -->
    <Content>
        <template #icon>
            <IconTable />
        </template>
        <template #heading>Dynamisk tabel</template>

        <span class="paragraph">
            Tabeller indsættes med almindeligt HTML, og kan laves dynamiske med Vue's <code>v-for</code>-tag. Tabeller kan også indsættes i kort hvortil de automatisk tilpasses.
        </span>
        
        <table>
            <thead>
                <tr>
                    <th v-for="key in Object.keys(sampleData[0])" class="capitalize">{{key}}</th>
                    <th></th>
                </tr>
            </thead>
            <tr v-for="obj in sampleData">
                <td v-for="key in Object.keys(sampleData[0])">{{obj[key]}}</td>
                <td><button @click="clickItem(obj)">Se mere</button></td>
            </tr>
        </table>
    </Content>
</template>