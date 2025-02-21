import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server'

import { Theme } from './constants'

export type RenderArgs = {
  url: string
  theme?: Theme
  options?: RenderToPipeableStreamOptions
}

export type Render = (args: RenderArgs) => PipeableStream
