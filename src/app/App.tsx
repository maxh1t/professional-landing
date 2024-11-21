import { Theme, ThemeProvider } from '@/context/theme'
import { HomePage } from '@/pages/Home'

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
