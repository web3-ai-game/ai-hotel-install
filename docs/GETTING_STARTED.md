# 快速入门指南 (Getting Started Guide)

## 欢迎 (Welcome)

欢迎使用AI Hotel Install！这个指南将帮助您在5分钟内开始使用自然语言编程。

Welcome to AI Hotel Install! This guide will help you start using natural language programming in 5 minutes.

## 第一步：理解概念 (Step 1: Understand the Concept)

自然语言编程让您可以用日常语言描述任务，而不是编写代码。

Natural language programming allows you to describe tasks in everyday language instead of writing code.

### 传统方式 vs 自然语言方式

**传统编程方式 (Traditional Way):**
```python
def create_room_booking(room_id, guest_id, check_in, check_out):
    # 50+ lines of code...
    pass
```

**自然语言方式 (Natural Language Way):**
```
任务: 创建房间预订功能
描述: 让客人可以选择房间、日期并完成预订
预期结果: 
- ✅ 客人可以查看可用房间
- ✅ 可以选择入住和退房日期
- ✅ 系统自动计算价格并确认预订
```

## 第二步：选择模板 (Step 2: Choose a Template)

根据您的任务类型选择合适的模板：

Choose the appropriate template based on your task type:

| 任务类型 | 模板文件 | 适用场景 |
|---------|---------|---------|
| 简单任务 | `simple-task-template.txt` | 单一功能，明确目标 |
| 复杂任务 | `complex-task-template.txt` | 多个步骤，需要拆分 |
| 新功能开发 | `feature-development-template.txt` | 添加新功能模块 |
| 问题修复 | `bug-fix-template.txt` | 修复现有问题 |

## 第三步：创建命令文件 (Step 3: Create Command File)

### 示例：创建客房服务功能

1. 复制简单任务模板：
```bash
cp examples/simple-task-template.txt natural-language-commands/room-service.txt
```

2. 编辑文件内容：
```
任务: 添加客房服务订购功能
Task: Add Room Service Ordering Feature

描述:
创建一个系统让客人可以通过手机或房间平板订购餐饮、洗衣等客房服务。
系统应该支持菜单浏览、下单、支付和订单追踪。

Description:
Create a system that allows guests to order dining, laundry, and other room services 
through mobile phones or in-room tablets. The system should support menu browsing, 
ordering, payment, and order tracking.

预期结果 (Expected Outcomes):
- ✅ 客人可以浏览完整的服务菜单（至少包含餐饮、洗衣、叫醒服务）
- ✅ 支持在线下单并选择送达时间
- ✅ 集成支付系统（支持房费挂账和在线支付）
- ✅ 实时显示订单状态（已下单、准备中、配送中、已完成）
- ✅ 客人可以查看历史订单
- ✅ 酒店员工后台可以接收和处理订单

Expected Outcomes:
- ✅ Guests can browse complete service menu (at least dining, laundry, wake-up service)
- ✅ Support online ordering with delivery time selection
- ✅ Integrated payment system (support room charge and online payment)
- ✅ Real-time order status display (ordered, preparing, delivering, completed)
- ✅ Guests can view order history
- ✅ Hotel staff backend can receive and process orders

依赖 (Dependencies):
setup-hotel-system.txt

优先级 (Priority): 高 (High)
```

3. 保存文件

## 第四步：编写清晰的描述 (Step 4: Write Clear Descriptions)

### ✅ 好的描述特点 (Good Description Characteristics)

1. **具体明确** (Specific and Clear)
   - ❌ "改进用户体验"
   - ✅ "添加搜索框，支持按房间类型、价格范围和日期筛选"

2. **可验证** (Verifiable)
   - ❌ "系统运行良好"
   - ✅ "页面加载时间 < 2秒，支持100并发用户"

3. **包含上下文** (Include Context)
   - ❌ "添加按钮"
   - ✅ "在预订页面添加'取消预订'按钮，点击后显示确认对话框"

