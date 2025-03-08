import { PropsWithChildren, useState } from 'react'

import { Theme } from '@/shared'

import { ThemeContext } from './context'
import { getDefaultTheme, updateTheme } from './lib'

type Props = PropsWithChildren & {
  defaultTheme?: Theme
}

export function ThemeProvider({ children, defaultTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(defaultTheme || getDefaultTheme())

  const handleSetTheme = (theme: Theme) => {
    setTheme(theme)
    updateTheme(theme)
  }

  return <ThemeContext value={{ theme, setTheme: handleSetTheme }}>{children}</ThemeContext>
}
