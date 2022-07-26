import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  base: 'https://peawyoyoyin.github.io/cistercian/',
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
