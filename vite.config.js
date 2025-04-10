import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from "node:dns"

dns.setDefaultResultOrder('verbatim')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["4f81-185-139-138-27.ngrok-free.app"]
  }
})
