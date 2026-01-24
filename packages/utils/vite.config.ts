import path from 'path';
import { defineConfig, type PluginOption } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*', 'index.ts'],
      tsconfigPath: 'tsconfig.json',
    }) as PluginOption,
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
      },
      name: '@inf-lib-test/utils',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
});
