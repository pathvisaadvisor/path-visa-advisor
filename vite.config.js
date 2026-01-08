import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        countries: resolve(__dirname, 'countries.html'),
        clients: resolve(__dirname, 'clients.html'),
        contact: resolve(__dirname, 'contact.html'),
        thankyou: resolve(__dirname, 'thankyou.html'),
      },
    },
  },
})

