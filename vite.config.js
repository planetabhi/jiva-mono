import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  plugins: [],
  server: {
    port: 3000, 
  },
  base: '/',
  build: {
    outDir: '../dist', 
  },
});