// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [react()],
  build: {
    manifest: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'AddToCartButtonWidget',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true, 
        manualChunks: undefined,
        entryFileNames: 'AddToCartButtonWidget-[hash].js',

      },
    },
  },
});
