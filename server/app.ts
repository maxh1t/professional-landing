import express from 'express'

import { setupProd, setupDev } from './config'
import { PROD, SERVER_PORT } from './constants'

export async function createServer() {
  const app = express()

  if (PROD) {
    await setupProd(app)
  } else {
    await setupDev(app)
  }

  app.listen(SERVER_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${SERVER_PORT}`)
  })
}

createServer()
