# AI Hotel Install - Full Stack Application

A modern full-stack web application built with React, TypeScript, Node.js, Express, and MongoDB.

## 🏗️ Project Structure

```
ai-hotel-install/
├── frontend/              # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript type definitions
│   │   └── assets/        # Static assets
│   ├── Dockerfile
│   └── package.json
│
├── backend/               # Node.js + Express + TypeScript backend
│   ├── src/
│   │   ├── controllers/   # Request handlers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── config/        # Configuration files
│   │   ├── services/      # Business logic
│   │   ├── utils/         # Utility functions
│   │   └── types/         # TypeScript type definitions
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml     # Production Docker setup
├── docker-compose.dev.yml # Development Docker setup
└── package.json           # Root package.json for workspace management
```

## 🚀 Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database (with Mongoose ODM)
- **Winston** - Logging
- **Helmet** - Security middleware
- **JWT** - Authentication

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy (in production)

## 📋 Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized setup)
- MongoDB (if running locally without Docker)

## 🛠️ Installation

### Option 1: Local Development (without Docker)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-hotel-install
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm run install:all
   ```

3. **Configure environment variables**
   
   Backend:
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```
   
   Frontend:
   ```bash
   cd frontend
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB** (if not using Docker)
   ```bash
   mongod
   ```

5. **Run the application**
   ```bash
   # From root directory
   npm run dev
   
   # Or run separately:
   npm run dev:backend  # Backend on http://localhost:5000
   npm run dev:frontend # Frontend on http://localhost:3000
   ```

### Option 2: Docker Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-hotel-install
   ```

2. **Start with Docker Compose**
   ```bash
   # Development mode (with hot reload)
   docker-compose -f docker-compose.dev.yml up -d
   
   # View logs
   docker-compose -f docker-compose.dev.yml logs -f
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Option 3: Production Docker Setup

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🧪 Development

### Available Scripts

Root level:
- `npm run dev` - Run both frontend and backend
- `npm run build` - Build both frontend and backend
- `npm run test` - Run all tests
- `npm run lint` - Lint all code

Frontend:
- `npm run dev --workspace=frontend` - Start dev server
- `npm run build --workspace=frontend` - Build for production
- `npm run preview --workspace=frontend` - Preview production build

Backend:
- `npm run dev --workspace=backend` - Start with nodemon
- `npm run build --workspace=backend` - Compile TypeScript
- `npm run start --workspace=backend` - Start production server

## 📡 API Documentation

### Health Check
```
GET /health
Response: { status: 'ok', message: '...', timestamp: '...' }
```

### API Routes
```
GET /api/health - Backend health check
```

## 🐳 Docker Commands

```bash
# Development
docker-compose -f docker-compose.dev.yml up -d    # Start
docker-compose -f docker-compose.dev.yml down     # Stop
docker-compose -f docker-compose.dev.yml logs -f  # View logs

# Production
docker-compose up -d    # Start
docker-compose down     # Stop
docker-compose logs -f  # View logs

# Rebuild containers
docker-compose build --no-cache
```

## 📝 Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-hotel
JWT_SECRET=your-secret-key
JWT_EXPIRATION=7d
LOG_LEVEL=info
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🏗️ Project Features

- ✅ Modern React with TypeScript
- ✅ RESTful API with Express
- ✅ MongoDB database integration
- ✅ JWT authentication ready
- ✅ Error handling and logging
- ✅ CORS and security headers
- ✅ Docker support
- ✅ Hot reload in development
- ✅ Production-ready build setup
- ✅ Monorepo structure with workspaces

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

AI Hotel Install Team

## 🙏 Acknowledgments

- React Team
- Express Team
- TypeScript Team
- All contributors
