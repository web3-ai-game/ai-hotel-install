import { Request, Response, NextFunction } from 'express'
import { logger } from '../config/logger'

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(`Error: ${err.message}`)
  logger.error(err.stack || '')

  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message,
  })
}
