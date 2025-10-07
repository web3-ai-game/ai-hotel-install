# Quick Start Guide

## Prerequisites
- Node.js 18+ and npm
- MongoDB (or use Docker)
- Git

## Quick Setup

### Option 1: Automated Setup (Recommended)
```bash
# Clone and setup
git clone <repository-url>
cd ai-hotel-install
./setup.sh
```

### Option 2: Manual Setup
```bash
# 1. Install dependencies
npm install
npm run install:all

# 2. Setup environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# 3. Edit environment files as needed
nano backend/.env
nano frontend/.env
```

## Running the Application

### Development Mode
```bash
# Start both frontend and backend
npm run dev

# Frontend will be at: http://localhost:3000
# Backend API will be at: http://localhost:5000
```

### Using Docker
```bash
# Development with hot reload
docker-compose -f docker-compose.dev.yml up -d

# Production
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

## Common Commands

### Development
```bash
npm run dev              # Start both servers
npm run dev:frontend     # Frontend only
npm run dev:backend      # Backend only
```

### Building
```bash
npm run build            # Build both
npm run build:frontend   # Build frontend
npm run build:backend    # Build backend
```

### Testing & Quality
```bash
npm run test            # Run all tests
npm run lint            # Lint all code
```

### Using Make (if available)
```bash
make install           # Install dependencies
make dev              # Start development
make build            # Build for production
make docker-dev       # Start Docker dev
make docker-prod      # Start Docker prod
```

## Project Structure at a Glance

```
ai-hotel-install/
├── frontend/          # React app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API services
│   │   └── ...
│   └── package.json
│
├── backend/           # Express API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── routes/      # API routes
│   │   ├── models/      # Data models
│   │   └── ...
│   └── package.json
│
└── package.json       # Root workspace
```

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-hotel
JWT_SECRET=your-secret-key
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Troubleshooting

### Port Already in Use
```bash
# Find and kill process using port 3000 or 5000
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Issues
```bash
# Start MongoDB manually
mongod

# Or use Docker
docker run -d -p 27017:27017 mongo:7
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules frontend/node_modules backend/node_modules
npm install
npm run install:all
```

## Next Steps

1. ✅ Set up your environment variables
2. ✅ Start MongoDB (if not using Docker)
3. ✅ Run `npm run dev`
4. ✅ Open http://localhost:3000
5. ✅ Start building your features!

## Need Help?

- 📖 See [README.md](README.md) for detailed documentation
- 🤝 See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- 🐛 Report issues on GitHub

## Tech Stack Quick Reference

- **Frontend**: React 18, TypeScript, Vite, React Router
- **Backend**: Node.js, Express, TypeScript, MongoDB
- **Tools**: Docker, ESLint, Winston Logger
- **CI/CD**: GitHub Actions

---
Happy coding! 🚀
