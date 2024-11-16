import { HomePage } from '@/pages/Home'
import { Theme, ThemeProvider } from '@/context/theme'

type Props = {
  theme?: Theme
}

export function App({ theme }: Props) {
  return (
    <ThemeProvider initialTheme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}
