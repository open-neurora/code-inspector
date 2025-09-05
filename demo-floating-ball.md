# 悬浮球模式 - Code Inspector 功能演示

## 新功能概述

Code Inspector 现在支持悬浮球交互模式，提供两种检查模式：
1. **打开编辑器模式** (紫色渐变球) - 点击元素直接在编辑器中打开源代码
2. **复制路径模式** (粉色渐变球) - 点击元素复制文件路径到剪贴板

## 主要特性

### 🎯 模式切换
- 单击悬浮球即可在两种模式间切换
- 不同模式有不同的视觉标识（颜色和图标）
- 模式状态自动保存到 localStorage

### 🖱️ 可拖拽
- 悬浮球可自由拖拽到屏幕任意位置
- 位置会自动保存，刷新页面后记住位置
- 拖拽时有视觉反馈（光标变化）

### 📋 复制路径功能
- 在复制路径模式下，点击元素会复制完整路径
- 显示"路径已复制到剪贴板"的友好提示
- 适合分享代码位置或记录文档

### 🎨 视觉反馈
- 编辑模式：紫色渐变背景 + 编辑图标
- 复制模式：粉色渐变背景 + 复制图标
- 平滑的过渡动画效果

## 使用方式

### 在 Vite 项目中启用

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import CodeInspectorPlugin from 'code-inspector-plugin'

export default defineConfig({
  plugins: [
    CodeInspectorPlugin({
      bundler: 'vite',
      // 启用悬浮球模式
      behavior: {
        enableFloatingBall: true
      }
    })
  ]
})
```

### 在 Webpack 项目中启用

```javascript
// webpack.config.js
const CodeInspectorPlugin = require('code-inspector-plugin')

module.exports = {
  plugins: [
    CodeInspectorPlugin({
      bundler: 'webpack',
      behavior: {
        enableFloatingBall: true
      }
    })
  ]
}
```

## 向后兼容

- 默认情况下，悬浮球功能是启用的
- 可通过配置 `enableFloatingBall: false` 回退到原有行为
- 原有的热键触发方式仍然可用

## 技术实现细节

### 状态管理
- 使用 Lit 的响应式状态管理模式状态和位置
- localStorage 持久化用户偏好

### 事件处理
- 悬浮球事件独立于原有的元素检查事件
- 防止事件冲突和冒泡

### 样式隔离
- 使用内联样式确保不影响页面原有样式
- 高 z-index 确保悬浮球始终在最上层

## 测试场景

1. **基础功能测试**
   - 点击悬浮球切换模式
   - 拖拽悬浮球到不同位置
   - 刷新页面验证状态持久化

2. **模式功能测试**
   - 编辑模式：点击元素打开编辑器
   - 复制模式：点击元素复制路径

3. **兼容性测试**
   - 测试在不同框架项目中（Vue, React, Svelte等）
   - 测试在不同打包工具中（Vite, Webpack, Rspack等）