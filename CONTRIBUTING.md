# 🤝 Contributing to AI Hotel Management System

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Testing Requirements](#testing-requirements)

## 🌟 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in all interactions.

### Our Standards

✅ **DO:**
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards others

❌ **DON'T:**
- Use sexualized language or imagery
- Make personal attacks
- Engage in trolling or insulting comments
- Harass others publicly or privately
- Publish others' private information

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/ai-hotel-install.git
cd ai-hotel-install
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/web3-ai-game/ai-hotel-install.git
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 5. Set Up Development Environment

Follow the [QUICKSTART.md](QUICKSTART.md) guide to set up your local environment.

## 💻 Development Process

### Finding Issues to Work On

1. Check the [Issues](https://github.com/web3-ai-game/ai-hotel-install/issues) page
2. Look for issues labeled:
   - `good first issue` - Great for beginners
   - `help wanted` - Needs contributors
   - `bug` - Bug fixes needed
   - `enhancement` - New features

### Before Starting Work

1. **Comment on the issue** to let others know you're working on it
2. **Discuss your approach** if it's a significant change
3. **Check for related issues** to avoid duplicate work

### Development Workflow

1. **Keep your fork updated**
```bash
git fetch upstream
git checkout main
git merge upstream/main
```

2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
- Write clean, readable code
- Follow the project's coding standards
- Add tests for new features
- Update documentation as needed

4. **Test your changes**
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# Run linters
npm run lint
```

5. **Commit your changes**
```bash
git add .
git commit -m "feat: add amazing feature"
```

6. **Push to your fork**
```bash
git push origin feature/amazing-feature
```

## 🔄 Pull Request Process

### Creating a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template

### PR Title Format

Use conventional commits format:

```
<type>(<scope>): <subject>

Examples:
feat(auth): add OAuth login support
fix(booking): resolve date validation bug
docs(readme): update installation instructions
style(frontend): improve button styling
refactor(api): optimize room query performance
test(auth): add login endpoint tests
```

### PR Description Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
Describe how you tested your changes:
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing performed

## Screenshots (if applicable)
Add screenshots to show visual changes.

## Checklist
- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix/feature works
- [ ] New and existing tests pass locally
```

### Review Process

1. **Automated checks** must pass:
   - Linting
   - Type checking
   - Tests
   - Build

2. **Code review** by maintainers:
   - At least one approval required
   - Address feedback promptly
   - Be open to suggestions

3. **Merge requirements**:
   - All conversations resolved
   - CI/CD pipeline passes
   - No merge conflicts
   - Approved by maintainer

## 📝 Coding Standards

### TypeScript/JavaScript

```typescript
// ✅ Good
export const getUserById = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

// ❌ Bad
export const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};
```

### General Guidelines

1. **Use TypeScript** - Always define types
2. **Async/Await** - Prefer over promises
3. **Error Handling** - Always handle errors properly
4. **DRY Principle** - Don't repeat yourself
5. **SOLID Principles** - Follow SOLID design principles
6. **Comments** - Write self-documenting code, add comments when necessary
7. **Security** - Never commit secrets or sensitive data

### File Structure

```typescript
// Import order:
// 1. External dependencies
import express from 'express';
import { PrismaClient } from '@prisma/client';

// 2. Internal dependencies
import { logger } from '../config/logger';
import { authenticate } from '../middleware/auth';

// 3. Types
import { User, UserRole } from '../types';

// Code implementation...
```

### Naming Conventions

```typescript
// Variables and functions: camelCase
const userName = 'John';
const getUserData = () => {};

// Classes and interfaces: PascalCase
class UserService {}
interface UserInterface {}

// Constants: UPPER_SNAKE_CASE
const API_BASE_URL = 'http://api.example.com';
const MAX_RETRY_COUNT = 3;

// Files: kebab-case
// user-service.ts
// auth-middleware.ts
```

## 📨 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
# Good commits
git commit -m "feat(auth): add password reset functionality"
git commit -m "fix(booking): resolve timezone issue in date picker"
git commit -m "docs(api): update authentication endpoints"

# Bad commits
git commit -m "fix stuff"
git commit -m "WIP"
git commit -m "asdfgh"
```

### Commit Body (when needed)

```
feat(payment): integrate Stripe payment gateway

- Add Stripe SDK dependencies
- Create payment service with charge and refund methods
- Update booking flow to include payment step
- Add webhook handler for payment events

Closes #123
```

## 🧪 Testing Requirements

### Backend Tests

```typescript
// Example: auth.test.ts
describe('Auth Controller', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          firstName: 'Test',
          lastName: 'User'
        });
      
      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
    });

    it('should reject duplicate email', async () => {
      // Test implementation
    });
  });
});
```

### Frontend Tests

```typescript
// Example: LoginPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders login form', () => {
    render(<LoginPage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('submits form with valid credentials', async () => {
    // Test implementation
  });
});
```

### Test Coverage

- Aim for **80%+ coverage** for new code
- All new features must include tests
- Bug fixes should include regression tests

## 🎨 Style Guide

### React Components

```typescript
// ✅ Good
interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <button onClick={() => onEdit(user.id)}>Edit</button>
    </div>
  );
};
```

### Express Controllers

```typescript
// ✅ Good
export const createRoom = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const room = await roomService.create(data);
    
    res.status(201).json({
      success: true,
      data: room
    });
  } catch (error) {
    logger.error('Create room error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create room'
    });
  }
};
```

## 📚 Documentation

### Update Documentation When:

1. Adding new features
2. Changing APIs
3. Modifying configuration
4. Updating dependencies
5. Changing deployment process

### Documentation Files

- `README.md` - Project overview
- `QUICKSTART.md` - Getting started guide
- `DEVELOPMENT.md` - Development guidelines
- `ARCHITECTURE.md` - System architecture
- `API.md` - API documentation (if separate)

## 🎁 Recognition

Contributors will be:
- Listed in the project's contributors page
- Mentioned in release notes for significant contributions
- Given appropriate credit in documentation

## ❓ Questions?

- Open an issue with the `question` label
- Join our community discussions
- Contact maintainers directly

## 📜 License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

**Thank you for contributing! 🎉**

Your efforts help make this project better for everyone.
