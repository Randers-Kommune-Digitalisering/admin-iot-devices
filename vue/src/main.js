import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// Import af views til routing

import Start from '@/views/Start.vue'
import Devices from '@/views/Devices.vue'
import Device from '@/views/Device.vue'
import Templates from '@/views/Templates.vue'
import SQL from '@/views/Sql.vue'

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
            path: '/devices', 
            name: "Målere",
            component: Devices
        },
        {
            path: '/devices/:uid', 
            name: "Måler",
            component: Device
        },
        {
            path: '/templates', 
            name: "Skabeloner",
            component: Templates
        },
        {
            path: '/sql', 
            name: "SQL",
            component: SQL
        }
    ]
})
createApp(App)
    .use(router)
    .mount('#app')