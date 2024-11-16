import { createContext, useContext } from 'react'

import { ThemeContextState } from './types'
import { Theme } from './constants'

const initialState: ThemeContextState = {
  theme: Theme.System,
  setTheme: () => null,
}

export const ThemeContext = createContext<ThemeContextState>(initialState)

export const useThemeContext = () => useContext(ThemeContext)
