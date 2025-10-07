const BookingsPage = () => {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '2rem' }}>My Bookings</h1>
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <p style={{ fontSize: '1.125rem', color: '#6b7280' }}>You don't have any bookings yet</p>
      </div>
    </div>
  );
};

export default BookingsPage;
