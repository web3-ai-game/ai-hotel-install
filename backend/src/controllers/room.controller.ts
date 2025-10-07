import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../config/database';
import { logger } from '../config/logger';

export const getAllRooms = async (req: AuthRequest, res: Response) => {
  try {
    const { type, status, minPrice, maxPrice } = req.query;

    const where: any = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice as string);
      if (maxPrice) where.price.lte = parseFloat(maxPrice as string);
    }

    const rooms = await prisma.room.findMany({ where });

    res.json({
      success: true,
      data: rooms,
    });
  } catch (error) {
    logger.error('Get rooms error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch rooms',
    });
  }
};

export const getRoomById = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const room = await prisma.room.findUnique({
      where: { id },
      include: {
        bookings: {
          where: {
            status: { in: ['CONFIRMED', 'CHECKED_IN'] },
          },
        },
      },
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        error: 'Room not found',
      });
    }

    res.json({
      success: true,
      data: room,
    });
  } catch (error) {
    logger.error('Get room error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch room',
    });
  }
};

export const createRoom = async (req: AuthRequest, res: Response) => {
  try {
    const {
      roomNumber,
      type,
      floor,
      capacity,
      price,
      description,
      amenities,
      images,
    } = req.body;

    const room = await prisma.room.create({
      data: {
        roomNumber,
        type,
        floor,
        capacity,
        price,
        description,
        amenities: amenities || [],
        images: images || [],
      },
    });

    res.status(201).json({
      success: true,
      data: room,
    });
  } catch (error) {
    logger.error('Create room error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create room',
    });
  }
};

export const updateRoom = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const room = await prisma.room.update({
      where: { id },
      data: updateData,
    });

    res.json({
      success: true,
      data: room,
    });
  } catch (error) {
    logger.error('Update room error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update room',
    });
  }
};

export const deleteRoom = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.room.delete({ where: { id } });

    res.json({
      success: true,
      message: 'Room deleted successfully',
    });
  } catch (error) {
    logger.error('Delete room error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete room',
    });
  }
};
