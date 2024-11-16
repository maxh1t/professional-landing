import Cookies from 'js-cookie'

import { CLIENT_THEME_COOKIE_KEY, SSR, SERVER_THEME_COOKIE_KEY } from '@/constants'

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
