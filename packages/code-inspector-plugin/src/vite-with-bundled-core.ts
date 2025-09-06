// Vite plugin with bundled core to avoid monorepo dependency issues
import type { Plugin } from 'vite';

// Import the bundled core directly
import { 
  transformCode,
  normalizePath,
  getCodeWithWebComponent,
  isJsTypeFile,
  isDev,
  isExcludedFile,
  startServer
} from '../bundled-core/index.mjs';

export function ViteCodeInspectorPluginStandalone(options: any): Plugin {
  const record: any = {
    port: 0,
    entry: '',
    output: options.output || './',
    envDir: '',
  };
  
  return {
    name: '@code-inspector/vite-standalone',
    enforce: options.enforcePre === false ? undefined : 'pre',
    apply(_, { command }) {
      return !options.close && isDev(options.dev, command === 'serve');
    },
    configResolved(config) {
      record.envDir = config.envDir || config.root;
      record.root = config.root;
    },
    async transform(code: string, id: string) {
      if (isExcludedFile(id, options)) {
        return code;
      }

      code = await getCodeWithWebComponent({
        options,
        file: id,
        code,
        record,
      });

      const { escapeTags = [], mappings } = options;
      
      if (!isJsTypeFile(id)) {
        return code;
      }

      const result = await transformCode({
        content: code,
        filePath: id,
        escapeTags,
        mappings,
      });

      return result;
    },
  };
}