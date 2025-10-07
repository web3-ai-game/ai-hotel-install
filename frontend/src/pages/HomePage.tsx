import React, { useEffect, useState } from 'react'
import { apiClient } from '../services/api'

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
      <h1>AI Hotel Install</h1>
      <p>Welcome to the AI Hotel Installation Full Stack Application</p>
      
      <div className="status-card">
        <h2>Backend Status</h2>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p style={{ color: 'green' }}>{message}</p>
        )}
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>React 18 with TypeScript</li>
          <li>Vite for fast development</li>
          <li>React Router for navigation</li>
          <li>Node.js + Express backend</li>
          <li>MongoDB/PostgreSQL support</li>
          <li>Docker ready</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
