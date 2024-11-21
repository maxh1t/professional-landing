import fs from 'fs'
import path from 'path'

import compression from 'compression'
import express from 'express'
import serveStatic from 'serve-static'

import { HTML_KEY } from '../constants'
import { applyServerTheme } from '../lib/applyServerTheme'
import { getClientTheme } from '../lib/getClientTheme'

const PATH_CLIENT = './dist/client'
const PATH_CLIENT_HTML = '../client/index.html'
const PATH_ENTRY_SERVER = '../ssr/entry-server.js'

export async function setupProd(app: express.Application) {
  app.use(compression())
  app.use(serveStatic(PATH_CLIENT, { index: false }))

  app.get('*', async (req, res) => {
    const template = fs.readFileSync(path.resolve(__dirname, PATH_CLIENT_HTML), 'utf-8')

    const render = (await import(PATH_ENTRY_SERVER)).render
    const appHtml = await render({ theme: getClientTheme(req) })

    let html = template.replace(HTML_KEY, appHtml)
    html = applyServerTheme({ req, html })

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  })
}
