import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// Import af views til routing

import Start from '@/views/Start.vue'
import NewSensor from '@/views/NewSensor.vue'
import Templates from '@/views/Templates.vue'

// Opsætning af URL routing

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: "Start",
            component: Start
        },        
        {
            path: '/newsensor', 
            name: "Opret måler",
            component: NewSensor
        },
        {
            path: '/templates', 
            name: "Templates",
            component: Templates
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
