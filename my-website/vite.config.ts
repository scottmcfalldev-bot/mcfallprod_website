import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/my-website/', // Adjust this if your repository name is different
  plugins: [vue()],
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: {
        main: 'index.html', // Entry point for the application
      },
    },
  },
});