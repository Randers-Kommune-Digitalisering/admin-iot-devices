import { fileURLToPath, URL } from 'node:url'
const path = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://router.vuejs.org/guide/essentials/navigation.html
// https://vueschool.io/lessons/the-scaffolded-codebase-vite-only

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/': {
        target: 'http://localhost:1880/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [
    vue(),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})