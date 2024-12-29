import { Route, Routes } from 'react-router'

import { ROUTES } from '@/client/constants'
import { ThemeProvider } from '@/client/context/theme'
import { Home } from '@/client/pages/Home'
import { Theme } from '@/shared'

type Props = {
  theme?: Theme
}

export function App({ theme }: Props) {
  return (
    <ThemeProvider defaultTheme={theme}>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}
