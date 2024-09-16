<template>
    <div>
        <h2>SQL Inject</h2>
        <TheWelcome />

        <textarea v-model="sqlQuery" rows="5" cols="50"></textarea>
        <button @click="submitSqlQuery">Submit</button>

        <div v-if="response">
            <h3>Response:</h3>
            <pre>{{ response }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const sqlQuery = ref('');
const response = ref('');

const submitSqlQuery = async () => {
    try {
        const res = await axios.post('/api/sql', sqlQuery.value, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        // Update the response
        response.value = res.data;
        console.log('SQL query submitted successfully');
    } catch (error) {
        console.error('Failed to submit SQL query:', error);
    }
};
</script>