# 自然语言编程指南 (Natural Language Programming Guide)

## 概述 (Overview)

欢迎使用 AI Hotel Install 项目的自然语言编程框架！本项目支持使用自然语言来定义和执行开发任务。

Welcome to the AI Hotel Install project's natural language programming framework! This project supports using natural language to define and execute development tasks.

## 核心原则 (Core Principles)

### 1. 自然语言优先 (Natural Language First)
- 使用清晰、简洁的中文或英文描述任务
- Use clear, concise Chinese or English to describe tasks
- 避免复杂的技术术语，除非必要
- Avoid complex technical jargon unless necessary

### 2. 任务导向 (Task-Oriented)
- 每个命令文件代表一个具体任务
- Each command file represents a specific task
- 专注于"做什么"而非"怎么做"
- Focus on "what to do" rather than "how to do it"

### 3. 可组合性 (Composability)
- 小任务可以组合成大任务
- Small tasks can be combined into larger tasks
- 支持任务依赖和顺序执行
- Support task dependencies and sequential execution

## 使用方法 (Usage)

### 创建自然语言命令 (Creating Natural Language Commands)

在 `natural-language-commands/` 目录下创建 `.txt` 或 `.md` 文件：

Create `.txt` or `.md` files in the `natural-language-commands/` directory:

```
natural-language-commands/
  ├── setup-hotel-system.txt
  ├── configure-ai-assistant.txt
  └── deploy-to-production.txt
```

### 命令格式 (Command Format)

每个命令文件应包含：

Each command file should contain:

1. **任务标题** (Task Title)
2. **任务描述** (Task Description)
3. **预期结果** (Expected Outcome)
4. **依赖项**（可选）(Dependencies - optional)

示例 (Example):

```
任务: 配置AI酒店助手
Task: Configure AI Hotel Assistant

描述: 设置一个智能助手来处理酒店客人的查询和预订
Description: Set up an intelligent assistant to handle hotel guest queries and reservations

预期结果: 
- AI助手可以响应客人问题
- 系统能够处理预订请求
- 集成多语言支持

Expected Outcome:
- AI assistant can respond to guest questions
- System can handle reservation requests
- Multi-language support integrated

依赖: setup-hotel-system.txt
Dependencies: setup-hotel-system.txt
```

## 最佳实践 (Best Practices)

### 1. 清晰的意图 (Clear Intent)
✅ 好的例子 (Good): "创建一个用户注册系统，支持邮箱验证"
❌ 不好的例子 (Bad): "搞定注册功能"

✅ Good: "Create a user registration system with email verification"
❌ Bad: "Fix the signup thing"

### 2. 具体的要求 (Specific Requirements)
✅ 好的例子 (Good): "添加价格范围筛选，支持 ￥100-￥5000 的范围"
❌ 不好的例子 (Bad): "添加筛选功能"

✅ Good: "Add price range filter supporting ￥100-￥5000 range"
❌ Bad: "Add filtering"

### 3. 可验证的结果 (Verifiable Results)
每个任务都应该有清晰的成功标准

Each task should have clear success criteria

## 项目结构 (Project Structure)

```
ai-hotel-install/
├── natural-language-commands/  # 自然语言命令文件
│   └── (Natural language command files)
├── examples/                   # 示例和模板
│   └── (Examples and templates)
├── docs/                       # 详细文档
│   └── (Detailed documentation)
├── src/                        # 源代码（由自然语言命令生成）
│   └── (Source code generated from natural language commands)
└── README.md                   # 项目说明
    └── (Project description)
```

## 工作流程 (Workflow)

1. **定义任务** (Define Task)
   - 在 `natural-language-commands/` 中创建命令文件
   - Create command file in `natural-language-commands/`

2. **执行任务** (Execute Task)
   - AI系统读取并理解自然语言命令
   - AI system reads and understands natural language commands
   - 自动生成相应的代码和配置
   - Automatically generates corresponding code and configuration

3. **验证结果** (Verify Results)
   - 检查预期结果是否达成
   - Check if expected outcomes are achieved
   - 根据需要调整命令
   - Adjust commands as needed

4. **迭代改进** (Iterate and Improve)
   - 基于反馈优化命令
   - Optimize commands based on feedback
   - 重复执行直到满意
   - Repeat execution until satisfied

## 支持的任务类型 (Supported Task Types)

- 🏗️ **系统搭建** (System Setup)
- 🔧 **功能配置** (Feature Configuration)
- 🎨 **界面设计** (UI Design)
- 📊 **数据处理** (Data Processing)
- 🚀 **部署发布** (Deployment)
- 🧪 **测试验证** (Testing & Validation)

## 帮助和支持 (Help and Support)

如有问题，请查看 `examples/` 目录中的示例，或参考 `docs/` 目录中的详细文档。

For questions, please check the examples in the `examples/` directory or refer to the detailed documentation in the `docs/` directory.
