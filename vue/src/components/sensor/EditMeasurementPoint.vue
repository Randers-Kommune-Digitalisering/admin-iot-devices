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
        <template #heading>Målepunkter</template>

        <span class="paragraph">
            Tabeller indsættes med almindeligt HTML, og kan laves dynamiske med Vue's <code>v-for</code>-tag. Tabeller kan også indsættes i kort hvortil de automatisk tilpasses.
        </span>
        
        <table>
            <thead>
                <tr>
                    <th class="capitalize">TH</th>
                    <th></th>
                </tr>
            </thead>
            <tr>
                <td><button @click="">Redigér</button></td>
            </tr>
        </table>
    </Content>
</template>