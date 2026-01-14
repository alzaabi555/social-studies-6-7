
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const root = path.resolve('.');
  const env = loadEnv(mode, root, '');

  return {
    plugins: [react()],
    base: './', 
    resolve: {
      alias: {
        '@': root,
      },
      extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
    },
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1600,
    }
  };
});
