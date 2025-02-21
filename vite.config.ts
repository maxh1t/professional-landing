import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

import { dependencies } from './package.json'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  ssr: {
    noExternal: mode === 'production' ? Object.keys(dependencies) : undefined,
  },
  resolve: {
    alias: {
      '@/shared': path.resolve(__dirname, './shared'),
      '@/server': path.resolve(__dirname, './server'),
      '@/client': path.resolve(__dirname, './src'),
    },
  },
}))
