import { ThemeProvider } from '@/client/context/theme'
import { Home } from '@/client/pages/Home'
import { Theme } from '@/shared'

type Props = {
  theme?: Theme
}

export function App({ theme }: Props) {
  return (
    <ThemeProvider defaultTheme={theme}>
      <Home />
    </ThemeProvider>
  )
}
