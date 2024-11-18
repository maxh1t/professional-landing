import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

import { dependencies } from './package.json'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    ssr: {
      noExternal: isProd ? Object.keys(dependencies) : undefined,
    },
    plugins: [react(), tsconfigPaths()],
    define: {
      'process.env.NODE_ENV': JSON.stringify(isProd ? 'production' : 'development'),
    },
  }
})
