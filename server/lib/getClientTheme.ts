import { parse } from 'cookie'
import { Request } from 'express'

import { CLIENT_THEME_COOKIE_KEY, Theme } from '@/shared'

export function getClientTheme(req: Request) {
  const cookies = parse(req.headers.cookie || '')

  return cookies?.[CLIENT_THEME_COOKIE_KEY] as Theme | undefined
}
