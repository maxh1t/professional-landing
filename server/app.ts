import express from 'express'

import { PROD, SERVER_PORT } from './constants'
import { setupProd, setupDev } from './config'

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
