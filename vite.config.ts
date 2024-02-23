import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve('./src/components'),
      '@assets': resolve('./src/assets'),
      '@styles': resolve('./src/styles'),
      '@utils': resolve('./src/utils'),
      '@features': resolve('./src/features'),
      '@contexts': resolve('./src/contexts'),
    },
  },
})
