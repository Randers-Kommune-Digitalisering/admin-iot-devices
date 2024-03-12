<script setup>
    import Content from '@/components/Content.vue'
    import Status from '@/components/Status.vue'

    import IconOK from '@/components/icons/IconOK.vue'
    import IconRSS from '@/components/icons/IconRSS.vue'

    const props = defineProps({
    dbResponse: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <Content>
        <template #icon>
            <IconOK />
        </template>
        <template #heading>Måler oprettet</template>
        
        {{JSON.stringify(dbResponse)}}
    </Content>
</template>