import { useAuth } from '../context/AuthContext';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Dashboard</h1>
      <div className="card">
        <h2 style={{ marginBottom: '1rem' }}>Welcome, {user?.firstName}!</h2>
        <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Email: {user?.email}</p>
        <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Role: {user?.role}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
        <div className="card">
          <h3 style={{ marginBottom: '0.5rem' }}>Total Bookings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>0</p>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '0.5rem' }}>Active Bookings</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--secondary-color)' }}>0</p>
        </div>
        <div className="card">
          <h3 style={{ marginBottom: '0.5rem' }}>Total Spent</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>$0</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
