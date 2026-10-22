import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React JavaScript portfolio
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative paths for GitHub Pages deployment
  build: {
    outDir: 'dist',
  },
});