### 📝 描述模板 (Description Template)

```
[动作] + [对象] + [方式] + [目的]

示例：
创建 + 预订系统 + 使用Web界面 + 让客人可以在线预订房间

Example:
Create + booking system + using web interface + to allow guests to book rooms online
```

## 第五步：定义预期结果 (Step 5: Define Expected Outcomes)

每个任务都应该有清晰的预期结果，使用 ✅ 标记：

Each task should have clear expected outcomes, marked with ✅:

```
预期结果 (Expected Outcomes):
- ✅ [功能层面] 用户可以成功完成某个操作
- ✅ [性能层面] 响应时间 < X 秒
- ✅ [质量层面] 通过所有测试用例
- ✅ [用户体验] 界面友好，操作简单
```

## 第六步：设置优先级和依赖 (Step 6: Set Priority and Dependencies)

### 优先级设置 (Priority Setting)

- **高 (High)**: 核心功能，必须实现
- **中 (Medium)**: 重要功能，尽快实现
- **低 (Low)**: 可选功能，时间允许时实现

### 依赖管理 (Dependency Management)

如果任务B依赖任务A，需要明确标注：

If task B depends on task A, clearly mark it:

```
依赖 (Dependencies):
- setup-hotel-system.txt (必须先完成)
- configure-database.txt (可选，但建议先完成)
```

## 常见场景示例 (Common Scenario Examples)

### 场景1：创建新功能

```
任务: 添加会员积分系统
描述: 客人消费可以获得积分，积分可以兑换优惠
预期结果:
- ✅ 消费自动累积积分
- ✅ 可以查看积分余额
- ✅ 可以使用积分兑换优惠
```

### 场景2：性能优化

```
任务: 优化数据库查询性能
描述: 当前预订查询速度慢，需要优化
预期结果:
- ✅ 查询响应时间从5秒降到<1秒
- ✅ 支持更多并发查询
- ✅ 不影响现有功能
```

### 场景3：修复问题

```
任务: 修复预订冲突问题
描述: 有时同一房间会被重复预订
预期结果:
- ✅ 同一时间段房间不能重复预订
- ✅ 添加并发控制机制
- ✅ 已有的合法预订不受影响
```

## 最佳实践 (Best Practices)

### 1. 从小开始 (Start Small)
不要一次性创建过于复杂的任务，先从简单的开始。

Don't create overly complex tasks at once, start with simple ones.

### 2. 迭代改进 (Iterate and Improve)
根据结果反馈，逐步优化命令描述。

Gradually optimize command descriptions based on feedback.

### 3. 保持一致 (Stay Consistent)
使用统一的格式和术语，便于理解和维护。

Use consistent format and terminology for easier understanding and maintenance.

### 4. 详细但不冗余 (Detailed but Not Redundant)
提供足够的信息，但避免不必要的重复。

Provide sufficient information but avoid unnecessary repetition.

### 5. 测试驱动 (Test-Driven)
在预期结果中包含具体的测试标准。

Include specific test criteria in expected outcomes.

## 故障排除 (Troubleshooting)

### 问题：任务描述不够清晰

**解决方案 (Solution):**
- 添加更多具体细节
- 使用清单分解任务
- 参考示例模板

### 问题：预期结果难以验证

**解决方案 (Solution):**
- 使用可量化的指标
- 添加具体的测试场景
- 明确成功标准

### 问题：任务之间有依赖

**解决方案 (Solution):**
- 明确标注依赖关系
- 按照依赖顺序执行
- 确保依赖任务已完成

## 下一步 (Next Steps)

1. 阅读完整的[自然语言编程指南](NATURAL_LANGUAGE_PROGRAMMING.md)
2. 查看 `natural-language-commands/` 中的实际例子
3. 创建您的第一个命令文件
4. 开始构建您的AI酒店系统！

---

**祝您编程愉快！Happy coding!** 🚀
