import { defineConfig, SSROptions } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

import { dependencies } from './package.json'

export default defineConfig(({ mode }) => {
  let ssr: SSROptions | undefined
  if (mode === 'production') {
    ssr = { noExternal: Object.keys(dependencies) }
  }

  return {
    ssr,
    plugins: [react(), tsconfigPaths()],
  }
})
