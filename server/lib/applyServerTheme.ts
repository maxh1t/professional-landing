import { parse } from 'cookie'
import { Request } from 'express'

import { SERVER_THEME_COOKIE_KEY, Theme } from '@/shared'

export function applyServerTheme(req: Request, html: string): string {
  const cookies = parse(req.headers.cookie || '')
  const theme = cookies?.[SERVER_THEME_COOKIE_KEY]

  if (theme === Theme.Dark) {
    return html.replace('<html lang="en">', `<html lang="en" class="dark">`)
  }

  return html
}
