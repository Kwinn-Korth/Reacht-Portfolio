import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

 export default defineConfig({
    plugins: [react()],
    serer: {
        open: true,
        port: 3000
     },
     base: './',
     build: {
        assetsInlineLimit: 0,
     }
    });