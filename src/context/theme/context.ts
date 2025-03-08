import { createContext, useContext } from 'react'

import { Theme } from '@/shared'

export type ThemeContextState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextState>({
  theme: Theme.System,
  setTheme: () => null,
})

export const useThemeContext = () => useContext(ThemeContext)
