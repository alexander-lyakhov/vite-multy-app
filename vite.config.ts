import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@users': fileURLToPath(new URL('./src/apps/users', import.meta.url)),
      '@tm': fileURLToPath(new URL('./src/apps/tm', import.meta.url)),
    },
    extensions: ['*', '.js', '.ts', '.vue', '.json']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_colors.scss" as *;`,
      },
    },
  },
})
