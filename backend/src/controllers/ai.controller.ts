import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import { OpenAI } from 'openai';
import prisma from '../config/database';
import { logger } from '../config/logger';

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

export const chatWithAI = async (req: AuthRequest, res: Response) => {
  try {
    const { message, context } = req.body;
    const userId = req.user?.id;

    // Create AI prompt with hotel context
    const systemPrompt = `You are a helpful AI assistant for a hotel management system. 
    You can help with booking rooms, answering questions about hotel services, 
    making recommendations, and handling customer inquiries. 
    Be professional, friendly, and provide accurate information.`;

    const completion = await openai.chat.completions.create({
      model: process.env.AI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0]?.message?.content || 'No response';

    // Save chat history
    await prisma.chatHistory.create({
      data: {
        userId,
        message,
        response,
        context: context || {},
      },
    });

    res.json({
      success: true,
      data: {
        message: response,
        usage: completion.usage,
      },
    });
  } catch (error) {
    logger.error('AI chat error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process AI request',
    });
  }
};

export const getRecommendations = async (req: AuthRequest, res: Response) => {
  try {
    const { preferences, budget } = req.body;

    const rooms = await prisma.room.findMany({
      where: {
        status: 'AVAILABLE',
        ...(budget && { price: { lte: budget } }),
      },
    });

    const prompt = `Based on these preferences: ${JSON.stringify(preferences)}
    and budget: ${budget}, recommend the best rooms from this list: ${JSON.stringify(rooms)}
    Provide a brief explanation for each recommendation.`;

    const completion = await openai.chat.completions.create({
      model: process.env.AI_MODEL || 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a hotel room recommendation expert.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    const recommendations = completion.choices[0]?.message?.content;

    res.json({
      success: true,
      data: {
        recommendations,
        availableRooms: rooms,
      },
    });
  } catch (error) {
    logger.error('AI recommendations error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get recommendations',
    });
  }
};

export const getChatHistory = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    const history = await prisma.chatHistory.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });

    res.json({
      success: true,
      data: history,
    });
  } catch (error) {
    logger.error('Get chat history error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch chat history',
    });
  }
};
