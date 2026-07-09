import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/FamilySite/',
  plugins: [react()],
  server: {
    // Allows the Dockerized Playwright MCP browser (which reaches the host via
    // this hostname) to load the dev server for visual QA.
    allowedHosts: ['host.docker.internal'],
  },
})
