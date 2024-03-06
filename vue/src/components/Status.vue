<script setup>
import { ref } from 'vue';
const statusExpress = ref(null);
const statusNodered = ref(null);

// Express status
fetch('/status')
    .then(response => response = response.json())
    .then(value => statusExpress.value = value.status == "running" ? "Running" : null)
    .then(value => console.log("Express status: \n" + value))

// Node-RED status (uses /api/ proxy defined in Vite config)
fetch('/api/status')
    .then(response => response = response.json())
    .then(value => statusNodered.value = value.success ? "Connected" : null)
    .then(value => console.log("Node-RED status: \n" + value))

</script>

<template>
    Herunder kan du se om din Node-RED backend kører, og hvorvidt du bruger Express server. Vær opmærksom på at Express serveren ikke kører hvis du bruger Vite i udviklingsmiljø.
    
    <div>
        <span>Node-RED</span>:
        <span v-if="statusNodered" class="green heavy">{{statusNodered}}</span>
        <span v-else="statusNodered" class="red heavy">Not connected</span>
    </div>

    <div>
        <span>Express</span>:
        <span v-if="statusExpress" class="green heavy">{{statusExpress}}</span>
        <span v-else="statusExpress" class="red heavy">Not running</span>
    </div>
</template>

<style scoped>
    div
    {
        margin-top: 1rem;
        padding-left: 1.5rem;
        border-left: 0.1rem solid var(--color-border);
    }
</style>
