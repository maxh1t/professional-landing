import { SSR } from '@/client/constants'
import { serverThemeStore, clientThemeStore } from '@/client/lib/stores'
import { Theme } from '@/shared'

export function resolveSystemTheme() {
  if (SSR) return Theme.Light
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light
}

export function updateTheme(theme: Theme) {
  if (SSR) return

  const resolvedTheme = theme === Theme.System ? resolveSystemTheme() : theme

  clientThemeStore.set(theme)
  serverThemeStore.set(resolvedTheme)

  window.document.documentElement.classList.toggle('dark', resolvedTheme === Theme.Dark)
}

export function getDefaultTheme(): Theme {
  if (SSR) return Theme.System

  const theme = (clientThemeStore.get() as Theme) || Theme.System

  updateTheme(theme)
  return theme
}
