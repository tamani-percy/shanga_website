import {fileURLToPath, URL} from 'node:url'
import autoprefixer from 'autoprefixer'
import path from 'node:path'
import tailwind from 'tailwindcss'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    build: {
        minify: false
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('src', import.meta.url))
        }
    }
})
