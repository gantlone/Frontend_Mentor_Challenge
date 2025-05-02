import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ← 確保有這個
    },
  },
  base: '/Frontend_Mentor_Challenge/'
})
