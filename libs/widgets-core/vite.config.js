// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      tsconfigPath: "./tsconfig.lib.json",
  }),
  ],
  build: {
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
