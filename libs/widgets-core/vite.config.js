// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'WidgetsCore',
      fileName: (format) => `bundle.${format}.js`,
      formats: ['es'], // Use 'es' to output as an ES module.
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-i18next',
        'i18next',
        '@tanstack/react-query',
      ],
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
});
