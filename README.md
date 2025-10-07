# 🏨 AI Hotel Management System

一个功能完整的AI驱动的酒店管理系统，采用现代化的全栈技术架构。

## 📋 项目概述

这是一个完整的酒店管理系统，集成了人工智能功能，包括：

- 🤖 **AI助手** - 智能对话助手，帮助客户预订和咨询
- 🏨 **房间管理** - 完整的房间CRUD操作
- 📅 **预订系统** - 在线预订和管理
- 💳 **支付集成** - 支持多种支付方式
- 👥 **用户管理** - 多角色权限系统
- ⭐ **评价系统** - 客户评价和反馈
- 🔧 **服务请求** - 客房服务、维护请求等

## 🛠️ 技术栈

### 后端
- **Node.js** + **Express** - 服务器框架
- **TypeScript** - 类型安全
- **Prisma** - ORM数据库管理
- **PostgreSQL** - 主数据库
- **Redis** - 缓存和会话管理
- **OpenAI API** - AI功能集成
- **JWT** - 身份认证
- **Winston** - 日志管理

### 前端
- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **React Router** - 路由管理
- **Axios** - HTTP客户端
- **React Query** - 数据获取和缓存
- **Zustand** - 状态管理

### 基础设施
- **Docker** + **Docker Compose** - 容器化部署
- **PostgreSQL** - 关系型数据库
- **Redis** - 内存数据库

## 📁 项目结构

```
ai-hotel-install/
├── backend/                 # 后端服务
│   ├── src/
│   │   ├── config/         # 配置文件
│   │   ├── controllers/    # 控制器
│   │   ├── middleware/     # 中间件
│   │   ├── models/         # 数据模型
│   │   ├── routes/         # 路由
│   │   ├── services/       # 业务逻辑
│   │   ├── types/          # TypeScript类型
│   │   ├── utils/          # 工具函数
│   │   └── index.ts        # 入口文件
│   ├── prisma/
│   │   └── schema.prisma   # 数据库模式
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/               # 前端应用
│   ├── src/
│   │   ├── components/    # React组件
│   │   ├── pages/         # 页面组件
│   │   ├── services/      # API服务
│   │   ├── hooks/         # 自定义Hooks
│   │   ├── context/       # Context API
│   │   ├── utils/         # 工具函数
│   │   ├── types/         # TypeScript类型
│   │   ├── App.tsx        # 主应用
│   │   └── main.tsx       # 入口文件
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── docker-compose.yml      # Docker编排
├── .env.example           # 环境变量模板
├── .gitignore
├── package.json           # 根package.json
└── README.md

```

## 🚀 快速开始

### 前置要求

- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose (可选)

### 安装步骤

#### 方法 1: 使用 Docker (推荐)

1. **克隆项目**
```bash
git clone https://github.com/web3-ai-game/ai-hotel-install.git
cd ai-hotel-install
```

2. **配置环境变量**
```bash
cp .env.example .env
# 编辑 .env 文件，填入你的配置
```

3. **启动所有服务**
```bash
docker-compose up -d
```

4. **访问应用**
- 前端: http://localhost:5173
- 后端API: http://localhost:3000
- PostgreSQL: localhost:5432
- Redis: localhost:6379

#### 方法 2: 本地开发

1. **克隆项目**
```bash
git clone https://github.com/web3-ai-game/ai-hotel-install.git
cd ai-hotel-install
```

2. **配置环境变量**
```bash
cp .env.example .env
# 编辑 .env 文件
```

3. **安装依赖**
```bash
npm run install:all
```

4. **设置数据库**
```bash
cd backend
npx prisma generate
npx prisma migrate dev
```

5. **启动开发服务器**
```bash
# 在项目根目录
npm run dev
```

这将同时启动前端和后端开发服务器。

## 📝 API文档

### 认证端点

```
POST /api/auth/register - 用户注册
POST /api/auth/login    - 用户登录
```

### 房间端点

```
GET    /api/rooms      - 获取所有房间
GET    /api/rooms/:id  - 获取单个房间
POST   /api/rooms      - 创建房间 (需要管理员权限)
PUT    /api/rooms/:id  - 更新房间 (需要管理员权限)
DELETE /api/rooms/:id  - 删除房间 (需要管理员权限)
```

### AI助手端点

```
POST /api/ai/chat                - 与AI对话
POST /api/ai/recommendations     - 获取AI推荐
GET  /api/ai/history            - 获取聊天历史
```

### 其他端点

```
GET /api/bookings  - 预订管理
GET /api/payments  - 支付管理
GET /api/reviews   - 评价管理
GET /api/services  - 服务请求
```

## 🔒 环境变量配置

关键环境变量说明：

```env
# 数据库
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d

# AI配置
AI_API_KEY=your-openai-api-key
AI_MODEL=gpt-4

# 服务器
PORT=3000
NODE_ENV=development
```

## 🗃️ 数据库模型

主要数据模型：

- **User** - 用户信息
- **Room** - 房间信息
- **Booking** - 预订记录
- **Payment** - 支付记录
- **Review** - 评价信息
- **ChatHistory** - AI对话历史
- **ServiceRequest** - 服务请求

## 📱 功能特性

### 已实现功能
- ✅ 用户注册和登录
- ✅ JWT身份认证
- ✅ 房间列表展示
- ✅ AI智能助手
- ✅ 响应式UI设计
- ✅ 多角色权限系统
- ✅ Docker容器化部署

### 待开发功能
- ⏳ 完整的预订流程
- ⏳ 支付集成
- ⏳ 邮件通知
- ⏳ 实时聊天
- ⏳ 数据分析仪表板
- ⏳ 多语言支持

## 🧪 测试

```bash
# 后端测试
cd backend
npm test

# 前端测试
cd frontend
npm test
```

## 📦 构建部署

### 生产构建

```bash
# 构建所有服务
npm run build

# 使用Docker构建
docker-compose -f docker-compose.yml up --build
```

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 👥 联系方式

项目链接: [https://github.com/web3-ai-game/ai-hotel-install](https://github.com/web3-ai-game/ai-hotel-install)

## 🙏 致谢

- OpenAI - AI功能支持
- Prisma - 优秀的ORM工具
- React - 前端框架
- Express - 后端框架

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
