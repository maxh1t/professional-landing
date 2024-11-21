import { parse } from 'cookie'
import express from 'express'

export function getClientTheme(req: express.Request) {
  const cookies = parse(req.headers.cookie || '')
  return cookies?.clientTheme
}
