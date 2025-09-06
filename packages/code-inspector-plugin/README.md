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

- **Draggable floating ball** - Position it anywhere on your screen
- **Mode switching** - Toggle between "Copy Path" and "Open Editor" modes with a single click
- **Visual feedback** - Different colors and tooltips for each mode
- **Persistent state** - Remembers your preferred position and mode across sessions

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

- The following bundlers are currently supported:<br />
  ✅ webpack<br />
  ✅ vite<br />
  ✅ rspack / rsbuild<br />
  ✅ farm<br />
  ✅ esbuild<br />
  ✅ turbopack<br />
  ✅ mako<br />
- The following Web frameworks are currently supported:<br />
  ✅ vue2 / vue3 / nuxt<br />
  ✅ react / nextjs / umijs<br />
  ✅ preact<br />
  ✅ solid<br />
  ✅ qwik<br />
  ✅ svelte<br />
  ✅ astro<br />
- The following code editors are currently supported:<br />
  [VSCode](https://code.visualstudio.com/) | [Cursor](https://www.cursor.com/) | [Windsurf](https://codeium.com/windsurf) | [WebStorm](https://www.jetbrains.com/webstorm/) | [Atom](https://atom.io/) | [HBuilderX](https://www.dcloud.io/hbuilderx.html) | [PhpStorm](https://www.jetbrains.com/phpstorm/) | [PyCharm](https://www.jetbrains.com/pycharm/) | [IntelliJ IDEA](https://www.jetbrains.com/idea/) | [and Others](https://inspector.fe-dev.cn/en/guide/ide.html)

## 🚀 Install

```bash
npm i code-inspector-plugin -D
# or
yarn add code-inspector-plugin -D
# or
pnpm add code-inspector-plugin -D
```

### Alternative Package (with Floating Ball Feature)

For the latest features including the floating ball interface:

```bash
npm i @neurora/code-inspector-plugin -D
# or
yarn add @neurora/code-inspector-plugin -D
# or
pnpm add @neurora/code-inspector-plugin -D
```

## 🌈 Usage

Please check here for more usage information: [code-inspector-plugin configuration](https://inspector.fe-dev.cn/en/guide/start.html#configuration)

### Quick Setup with Floating Ball

To enable the floating ball feature, add the `behavior` configuration:

```js
// vite.config.js
import { defineConfig } from 'vite';
import { codeInspectorPlugin } from 'code-inspector-plugin';
// or use @neurora/code-inspector-plugin for floating ball feature

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

- 1.Configuring Build Tools

  <details>
    <summary>Click to expand configuration about: <b>webpack</b></summary>

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
    <summary>Click to expand configuration about: <b>vite</b></summary>

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
    <summary>Click to expand configuration about: <b>rspack</b></summary>

  ```js
  // rspack.config.js
  const { codeInspectorPlugin } = require('code-inspector-plugin');

  module.exports = {
    // other config...
    plugins: [
      codeInspectorPlugin({
        bundler: 'rspack',
        behavior: {
          enable: true,
          enableFloatingBall: true  // Optional: enable floating ball
        }
      }),
      // other plugins...
    ],
  };
  ```

  </details>

  <details>
    <summary>Click to expand configuration about: <b>rsbuild</b></summary>

  ```js
  // rsbuild.config.js
  const { codeInspectorPlugin } = require('code-inspector-plugin');

  module.exports = {
    // other config...
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
    <summary>Click to expand configuration about: <b>esbuild</b></summary>

  ```js
  // esbuild.config.js
  const esbuild = require('esbuild');
  const { codeInspectorPlugin } = require('code-inspector-plugin');

  esbuild.build({
    // other configs...
    // [注意] esbuild 中使用时，dev 函数的返回值需自己根据环境判断，本地开发的环境返回 true，线上打包返回 false
    plugins: [codeInspectorPlugin({ 
      bundler: 'esbuild', 
      dev: () => true,
      behavior: {
        enable: true,
        enableFloatingBall: true  // Optional: enable floating ball
      }
    })],
  });
  ```

  </details>

  <details>
    <summary>Click to expand configuration about: <b>farm</b></summary>

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
      // ...other code
    ],
  });
  ```

  </details>

  <details>
    <summary>Click to expand configuration about: <b>vue-cli</b></summary>

  ```js
  // vue.config.js
  const { codeInspectorPlugin } = require('code-inspector-plugin');

  module.exports = {
    // ...other code
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
    <summary>Click to expand configuration about: <b>nuxt</b></summary>

  - For nuxt3.x :

    ```js
    // nuxt.config.js
    import { codeInspectorPlugin } from 'code-inspector-plugin';

    // https://nuxt.com/docs/api/configuration/nuxt-config
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

  - For nuxt2.x :

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
    <summary>Click to expand configuration about: <b>next.js</b></summary>

  - For next.js(<= 14.x):

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

  - For next.js(15.0.x ~ 15.2.x):

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

  - For next.js(>= 15.3.x):

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
    <summary>Click to expand configuration about: <b>umi.js</b></summary>

  - With webpack:

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
      // other config
    });
    ```

  - With mako:

    ```ts
    // .umirc.ts
    import { defineConfig } from 'umi';
    import { codeInspectorPlugin } from 'code-inspector-plugin';

    export default defineConfig({
      // other config...
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
    <summary>Click to expand configuration about: <b>astro</b></summary>

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

- 2.Using the function

  Now you can enjoy using it!~

  **With floating ball mode enabled:**
  - A draggable floating ball appears on your page
  - Click the ball to switch between "Copy Path" and "Open Editor" modes
  - In "Copy Path" mode: Click any element to copy its source path
  - In "Open Editor" mode: Click any element to open it in your IDE

  **Traditional keyboard mode:**
  When pressing the combination keys on the page, moving the mouse over the page will display a mask layer on the DOM with relevant information. Clicking will automatically open the IDE and position the cursor to the corresponding code location. (The default combination keys for Mac are `Option + Shift`; for Windows, it's `Alt + Shift`, and the browser console will output related combination key prompts)

  <img src="https://cdn.jsdelivr.net/gh/zh-lx/static-img/code-inspector/console-success.png" width="700px" />

## 👨‍💻 Contributors

Special thanks to the contributors of this project:<br />

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

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=zh-lx/code-inspector&type=Date)](https://www.star-history.com/#zh-lx/code-inspector&Date)