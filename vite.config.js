import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],

  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf'],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three';
            if (id.includes('gsap')) return 'gsap';
            return 'vendor';
          }
          return null;
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
});