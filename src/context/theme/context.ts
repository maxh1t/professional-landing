import { createContext, useContext } from 'react'

import { Theme } from './constants'
import { ThemeContextState } from './types'

const initialState: ThemeContextState = {
  theme: Theme.System,
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextState>(initialState)

export const useThemeContext = () => useContext(ThemeContext)
