import path from 'path'
import fs from 'fs'

import express from 'express'

import { HTML_KEY } from '../constants'

const PATH_ENTRY_SERVER = '/src/entry-server.tsx'

export async function setupDev(app: express.Application) {
  const vite = await (
    await import('vite')
  ).createServer({
    root: process.cwd(),
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.get('*', async (req, res, next) => {
    try {
      let template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8')
      template = await vite.transformIndexHtml(req.originalUrl, template)

      const { render } = await vite.ssrLoadModule(PATH_ENTRY_SERVER)
      const appHtml = await render()
      const html = template.replace(HTML_KEY, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e as Error)
      next(e)
      console.error(e)
    }
  })
}
