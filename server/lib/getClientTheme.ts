import express from 'express'
import { parse } from 'cookie'

export function getClientTheme(req: express.Request) {
  const cookies = parse(req.headers.cookie || '')
  return cookies?.clientTheme
}
