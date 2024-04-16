import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import * as dayjs from 'dayjs'

// Import af views til routing

import Start from '@/views/Start.vue'
import NewDevice from '@/views/NewDevice.vue'
import Devices from '@/views/Devices.vue'
import Device from '@/views/Device.vue'
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
            path: '/newdevice', 
            name: "Ny måler",
            component: NewDevice
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
            name: "Templates",
            component: Templates
        }
    ]
})

const app = createApp(App)
            .use(router)
            .mount('#app')

app.component('dayjs', dayjs)