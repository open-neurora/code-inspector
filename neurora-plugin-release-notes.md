# @neurora/code-inspector-plugin v1.3.0 发布说明

## 🎉 发布成功！

包已成功发布到 npm: **@neurora/code-inspector-plugin@1.3.0**

## 📦 安装方式

```bash
npm install @neurora/code-inspector-plugin --save-dev
# 或者
pnpm add @neurora/code-inspector-plugin -D
# 或者
yarn add @neurora/code-inspector-plugin --dev
```

## ✨ 新功能：悬浮球交互模式

### 主要特性
1. **悬浮球 UI** - 可拖拽的悬浮球界面
2. **双模式切换**：
   - **编辑模式**（紫色）- 点击元素打开编辑器
   - **复制模式**（粉色）- 点击元素复制路径
3. **状态持久化** - 记住模式和位置
4. **视觉反馈** - 不同模式有不同的提示文本

## 🔧 使用配置

### Vite 项目

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import CodeInspectorPlugin from '@neurora/code-inspector-plugin'

export default defineConfig({
  plugins: [
    CodeInspectorPlugin({
      bundler: 'vite',
      // 新功能默认启用，也可显式配置
      behavior: {
        enableFloatingBall: true  // 启用悬浮球（默认为 true）
      }
    })
  ]
})
```

### Webpack 项目

```javascript
// webpack.config.js
const CodeInspectorPlugin = require('@neurora/code-inspector-plugin')

module.exports = {
  plugins: [
    CodeInspectorPlugin({
      bundler: 'webpack',
      behavior: {
        enableFloatingBall: true  // 启用悬浮球
      }
    })
  ]
}
```

### Next.js 项目

```javascript
// next.config.js
const { codeInspectorPlugin } = require('@neurora/code-inspector-plugin')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      codeInspectorPlugin({
        bundler: 'webpack',
        behavior: {
          enableFloatingBall: true
        }
      })
    )
    return config
  }
}
```

## 🧪 测试步骤

1. **安装插件**
   ```bash
   npm install @neurora/code-inspector-plugin@1.3.0 --save-dev
   ```

2. **配置项目**
   根据你的打包工具（Vite/Webpack等）添加配置

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **测试功能**
   - 页面右侧应显示一个悬浮球
   - 单击悬浮球切换模式（颜色变化）
   - 拖拽悬浮球到任意位置
   - 鼠标悬停在元素上查看不同模式的提示文本
   - 编辑模式下点击元素 → 打开编辑器
   - 复制模式下点击元素 → 复制路径到剪贴板

## 📝 版本变更

- **v1.3.0** - 新增悬浮球交互模式
  - 添加可拖拽悬浮球 UI
  - 支持编辑/复制双模式切换
  - 修复复制路径格式问题
  - 动态更新工具提示文本

## 🔄 向后兼容

- 完全向后兼容，默认启用新功能
- 可通过 `enableFloatingBall: false` 禁用悬浮球
- 原有的热键触发方式仍然可用

## 🐛 已知问题

如发现任何问题，请反馈具体的：
- 使用的框架和版本
- 配置方式
- 错误信息或异常行为

## 📊 验证检查清单

- [ ] 悬浮球是否显示
- [ ] 点击切换模式是否有颜色变化
- [ ] 拖拽功能是否正常
- [ ] 编辑模式点击是否打开编辑器
- [ ] 复制模式点击是否复制路径
- [ ] 刷新页面后位置和模式是否保持