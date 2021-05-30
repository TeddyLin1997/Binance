import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      'style': path.resolve(__dirname, '/src/assets/style'),
      'images': path.resolve(__dirname, '/src/assets/images'),
      'action': path.resolve(__dirname, '/src/store/slice')
    },
  },
  build: {
    outDir: '../backend/public',
  }
})
