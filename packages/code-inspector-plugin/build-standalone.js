// Build script to create a standalone version with bundled core
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildStandalone() {
  console.log('Building standalone version with bundled core...');
  
  await build({
    configFile: false,
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'CodeInspectorPlugin',
        formats: ['es', 'cjs'],
        fileName: (format) => `standalone.${format === 'es' ? 'mjs' : 'js'}`
      },
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
        external: [
          'vite',
          'webpack', 
          'esbuild',
          'path',
          'fs',
          'chalk',
          'dotenv',
          'launch-ide'
        ],
        output: {
          globals: {
            vite: 'vite',
            webpack: 'webpack',
            path: 'path',
            fs: 'fs',
            chalk: 'chalk'
          }
        }
      },
      minify: false
    }
  });
  
  console.log('✅ Standalone build complete!');
}

buildStandalone().catch(console.error);