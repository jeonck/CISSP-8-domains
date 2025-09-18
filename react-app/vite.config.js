import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CISSP-8-domains/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})