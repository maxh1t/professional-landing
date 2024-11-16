import { renderToString } from 'react-dom/server'

import { App } from '@/app'
import { Theme } from '@/context/theme'

type Args = {
  theme: Theme
}

export function render({ theme }: Args) {
  return renderToString(<App theme={theme} />)
}
