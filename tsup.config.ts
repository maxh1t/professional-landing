import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['server'],
  outDir: 'dist/server',
  target: 'node20',
  format: ['cjs'],
  clean: true,
  minify: true,
  external: ['lightningcss', 'esbuild', 'vite'],
  noExternal: ['express', 'serve-static'],
})
