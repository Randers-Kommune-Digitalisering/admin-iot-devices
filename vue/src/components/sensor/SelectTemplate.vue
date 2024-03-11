<script setup>
    import { ref } from 'vue'

    import Content from '@/components/Content.vue'
    import GetTemplate from '@/components/connector/GetTemplate.vue'

    defineProps({
    id: {
        type: String,
        required: false
    }
    })

    // Retrieve templates

    const templates = GetTemplate.getTemplates()


    // Notify when selecting a template

    function selectTemplate()
    {
        GetTemplate.getTemplate(selectedTemplate.value)
        .then(response => setEmit(response[0]))
    }

    var selectedTemplate = ref("n/a")

    
    const emit = defineEmits(['onSelectTemplate'])
 
    const setEmit = (template) => {
        emit('onSelectTemplate', template)
    }

</script>

<template>

<Content :id="id">
    <template #icon>
    </template>
    <template #heading>Vælg en skabelon</template>

    <select name="template" id="template" @change="selectTemplate()" v-model="selectedTemplate" style="margin-bottom: 0.8rem">
        <option value="n/a" disabled>Vælg fra liste ..</option>
        <option v-for="template in templates" :value="template.uid">{{template.name}}</option>
    </select>

</Content>

</template>