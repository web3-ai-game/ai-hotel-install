import React, { useEffect, useState } from 'react'
import { apiClient } from '../services/api'
import './HomePage.css'
import hotelIcon from '../assets/hotel-icon.svg'
import successIcon from '../assets/success-icon.svg'
import failureIcon from '../assets/failure-icon.svg'

const HomePage: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...')
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/health')
        setMessage(response.data.message || 'Backend connected!')
      } catch (err) {
        setError('Backend connection failed. Please start the backend server.')
        console.error('Error fetching data:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="home-page">
      <header className="header">
        <img src={hotelIcon} alt="Hotel Icon" className="hotel-icon" />
        <h1>AI Hotel</h1>
        <p>Welcome to the AI Hotel Installation Full Stack Application</p>
      </header>

      <main className="main-content">
        <section className="status-card">
          <h2>Backend Status</h2>
          {error ? (
            <div className="status-display">
              <img src={failureIcon} alt="Failure Icon" className="status-icon" />
              <p className="status-error">{error}</p>
            </div>
          ) : (
            <div className="status-display">
              <img src={successIcon} alt="Success Icon" className="status-icon" />
              <p className="status-success">{message}</p>
            </div>
          )}
        </section>

        <section className="features-card">
          <h2>Features</h2>
          <ul>
            <li>React 18 with TypeScript</li>
            <li>Vite for fast development</li>
            <li>React Router for navigation</li>
            <li>Node.js + Express backend</li>
            <li>MongoDB/PostgreSQL support</li>
            <li>Docker ready</li>
          </ul>
        </section>

        <section className="actions-card">
          <h2>Actions</h2>
          <div className="buttons-container">
            <button className="btn btn-primary">Book Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 AI Hotel. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage
