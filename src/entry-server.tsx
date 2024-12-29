import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router'

import { App } from '@/client/app'
import { Render } from '@/shared'

export const render: Render = ({ url, theme, options }) => {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App theme={theme} />
    </StaticRouter>,
    options,
  )
}
