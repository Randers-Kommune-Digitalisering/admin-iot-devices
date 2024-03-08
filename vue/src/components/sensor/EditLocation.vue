<script setup>
    import { ref } from 'vue'

    import Content from '@/components/Content.vue'

    const props = defineProps({
        quickAddMode: {
            type: Boolean,
            required: false,
            default: false
        },
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
    <template #heading>Lokation</template>

</Content>

</template>