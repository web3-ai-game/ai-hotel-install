import mongoose from 'mongoose'
import { logger } from './logger'

const connectMongoDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-hotel'
    
    await mongoose.connect(mongoUri)
    
    logger.info('MongoDB connected successfully')
  } catch (error) {
    logger.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

export { connectMongoDB }
