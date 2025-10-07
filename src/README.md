# Source Code Directory

本目录用于存放由自然语言命令生成的源代码。

This directory is for storing source code generated from natural language commands.

## 结构说明 (Structure)

当您的自然语言命令被执行后，生成的代码将按照以下结构组织：

When your natural language commands are executed, the generated code will be organized as follows:

```
src/
├── backend/          # 后端代码
│   ├── api/         # API接口
│   ├── models/      # 数据模型
│   ├── services/    # 业务逻辑
│   └── utils/       # 工具函数
├── frontend/        # 前端代码
│   ├── components/  # UI组件
│   ├── pages/       # 页面
│   └── assets/      # 静态资源
├── database/        # 数据库脚本
│   ├── migrations/  # 数据迁移
│   └── seeds/       # 初始数据
└── tests/          # 测试代码
    ├── unit/       # 单元测试
    └── integration/# 集成测试
```

## 开始开发 (Start Development)

1. 在 `natural-language-commands/` 中创建命令文件
2. AI系统将理解您的命令并生成相应代码
3. 生成的代码将自动放置在相应目录中

1. Create command files in `natural-language-commands/`
2. AI system will understand your commands and generate corresponding code
3. Generated code will be automatically placed in appropriate directories

## 注意事项 (Notes)

- 所有生成的代码都会遵循项目的编码规范
- 代码将包含适当的注释和文档
- 测试代码将与功能代码一起生成

- All generated code will follow the project's coding standards
- Code will include appropriate comments and documentation
- Test code will be generated along with feature code
