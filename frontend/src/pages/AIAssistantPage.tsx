import { useState } from 'react';
import { aiService } from '../services/ai.service';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await aiService.chat(input);
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '2rem' }}>AI Assistant</h1>
      <div className="card" style={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', padding: '1rem', background: '#f9fafb', borderRadius: '0.375rem' }}>
          {messages.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '2rem' }}>
              <p>👋 Hi! I'm your AI assistant. How can I help you today?</p>
              <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
                Ask me about room availability, bookings, hotel services, or anything else!
              </p>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  background: msg.role === 'user' ? 'var(--primary-color)' : 'white',
                  color: msg.role === 'user' ? 'white' : 'var(--text-color)',
                  marginLeft: msg.role === 'user' ? '20%' : '0',
                  marginRight: msg.role === 'assistant' ? '20%' : '0',
                }}
              >
                <strong>{msg.role === 'user' ? 'You' : 'AI Assistant'}:</strong>
                <p style={{ marginTop: '0.25rem' }}>{msg.content}</p>
              </div>
            ))
          )}
          {loading && (
            <div style={{ textAlign: 'center', color: '#6b7280' }}>
              <p>AI is thinking...</p>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            className="input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            disabled={loading}
          />
          <button
            className="btn btn-primary"
            onClick={handleSend}
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPage;
