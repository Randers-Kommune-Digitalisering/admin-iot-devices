<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    import Content from '@/components/Content.vue'
    import IconTable from '@/components/icons/IconTable.vue'

    const route = useRoute()


    import EditSensor from '@/components/sensor/EditSensor.vue'


    const sensor = ref(null)

    // Fetch sensors

    fetch('/api/devices/get/' + route.params.uid)
        .then(response => response = response.json())
        .then(value => sensor.value = value)
        //.then(value => console.log(value))


</script>

<template>

    <h2>Måler</h2>

    <Content>
        
        <template #icon>
            <IconOK />
        </template>
        <template #heading>
            Målepunkter
        </template>

        Kommer ...

    </Content>

    <EditSensor :sensor="sensor" :lockEui="true" />

</template>