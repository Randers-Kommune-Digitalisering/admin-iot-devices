<script setup>
    import Content from '@/components/Content.vue'
    import Status from '@/components/Status.vue'

    import IconOK from '@/components/icons/IconOK.vue'
    import IconRSS from '@/components/icons/IconRSS.vue'
</script>

<template>
    <h2>IOT Administrationspanel</h2>

    <Content>
        <template #icon>
            <IconRSS />
        </template>
        <template #heading>Status</template>
        
        <Status />
    </Content>

</template>