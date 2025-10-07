import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{
        background: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '1rem 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'var(--primary-color)' }}>
            🏨 AI Hotel
          </Link>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/rooms" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>Rooms</Link>
            {isAuthenticated ? (
              <>
                <Link to="/bookings" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>My Bookings</Link>
                <Link to="/ai-assistant" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>AI Assistant</Link>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>Dashboard</Link>
                <span style={{ color: 'var(--text-color)' }}>👤 {user?.firstName}</span>
                <button onClick={logout} className="btn btn-primary">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <main style={{ flex: 1, padding: '2rem 0' }}>
        <Outlet />
      </main>
      <footer style={{
        background: '#1f2937',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p>© 2024 AI Hotel Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
