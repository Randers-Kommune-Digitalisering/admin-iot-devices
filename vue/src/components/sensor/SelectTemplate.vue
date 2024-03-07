<script setup>
    import { ref } from 'vue'

    import Content from '@/components/Content.vue'

    defineProps({
    id: {
        type: String,
        required: false
    }
    })
</script>

<template>

<Content :id="id">
    <template #icon>
    </template>
    <template #heading>Vælg en skabelon</template>

    <select name="cars" id="cars">
        <option value="volvo" disabled>Vælg fra liste ..</option>
        <option value="volvo">Gas Puls måler (Brunata)</option>
        <option value="saab">El forbrug (EMU)</option>
    </select>

</Content>

</template>