import { Router } from 'express';
import {
  chatWithAI,
  getRecommendations,
  getChatHistory,
} from '../controllers/ai.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/chat', authenticate, chatWithAI);
router.post('/recommendations', authenticate, getRecommendations);
router.get('/history', authenticate, getChatHistory);

export default router;
