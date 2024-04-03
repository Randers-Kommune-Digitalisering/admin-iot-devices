<script setup>
    import { ref } from 'vue'
    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    import ListDevices from '@/components/device/ListDevices.vue'


    const devices = ref(null)

    // Fetch devices

    fetch('/api/devices')
        .then(response => response = response.json())
        .then(value => devices.value = value)
        //.then(value => console.log(value))


</script>

<template>

    <h2>Målere</h2>

    <ListDevices :devices="devices" />

</template>