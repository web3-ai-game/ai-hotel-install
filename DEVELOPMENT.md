# AI Hotel Management System - Development Guide

## 开发指南

### 项目结构说明

#### 后端架构

```
backend/
├── src/
│   ├── config/          # 配置文件
│   │   ├── database.ts  # Prisma数据库配置
│   │   ├── redis.ts     # Redis配置
│   │   └── logger.ts    # 日志配置
│   ├── controllers/     # 业务控制器
│   │   ├── auth.controller.ts
│   │   ├── room.controller.ts
│   │   └── ai.controller.ts
│   ├── middleware/      # 中间件
│   │   ├── auth.ts      # JWT认证
│   │   └── errorHandler.ts
│   ├── routes/          # 路由定义
│   └── index.ts         # 应用入口
```

#### 前端架构

```
frontend/
├── src/
│   ├── components/      # 可复用组件
│   ├── pages/          # 页面组件
│   ├── services/       # API服务层
│   ├── context/        # React Context
│   └── App.tsx         # 应用根组件
```

### 开发工作流

#### 1. 添加新的API端点

**步骤：**

1. 在 `backend/src/controllers/` 创建或更新控制器
2. 在 `backend/src/routes/` 添加路由
3. 在 `backend/src/index.ts` 注册路由
4. 在 `frontend/src/services/` 创建对应的服务方法
5. 在前端页面中使用服务

**示例：添加评论功能**

```typescript
// backend/src/controllers/comment.controller.ts
export const createComment = async (req: Request, res: Response) => {
  // 实现逻辑
};

// backend/src/routes/comment.routes.ts
import { createComment } from '../controllers/comment.controller';
router.post('/', authenticate, createComment);

// frontend/src/services/comment.service.ts
export const commentService = {
  create: async (data) => {
    const response = await api.post('/comments', data);
    return response.data;
  }
};
```

#### 2. 添加新的数据模型

**步骤：**

1. 更新 `backend/prisma/schema.prisma`
2. 运行 `npx prisma migrate dev --name add_model_name`
3. 运行 `npx prisma generate`
4. 创建对应的TypeScript类型定义

**示例：**

```prisma
model Comment {
  id        String   @id @default(uuid())
  content   String
  userId    String
  createdAt DateTime @default(now())
  
  user      User     @relation(fields: [userId], references: [id])
  
  @@map("comments")
}
```

#### 3. 添加新的前端页面

**步骤：**

1. 在 `frontend/src/pages/` 创建页面组件
2. 在 `App.tsx` 添加路由
3. 在导航栏添加链接（如需要）

### 环境配置

#### 开发环境

```bash
# 后端
cd backend
npm run dev

# 前端
cd frontend
npm run dev
```

#### 生产环境

```bash
# 使用Docker
docker-compose up --build

# 或手动构建
npm run build
npm run start
```

### 数据库管理

#### Prisma命令

```bash
# 生成Prisma客户端
npx prisma generate

# 创建迁移
npx prisma migrate dev --name migration_name

# 应用迁移
npx prisma migrate deploy

# 打开Prisma Studio
npx prisma studio

# 重置数据库
npx prisma migrate reset
```

### AI功能开发

#### OpenAI集成

```typescript
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'system', content: 'You are a helpful assistant.' },
    { role: 'user', content: 'Hello!' }
  ],
});
```

### 测试策略

#### 单元测试

```typescript
// backend/src/__tests__/auth.test.ts
import { register } from '../controllers/auth.controller';

describe('Auth Controller', () => {
  test('should register new user', async () => {
    // 测试逻辑
  });
});
```

#### 集成测试

```typescript
// frontend/src/__tests__/Login.test.tsx
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';

test('renders login form', () => {
  render(<LoginPage />);
  expect(screen.getByText('Login')).toBeInTheDocument();
});
```

### 性能优化

1. **后端优化**
   - 使用Redis缓存频繁访问的数据
   - 数据库查询优化（索引、关系预加载）
   - 实现API速率限制

2. **前端优化**
   - 使用React.memo优化组件渲染
   - 实现虚拟滚动处理大列表
   - 代码分割和懒加载

### 安全最佳实践

1. **永远不要提交敏感信息**
   - API密钥
   - 数据库密码
   - JWT密钥

2. **输入验证**
   - 使用express-validator验证请求数据
   - 前端表单验证

3. **SQL注入防护**
   - 使用Prisma的参数化查询

4. **XSS防护**
   - 前端输出转义
   - Content Security Policy

### 常见问题

#### Q: 如何添加新的用户角色？

A: 
1. 更新 `prisma/schema.prisma` 的 `Role` enum
2. 运行迁移
3. 更新前端类型定义

#### Q: 如何切换AI模型？

A: 在 `.env` 文件中修改 `AI_MODEL` 变量

#### Q: 如何处理文件上传？

A: 使用 `multer` 中间件：

```typescript
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });
router.post('/upload', upload.single('file'), handleUpload);
```

### 代码规范

- 使用ESLint检查代码质量
- 使用Prettier格式化代码
- 遵循TypeScript最佳实践
- 编写清晰的注释

### 部署检查清单

- [ ] 所有环境变量已配置
- [ ] 数据库迁移已应用
- [ ] 生产构建成功
- [ ] 所有测试通过
- [ ] API文档已更新
- [ ] 安全审计完成
- [ ] 性能测试通过
- [ ] 备份策略已设置

## 获取帮助

- 查看项目Issue: https://github.com/web3-ai-game/ai-hotel-install/issues
- 提交Bug报告
- 参与讨论

## 贡献者指南

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何贡献代码。
