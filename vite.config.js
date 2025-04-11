import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from "node:dns"

dns.setDefaultResultOrder('verbatim')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["special-presently-bison.ngrok-free.app"]
  }
})


// ngrok http --url=special-presently-bison.ngrok-free.app 5173