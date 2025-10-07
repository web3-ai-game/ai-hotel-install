import { useState, useEffect } from 'react';
import { roomService } from '../services/room.service';

const RoomsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await roomService.getAllRooms();
      setRooms(response.data || []);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to load rooms');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <p>Loading rooms...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div style={{ padding: '0.75rem', background: '#fee', color: '#c00', borderRadius: '0.375rem' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>Available Rooms</h1>
      
      {rooms.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>No rooms available at the moment</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {rooms.map((room: any) => (
            <div key={room.id} className="card">
              <h3 style={{ marginBottom: '0.5rem' }}>Room {room.roomNumber}</h3>
              <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Type: {room.type}</p>
              <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Capacity: {room.capacity} guests</p>
              <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>Floor: {room.floor}</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '1rem' }}>
                ${room.price}/night
              </p>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomsPage;
