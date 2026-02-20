import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-service-worker',
      closeBundle() {
        // Kopiraj service worker u dist folder
        try {
          copyFileSync(
            join(__dirname, 'public', 'sw.js'),
            join(__dirname, 'dist', 'sw.js')
          );
        } catch (err) {
          console.warn('Could not copy service worker:', err);
        }
      },
    },
  ],
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': 'http://localhost:3001',
      '/playlist-files': 'http://localhost:3001',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
