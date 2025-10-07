import { Request, Response } from 'express'

export const healthController = {
  check: async (req: Request, res: Response) => {
    try {
      res.json({
        success: true,
        message: 'Backend is healthy and running!',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
      })
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Health check failed',
      })
    }
  },
}
