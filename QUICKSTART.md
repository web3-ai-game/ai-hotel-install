# 🚀 Quick Start Guide

Get your AI Hotel Management System up and running in minutes!

## Prerequisites Check

Before you start, make sure you have:

- ✅ **Node.js 18+** - `node --version`
- ✅ **npm or yarn** - `npm --version`
- ✅ **Docker & Docker Compose** (recommended) - `docker --version`
- ✅ **Git** - `git --version`

## 🎯 Option 1: Docker Compose (Easiest)

Perfect for quickly testing the full system!

### Step 1: Clone the Repository

```bash
git clone https://github.com/web3-ai-game/ai-hotel-install.git
cd ai-hotel-install
```

### Step 2: Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your settings
# At minimum, update these:
# - AI_API_KEY=your-openai-api-key (get from https://platform.openai.com/)
# - JWT_SECRET=your-random-secret-key
```

### Step 3: Start All Services

```bash
docker-compose up -d
```

This will start:
- ✨ Frontend on http://localhost:5173
- 🚀 Backend API on http://localhost:3000
- 🐘 PostgreSQL on localhost:5432
- 🔴 Redis on localhost:6379

### Step 4: Initialize Database

```bash
# Run migrations
docker-compose exec backend npx prisma migrate deploy

# (Optional) Seed some test data
docker-compose exec backend npm run seed
```

### Step 5: Access the Application

Open your browser and visit:
- **Frontend**: http://localhost:5173
- **API Health Check**: http://localhost:3000/health

🎉 **You're all set!** Create an account and start exploring.

---

## 🛠️ Option 2: Local Development

For development and customization.

### Step 1: Clone the Repository

```bash
git clone https://github.com/web3-ai-game/ai-hotel-install.git
cd ai-hotel-install
```

### Step 2: Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

cd ..
```

### Step 3: Setup PostgreSQL and Redis

**Option A: Using Docker**
```bash
# Start only database services
docker-compose up postgres redis -d
```

**Option B: Local Installation**
- Install PostgreSQL: https://www.postgresql.org/download/
- Install Redis: https://redis.io/download
- Create a database: `createdb hotel_ai_db`

### Step 4: Configure Environment

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your local settings
# Important: Update these values
# - DATABASE_URL=postgresql://user:pass@localhost:5432/hotel_ai_db
# - REDIS_URL=redis://localhost:6379
# - AI_API_KEY=your-openai-api-key
# - JWT_SECRET=your-secret-key
```

### Step 5: Setup Database Schema

```bash
cd backend

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### Step 6: Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Step 7: Access the Application

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **Prisma Studio**: http://localhost:5555 (if running)

---

## 🔑 Getting Your API Keys

### OpenAI API Key

1. Go to https://platform.openai.com/
2. Sign up or log in
3. Navigate to **API Keys** section
4. Click **Create new secret key**
5. Copy the key and add to `.env` as `AI_API_KEY`

**Note**: OpenAI API requires payment information, but offers free credits for new users.

### Alternative: Use Mock AI (No API Key Needed)

If you don't have an OpenAI API key, you can use mock responses:

```typescript
// backend/src/controllers/ai.controller.ts
// Comment out OpenAI calls and return mock data
const response = "This is a mock AI response!";
```

---

## 📱 First Steps in the App

### 1. Create an Account

- Visit http://localhost:5173/register
- Fill in your details
- Click **Register**

### 2. Explore Features

**Try the AI Assistant:**
- Go to **AI Assistant** from the navigation
- Ask questions like:
  - "What rooms do you have available?"
  - "I need a room for 2 people"
  - "Tell me about your hotel services"

**Browse Rooms:**
- Go to **Rooms** page
- View available rooms (Note: initially empty, add rooms via API or Prisma Studio)

**Check Your Dashboard:**
- Go to **Dashboard**
- View your profile and booking statistics

### 3. Add Sample Rooms (Optional)

**Using Prisma Studio:**
```bash
cd backend
npx prisma studio
```

Then add rooms manually in the UI.

**Using API:**
```bash
# Login first to get token
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@hotel.com","password":"admin123"}'

# Create a room (replace <TOKEN> with your JWT)
curl -X POST http://localhost:3000/api/rooms \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "roomNumber": "101",
    "type": "DELUXE",
    "floor": 1,
    "capacity": 2,
    "price": 150,
    "description": "Beautiful deluxe room with ocean view"
  }'
```

---

## 🐛 Troubleshooting

### Docker Issues

**Problem: Port already in use**
```bash
# Check what's using the port
sudo lsof -i :3000
# or
netstat -ano | findstr :3000  # Windows

# Stop the service or change port in docker-compose.yml
```

**Problem: Database connection failed**
```bash
# Check if PostgreSQL container is running
docker-compose ps

# Check logs
docker-compose logs postgres

# Restart services
docker-compose restart
```

### Local Development Issues

**Problem: Cannot connect to PostgreSQL**
```bash
# Check if PostgreSQL is running
pg_isready -h localhost -p 5432

# Check connection string in .env
# Should be: postgresql://USER:PASSWORD@localhost:5432/hotel_ai_db
```

**Problem: Prisma Client not generated**
```bash
cd backend
npx prisma generate
```

**Problem: Module not found errors**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Frontend Issues

**Problem: API calls failing**
- Check backend is running on port 3000
- Check CORS settings in backend
- Verify API URL in frontend `.env`

**Problem: Build errors**
```bash
cd frontend
rm -rf node_modules
npm install
```

---

## 📊 Verify Installation

Run these checks to ensure everything works:

### 1. Backend Health Check
```bash
curl http://localhost:3000/health
# Expected: {"status":"ok","timestamp":"..."}
```

### 2. Database Connection
```bash
cd backend
npx prisma db push
# Should complete without errors
```

### 3. Frontend Build
```bash
cd frontend
npm run build
# Should complete without errors
```

### 4. Test API Endpoints
```bash
# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123","firstName":"Test","lastName":"User"}'

# Should return: {"success":true,"data":{...}}
```

---

## 🎓 Next Steps

Now that your system is running:

1. 📖 Read the [DEVELOPMENT.md](DEVELOPMENT.md) for development guidelines
2. 🏗️ Check [ARCHITECTURE.md](ARCHITECTURE.md) to understand the system
3. 🔧 Customize features for your needs
4. 🚀 Deploy to production (see deployment guide)

---

## 💡 Useful Commands

### Docker Commands
```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Restart a service
docker-compose restart backend

# Rebuild containers
docker-compose up --build
```

### Development Commands
```bash
# Root directory
npm run dev              # Start both frontend and backend
npm run build           # Build both projects
npm run install:all     # Install all dependencies

# Backend
npm run dev             # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npx prisma studio       # Open database GUI

# Frontend
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
```

---

## 🆘 Getting Help

- 📝 Check [GitHub Issues](https://github.com/web3-ai-game/ai-hotel-install/issues)
- 💬 Join our community discussions
- 📧 Contact support

---

**Happy Coding! 🎉**
