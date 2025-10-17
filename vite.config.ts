import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages under a repo (username/repo),
  // set the base to '/repoName/' so asset URLs are correct.
  base: '/mcfallprod_website/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
