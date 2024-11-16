import { Theme } from './constants'

export type ThemeContextState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}
