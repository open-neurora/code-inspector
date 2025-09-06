import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['src/index.ts'],
      formats: ['cjs', 'es'],
      fileName: '[name]',
      name: 'CodeInspectorPlugin',
    },
    minify: true,
    emptyOutDir: false,
    rollupOptions: {
      external: [
        '@neurora/code-inspector-core',
        '@neurora/code-inspector-vite',
        '@code-inspector/webpack',
        '@code-inspector/esbuild',
        '@code-inspector/turbopack',
        '@code-inspector/mako',
        'chalk',
        'path',
      ],
    },
    target: ['node8', 'es2015'],
  },
});
