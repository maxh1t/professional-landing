import express from 'express'

import { PROD, APP_PORT } from './constants'
import { setupDev } from './dev'
import { setupProd } from './prod'

export async function createServer() {
  const app = express()

  if (PROD) {
    await setupProd(app)
  } else {
    await setupDev(app)
  }

  app.listen(APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${APP_PORT}`)
  })
}

createServer()
