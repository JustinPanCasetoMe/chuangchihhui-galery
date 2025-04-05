import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'/chuangchihhui.com/'
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'], // Split React and ReactDOM into a separate chunk
          utils: ['./src/utils.js'], // Example: Split utility functions into a chunk
        },
      },
    },
  },
})
