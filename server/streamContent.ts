import { Transform } from 'node:stream'

import { NextFunction, Request, Response } from 'express'

import { Render } from '@/shared'

import { ABORT_DELAY, HTML_KEY } from './constants'
import { applyServerTheme } from './lib/applyServerTheme'
import { getClientTheme } from './lib/getClientTheme'

export type StreamContentArgs = {
  render: Render
  html: string
  req: Request
  res: Response
  next: NextFunction
}

export async function streamContent({ render, html, res, req }: StreamContentArgs) {
  html = applyServerTheme(req, html)

  let renderFailed = false

  const { pipe, abort } = render({
    url: req.url,
    theme: getClientTheme(req),
    options: {
      onShellError() {
        res.status(500).set({ 'Content-Type': 'text/html' }).send('<pre>Something went wrong</pre>')
      },
      onShellReady() {
        res.status(renderFailed ? 500 : 200).set({ 'Content-Type': 'text/html' })

        const [htmlStart, htmlEnd] = html.split(HTML_KEY)
        res.write(htmlStart)

        const transformStream = new Transform({
          transform(chunk, encoding, callback) {
            res.write(chunk, encoding)
            callback()
          },
        })

        transformStream.on('finish', () => {
          res.end(htmlEnd)
        })

        pipe(transformStream)
      },
      onError(error) {
        renderFailed = true
        console.error((error as Error).stack)
      },
    },
  })

  setTimeout(abort, ABORT_DELAY)
}
