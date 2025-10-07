import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
          Welcome to AI Hotel Management
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#6b7280' }}>
          Experience the future of hospitality with AI-powered hotel management
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/rooms" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '0.75rem 2rem', textDecoration: 'none' }}>
            Browse Rooms
          </Link>
          <Link to="/ai-assistant" className="btn btn-secondary" style={{ fontSize: '1.125rem', padding: '0.75rem 2rem', textDecoration: 'none' }}>
            Try AI Assistant
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
          <h3 style={{ marginBottom: '0.5rem' }}>AI Assistant</h3>
          <p style={{ color: '#6b7280' }}>Get instant help with bookings and recommendations</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏨</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Smart Rooms</h3>
          <p style={{ color: '#6b7280' }}>Modern rooms with intelligent amenities</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Easy Booking</h3>
          <p style={{ color: '#6b7280' }}>Book and manage your stay with ease</p>
        </div>
        <div className="card" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⭐</div>
          <h3 style={{ marginBottom: '0.5rem' }}>Premium Service</h3>
          <p style={{ color: '#6b7280' }}>24/7 support and exceptional service</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
