import Redis from 'ioredis';
import { logger } from './logger';

let redisClient: Redis;

export const connectRedis = async (): Promise<Redis> => {
  try {
    redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');
    
    redisClient.on('connect', () => {
      logger.info('✅ Redis connected successfully');
    });

    redisClient.on('error', (err) => {
      logger.error('❌ Redis connection error:', err);
    });

    return redisClient;
  } catch (error) {
    logger.error('Failed to connect to Redis:', error);
    throw error;
  }
};

export const getRedisClient = (): Redis => {
  if (!redisClient) {
    throw new Error('Redis client not initialized');
  }
  return redisClient;
};

export default redisClient;
