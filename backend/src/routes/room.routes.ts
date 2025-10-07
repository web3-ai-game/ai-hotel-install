import { Router } from 'express';
import {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} from '../controllers/room.controller';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/', getAllRooms);
router.get('/:id', getRoomById);
router.post('/', authenticate, authorize('ADMIN', 'MANAGER'), createRoom);
router.put('/:id', authenticate, authorize('ADMIN', 'MANAGER'), updateRoom);
router.delete('/:id', authenticate, authorize('ADMIN', 'MANAGER'), deleteRoom);

export default router;
