import api from './api';

export const aiService = {
  chat: async (message: string, context?: any) => {
    const response = await api.post('/ai/chat', { message, context });
    return response.data;
  },

  getRecommendations: async (preferences: any, budget?: number) => {
    const response = await api.post('/ai/recommendations', { preferences, budget });
    return response.data;
  },

  getChatHistory: async () => {
    const response = await api.get('/ai/history');
    return response.data;
  },
};
