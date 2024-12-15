import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { dependencies } from './package.json'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  ssr: {
    noExternal: mode === 'production' ? Object.keys(dependencies) : undefined,
  },
}))
