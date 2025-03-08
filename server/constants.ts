export const NODE_ENV = process.env.NODE_ENV || 'development'
export const APP_PORT = process.env.APP_PORT || 3000

export const PROD = NODE_ENV === 'production'
export const HTML_KEY = `<!--app-html-->`
export const ABORT_DELAY = 5000
