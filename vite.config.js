import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // This is the crucial line for GitHub Pages
  base: '/MyPortfolio/', 
  plugins: [react()],
})
