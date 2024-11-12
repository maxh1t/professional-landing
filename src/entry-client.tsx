import { hydrateRoot } from 'react-dom/client'

import { App } from '@/app'

import './index.css'

hydrateRoot(document.getElementById('app')!, <App />)
