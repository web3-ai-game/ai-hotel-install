import { Router } from 'express';

const router = Router();

// Placeholder routes - implement controllers as needed
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Service routes' });
});

export default router;
