import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { App } from '@/client/app'
import './index.css'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
