import fs from 'fs'
import path from 'path'

import express from 'express'
import serveStatic from 'serve-static'

import { HTML_KEY } from '../constants'

const PATH_CLIENT = './dist/client'
const PATH_CLIENT_HTML = '../client/index.html'
const PATH_ENTRY_SERVER = '../ssr/entry-server.js'

export async function setupProd(app: express.Application) {
  app.use(serveStatic(PATH_CLIENT, { index: false }))

  app.get('*', async (_, res) => {
    const template = fs.readFileSync(path.resolve(__dirname, PATH_CLIENT_HTML), 'utf-8')
    const render = (await import(PATH_ENTRY_SERVER)).render
    const appHtml = await render()
    const html = template.replace(HTML_KEY, appHtml)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  })
}
