import { renderToPipeableStream } from 'react-dom/server'

import { App } from '@/client/app'
import { Render } from '@/shared'

export const render: Render = ({ theme, options }) => {
  return renderToPipeableStream(<App theme={theme} />, options)
}
