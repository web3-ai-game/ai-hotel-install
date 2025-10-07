# Development Guide

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher
- MongoDB 7 or higher (or Docker)
- Git
- Code editor (VS Code recommended)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-hotel-install
   ```

2. **Install dependencies**
   ```bash
   ./setup.sh
   # or manually:
   npm install
   npm run install:all
   ```

3. **Configure environment**
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

## Development Workflow

### Daily Development

```bash
# 1. Pull latest changes
git pull origin main

# 2. Install any new dependencies
npm install
npm run install:all

# 3. Start development servers
npm run dev

# 4. Make your changes

# 5. Test your changes
npm run lint
npm run build
npm run test

# 6. Commit and push
git add .
git commit -m "Your descriptive message"
git push
```

### Frontend Development

#### Adding a New Component
```bash
# 1. Create component file
cd frontend/src/components
touch MyComponent.tsx
```

```typescript
// MyComponent.tsx
import React from 'react'

interface MyComponentProps {
  title: string
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return <div>{title}</div>
}

export default MyComponent
```

#### Adding a New Page
```bash
# 1. Create page file
cd frontend/src/pages
touch MyPage.tsx
```

```typescript
// MyPage.tsx
import React from 'react'

const MyPage: React.FC = () => {
  return (
    <div>
      <h1>My Page</h1>
    </div>
  )
}

export default MyPage
```

```typescript
// Add route in App.tsx
<Route path="/my-page" element={<MyPage />} />
```

#### Creating a Custom Hook
```bash
cd frontend/src/hooks
touch useMyHook.ts
```

```typescript
import { useState, useEffect } from 'react'

export const useMyHook = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    // Hook logic
  }, [])
  
  return { data }
}
```

### Backend Development

#### Adding a New Route
```bash
# 1. Create route file
cd backend/src/routes
touch myResource.routes.ts
```

```typescript
// myResource.routes.ts
import { Router } from 'express'
import { myResourceController } from '../controllers/myResource.controller'

const router = Router()

router.get('/', myResourceController.getAll)
router.post('/', myResourceController.create)

export default router
```

```typescript
// Add to routes/index.ts
import myResourceRoutes from './myResource.routes'
router.use('/my-resource', myResourceRoutes)
```

#### Adding a New Controller
```bash
cd backend/src/controllers
touch myResource.controller.ts
```

```typescript
import { Request, Response } from 'express'

export const myResourceController = {
  getAll: async (req: Request, res: Response) => {
    try {
      // Logic here
      res.json({ success: true, data: [] })
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error message' })
    }
  },
  
  create: async (req: Request, res: Response) => {
    // Implementation
  }
}
```

#### Adding a New Model
```bash
cd backend/src/models
touch MyModel.model.ts
```

```typescript
import mongoose, { Document, Schema } from 'mongoose'

export interface IMyModel extends Document {
  name: string
  createdAt: Date
}

const MyModelSchema: Schema = new Schema({
  name: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model<IMyModel>('MyModel', MyModelSchema)
```

## Code Style Guide

### TypeScript Best Practices

1. **Use explicit types**
   ```typescript
   // Good
   const name: string = 'John'
   
   // Avoid
   const name = 'John'
   ```

2. **Use interfaces for objects**
   ```typescript
   interface User {
     id: string
     name: string
   }
   ```

3. **Use async/await over promises**
   ```typescript
   // Good
   const data = await fetchData()
   
   // Avoid
   fetchData().then(data => {})
   ```

### React Best Practices

1. **Use functional components**
2. **Extract reusable logic into hooks**
3. **Keep components small and focused**
4. **Use TypeScript props interfaces**
5. **Handle loading and error states**

### Express Best Practices

1. **Keep routes thin, controllers thick**
2. **Use async/await with try-catch**
3. **Validate input data**
4. **Return consistent response formats**
5. **Use middleware for common logic**

## Testing

### Frontend Testing
```bash
cd frontend
npm run test
```

### Backend Testing
```bash
cd backend
npm run test
```

## Debugging

### Frontend Debugging
- Use React DevTools browser extension
- Use console.log or debugger statements
- Check Network tab for API calls
- Use Vite's error overlay

### Backend Debugging
- Use console.log with Winston logger
- Use Node.js debugger
- Check server logs
- Test endpoints with Postman or curl

### Debug Commands
```bash
# Backend with debugger
cd backend
node --inspect-brk -r ts-node/register src/index.ts

# View logs
docker-compose logs -f backend
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=AI Hotel Install
```

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-hotel
JWT_SECRET=your-secret-key-here
LOG_LEVEL=info
```

## Common Issues

### Port Already in Use
```bash
# Kill process on port
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
```

### MongoDB Connection Failed
```bash
# Check MongoDB is running
mongod --version

# Start MongoDB
mongod

# Or use Docker
docker run -d -p 27017:27017 mongo:7
```

### TypeScript Errors
```bash
# Clean and rebuild
rm -rf dist
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## Git Workflow

### Branch Naming
- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code refactoring

### Commit Messages
```
feat: Add user authentication
fix: Fix login validation bug
docs: Update README
refactor: Improve error handling
test: Add unit tests for auth
```

### Before Committing
```bash
# 1. Check what changed
git status

# 2. Lint and build
npm run lint
npm run build

# 3. Run tests
npm run test

# 4. Stage and commit
git add .
git commit -m "Your message"

# 5. Push
git push
```

## Docker Development

### Start services
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### View logs
```bash
docker-compose logs -f
docker-compose logs -f backend
```

### Rebuild containers
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Access container shell
```bash
docker exec -it ai-hotel-backend-dev sh
```

## Performance Optimization

### Frontend
- Use React.memo for expensive components
- Implement code splitting
- Optimize images
- Use lazy loading

### Backend
- Use database indexing
- Implement caching
- Optimize queries
- Use pagination

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com/)
- [Vite Guide](https://vitejs.dev/guide/)

## Getting Help

- Check documentation in `/docs` folder
- Review existing code for examples
- Ask team members
- Create GitHub issues for bugs
- Check Stack Overflow for common issues
