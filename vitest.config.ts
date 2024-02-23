/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
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
