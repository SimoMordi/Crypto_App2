import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/server': {
        target: "https://crypto-app-ln9d.onrender.com

",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, '')
      },
    }
  }
})
