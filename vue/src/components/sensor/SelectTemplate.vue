<script setup>
    import { ref } from 'vue'

    import Content from '@/components/Content.vue'

    defineProps({
    id: {
        type: String,
        required: false
    }
    })

    function selectTemplate()
    {
        console.log("Selected template: " + selectedTemplate.value)
    }

    var selectedTemplate = ref("n/a")

</script>

<template>

<Content :id="id">
    <template #icon>
    </template>
    <template #heading>Vælg en skabelon</template>

    <select name="template" id="template" @change="selectTemplate()" v-model="selectedTemplate">
        <option value="n/a" disabled>Vælg fra liste ..</option>
        <option value="0">Gas Puls måler (Brunata)</option>
        <option value="1">El forbrug (EMU)</option>
    </select>

</Content>

</template>