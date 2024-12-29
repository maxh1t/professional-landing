import Cookies from 'js-cookie'

import { SSR } from '@/client/constants'
import { CLIENT_THEME_COOKIE_KEY, SERVER_THEME_COOKIE_KEY } from '@/shared'

export const clientThemeStore = createCookieStore(CLIENT_THEME_COOKIE_KEY)
export const serverThemeStore = createCookieStore(SERVER_THEME_COOKIE_KEY)

function createCookieStore(key: string) {
  return {
    get: () => {
      if (SSR) return ''
      return Cookies.get(key) || ''
    },
    set: (value: string) => {
      if (SSR) return
      Cookies.set(key, value, { expires: 365, path: '/' })
    },
    remove: () => {
      if (SSR) return
      Cookies.remove(key, { path: '/' })
    },
  }
}
