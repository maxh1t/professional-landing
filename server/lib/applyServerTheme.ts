import { parse } from 'cookie'
import express from 'express'

type Args = {
  req: express.Request
  html: string
}

export function applyServerTheme({ req, html }: Args) {
  const cookies = parse(req.headers.cookie || '')
  const theme = cookies?.serverTheme

  if (theme === 'dark') {
    return html.replace('<html lang="en">', `<html lang="en" class="dark">`)
  }

  return html
}
