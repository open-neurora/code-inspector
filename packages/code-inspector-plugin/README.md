<div align="center">
<img src="https://github.com/zh-lx/code-inspector/assets/73059627/842c3e88-dca7-4743-854c-d61093d3d34f" width="160px" style="margin-bottom: 12px;" />

<p align="center">
  <h2>code-inspector</h2>
  <a href="https://inspector.fe-dev.cn">中文文档</a> | <a href="https://inspector.fe-dev.cn/en">Documentation</a>
</p>

[![NPM version](https://img.shields.io/npm/v/code-inspector-plugin.svg)](https://www.npmjs.com/package/code-inspector-plugin)
[![GITHUB star](https://img.shields.io/github/stars/zh-lx/code-inspector?style=flat&label=%E2%AD%90%EF%B8%8F%20stars)](https://github.com/zh-lx/code-inspector)
[![NPM Downloads](https://img.shields.io/npm/dm/code-inspector-plugin.svg)](https://npmcharts.netlify.app/compare/code-inspector-plugin?minimal=true)
[![MIT-license](https://img.shields.io/npm/l/code-inspector.svg)](https://opensource.org/licenses/MIT)
[![GITHUB-language](https://img.shields.io/github/languages/top/zh-lx/code-inspector?logoColor=purple&color=purple)](https://github.com/zh-lx/code-inspector)

</div>

<hr />

## 📖 Introduction

Click the element on the page, it can automatically open the code editor and position the cursor to the source code of the element.

![code-inspector](https://cdn.jsdelivr.net/gh/zh-lx/static-img/code-inspector/demo.gif)

### ✨ New Feature: Floating Ball Mode

The plugin now supports a **floating ball interface** for easier interaction:

- 🎯 **Draggable floating ball** - Position it anywhere on your screen
- 🔄 **Mode switching** - Toggle between "Copy Path" and "Open Editor" modes with a single click  
- 🎨 **Visual feedback** - Different colors and tooltips for each mode
- 💾 **Persistent state** - Remembers your preferred position and mode across sessions

<div align="center">
  <img src="https://user-images.githubusercontent.com/73059627/floating-ball-demo.gif" width="600px" alt="Floating Ball Demo" />
  <p><i>Floating ball interface in action</i></p>
</div>

## 💻 Try it out online

- [vue online demo](https://stackblitz.com/edit/vitejs-vite-4pseos?file=vite.config.ts)
- [react online demo](https://stackblitz.com/edit/vitejs-vite-svtwrr?file=vite.config.ts)
- [preact online demo](https://stackblitz.com/edit/vitejs-vite-iyawbf?file=vite.config.ts)
- [solid online demo](https://stackblitz.com/edit/solidjs-templates-6u76jn?file=vite.config.ts)
- [qwik online demo](https://stackblitz.com/edit/vitejs-vite-antzds?file=vite.config.ts)
- [svelte online demo](https://stackblitz.com/edit/vitejs-vite-zoncqr?file=vite.config.ts)
- [astro online demo](https://stackblitz.com/edit/withastro-astro-f5xq1t?file=astro.config.mjs)

## 🎨 Support

The following are which compilers, web frameworks and editors we supported now:

- **Bundlers**:  
  ✅ webpack | ✅ vite | ✅ rspack | ✅ rsbuild | ✅ farm | ✅ esbuild | ✅ turbopack | ✅ mako

- **Web Frameworks**:  
  ✅ vue2 | ✅ vue3 | ✅ nuxt | ✅ react | ✅ nextjs | ✅ umijs | ✅ preact | ✅ solid | ✅ qwik | ✅ svelte | ✅ astro

- **Code Editors**:  
  [VSCode](https://code.visualstudio.com/) | [Cursor](https://www.cursor.com/) | [Windsurf](https://codeium.com/windsurf) | [WebStorm](https://www.jetbrains.com/webstorm/) | [Atom](https://atom.io/) | [HBuilderX](https://www.dcloud.io/hbuilderx.html) | [PhpStorm](https://www.jetbrains.com/phpstorm/) | [PyCharm](https://www.jetbrains.com/pycharm/) | [IntelliJ IDEA](https://www.jetbrains.com/idea/) | [and Others](https://inspector.fe-dev.cn/en/guide/ide.html)

## 🚀 Install

### Standard Version
```bash
npm i code-inspector-plugin -D
# or
yarn add code-inspector-plugin -D
# or
pnpm add code-inspector-plugin -D
```

### Enhanced Version (with Floating Ball Feature)
For the latest features including the floating ball interface:

```bash
npm i @neurora/code-inspector-plugin -D
# or
yarn add @neurora/code-inspector-plugin -D
# or
pnpm add @neurora/code-inspector-plugin -D
```

## 🌈 Usage

### Quick Setup with Floating Ball

To enable the floating ball feature, add the `behavior` configuration:

```js
// vite.config.js
import { defineConfig } from 'vite';
import { codeInspectorPlugin } from 'code-inspector-plugin';
// or use @neurora/code-inspector-plugin for guaranteed floating ball support

export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Enable floating ball mode
      }
    }),
  ],
});
```

### Configuration Examples

<details>
<summary>Click to expand configuration for: <b>webpack</b></summary>

```js
// webpack.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');

module.exports = () => ({
  plugins: [
    codeInspectorPlugin({
      bundler: 'webpack',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    }),
  ],
});
```

</details>

<details>
<summary>Click to expand configuration for: <b>vite</b></summary>

```js
// vite.config.js
import { defineConfig } from 'vite';
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    }),
  ],
});
```

</details>

<details>
<summary>Click to expand configuration for: <b>rspack</b></summary>

```js
// rspack.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');

module.exports = {
  plugins: [
    codeInspectorPlugin({
      bundler: 'rspack',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    }),
  ],
};
```

</details>

<details>
<summary>Click to expand configuration for: <b>rsbuild</b></summary>

```js
// rsbuild.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');

module.exports = {
  tools: {
    rspack: {
      plugins: [
        codeInspectorPlugin({
          bundler: 'rspack',
          behavior: {
            enable: true,
            enableFloatingBall: true  // Optional: enable floating ball
          }
        }),
      ],
    },
  },
};
```

</details>

<details>
<summary>Click to expand configuration for: <b>esbuild</b></summary>

```js
// esbuild.config.js
const esbuild = require('esbuild');
const { codeInspectorPlugin } = require('code-inspector-plugin');

esbuild.build({
  plugins: [codeInspectorPlugin({ 
    bundler: 'esbuild', 
    dev: () => true,  // Return true in dev, false in production
    behavior: {
      enable: true,
      enableFloatingBall: true  // Optional: enable floating ball
    }
  })],
});
```

</details>

<details>
<summary>Click to expand configuration for: <b>farm</b></summary>

```js
// farm.config.js
import { defineConfig } from '@farmfe/core';
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  vitePlugins: [
    codeInspectorPlugin({
      bundler: 'vite',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    }),
  ],
});
```

</details>

<details>
<summary>Click to expand configuration for: <b>vue-cli</b></summary>

```js
// vue.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');

module.exports = {
  chainWebpack: (config) => {
    config.plugin('code-inspector-plugin').use(
      codeInspectorPlugin({
        bundler: 'webpack',
        behavior: {
          enable: true,
          enableFloatingBall: true  // Optional: enable floating ball
        }
      })
    );
  },
};
```

</details>

<details>
<summary>Click to expand configuration for: <b>nuxt</b></summary>

**For nuxt3.x:**

```js
// nuxt.config.js
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineNuxtConfig({
  vite: {
    plugins: [codeInspectorPlugin({ 
      bundler: 'vite',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    })],
  },
});
```

**For nuxt2.x:**

```js
// nuxt.config.js
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default {
  build: {
    extend(config) {
      config.plugins.push(codeInspectorPlugin({ 
        bundler: 'webpack',
        behavior: {
          enable: true,
          enableFloatingBall: true  // Optional: enable floating ball
        }
      }));
      return config;
    },
  },
};
```

</details>

<details>
<summary>Click to expand configuration for: <b>next.js</b></summary>

**For next.js(<= 14.x):**

```js
// next.config.js
const { codeInspectorPlugin } = require('code-inspector-plugin');

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(codeInspectorPlugin({ 
      bundler: 'webpack',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    }));
    return config;
  },
};

module.exports = nextConfig;
```

**For next.js(15.0.x ~ 15.2.x):**

```js
import type { NextConfig } from 'next';
import { codeInspectorPlugin } from 'code-inspector-plugin';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: codeInspectorPlugin({
        bundler: 'turbopack',
        behavior: {
          enable: true,
          enableFloatingBall: true  // Optional: enable floating ball
        }
      }),
    },
  },
};

export default nextConfig;
```

**For next.js(>= 15.3.x):**

```js
// next.config.js
import type { NextConfig } from 'next';
import { codeInspectorPlugin } from 'code-inspector-plugin';

const nextConfig: NextConfig = {
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    }),
  },
};

export default nextConfig;
```

</details>

<details>
<summary>Click to expand configuration for: <b>umi.js</b></summary>

**With webpack:**

```js
// umi.config.js or umirc.js
import { defineConfig } from '@umijs/max';
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  chainWebpack(memo) {
    memo.plugin('code-inspector-plugin').use(
      codeInspectorPlugin({
        bundler: 'webpack',
        behavior: {
          enable: true,
          enableFloatingBall: true  // Optional: enable floating ball
        }
      })
    );
  },
});
```

**With mako:**

```ts
// .umirc.ts
import { defineConfig } from 'umi';
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  mako: {
    plugins: [
      codeInspectorPlugin({
        bundler: 'mako',
        behavior: {
          enable: true,
          enableFloatingBall: true  // Optional: enable floating ball
        }
      }),
    ],
  },
});
```

</details>

<details>
<summary>Click to expand configuration for: <b>astro</b></summary>

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  vite: {
    plugins: [codeInspectorPlugin({ 
      bundler: 'vite',
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    })],
  },
});
```

</details>

## 🎮 How to Use

### With Floating Ball Mode (New!)
When `enableFloatingBall: true` is configured:

1. A **draggable floating ball** appears on your page
2. **Click the ball** to switch between modes:
   - 📋 **Copy Path Mode** (Blue) - Click elements to copy their source file path
   - 📝 **Open Editor Mode** (Green) - Click elements to open them in your IDE
3. **Drag the ball** anywhere on your screen for convenience
4. Your preferences (position and mode) are saved automatically

### Traditional Keyboard Mode
When using keyboard shortcuts:

1. Press the combination keys (`Option + Shift` on Mac, `Alt + Shift` on Windows)
2. Move your mouse over any element to see its source information
3. Click to open the element in your IDE at the exact line

<img src="https://cdn.jsdelivr.net/gh/zh-lx/static-img/code-inspector/console-success.png" width="700px" />

## 🔧 Configuration Options

```js
{
  bundler: 'vite',              // Required: 'vite' | 'webpack' | 'rspack' | ...
  behavior: {
    enable: true,                // Enable the plugin
    enableFloatingBall: true,    // Enable floating ball UI (new feature!)
    locate: true,                // Show element location on hover
    copy: true,                  // Allow copying file path
  },
  hotKeys: ['altKey', 'shiftKey'], // Customize keyboard shortcuts
  showSwitch: true,             // Show toggle switch in dev tools
  autoToggle: true,             // Auto-enable in development
  hideConsole: false,           // Hide console hints
  dev: true,                    // Enable in development mode
  enforce: 'pre',               // Plugin enforce timing
  importClient: 'es6',          // Import syntax: 'es6' | 'code'
  escapeTags: [],               // Tags to ignore
  pathFormat: ['relative', 'absolute'], // Path format in tooltip
  includeUrl: /\.(vue|jsx|tsx)$/, // Files to include
  excludeUrl: /node_modules/,  // Files to exclude
}
```

## 📦 Package Ecosystem

### Official Packages
- **code-inspector-plugin** - Main plugin package
- **@code-inspector/core** - Core functionality
- **@code-inspector/vite** - Vite integration
- **@code-inspector/webpack** - Webpack integration
- **@code-inspector/esbuild** - Esbuild integration

### Enhanced Packages (with Floating Ball)
- **@neurora/code-inspector-plugin** - Enhanced main plugin with floating ball
- **@neurora/code-inspector-core** - Enhanced core with floating ball support
- **@neurora/code-inspector-vite** - Enhanced Vite integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 👨‍💻 Contributors

Special thanks to the contributors of this project:

<img src="https://contrib.rocks/image?repo=zh-lx/code-inspector" height="40" />

## 📧 Communication and Feedback

For any usage issues, please leave a message below my [Twitter](https://twitter.com/zhulxing312147) post or [submit an issue](https://github.com/zh-lx/code-inspector/issues) on Github.

For Chinese users, you can join the QQ group `769748484` or add the author's WeiXin account `zhoulx1688888` for consultation and feedback:

<div style="display: flex; column-gap: 16px; row-gap: 16px; flex-wrap: wrap;">
  <img src="https://cdn.jsdelivr.net/gh/zh-lx/static-img/code-inspector/qq-group.png" width="200" height="272" />
  <img src="https://cdn.jsdelivr.net/gh/zh-lx/static-img/code-inspector/wx-group.jpg" width="200" height="272" />
  <img src="https://cdn.jsdelivr.net/gh/zh-lx/static-img/code-inspector/wx-qrcode.jpg" width="200" height="272" />
</div>

## 💖 Sponsor

Sponsoring this project can help the author create better. If you are willing, thanks for sponsoring me through [here](https://inspector.fe-dev.cn/en/more/sponsor.html).

## 📄 License

MIT © [zh-lx](https://github.com/zh-lx)

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zh-lx/code-inspector&type=Date)](https://www.star-history.com/#zh-lx/code-inspector&Date)