/// <reference types="vitest" />
import suid from '@suid/vite-plugin';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [suid(), solid()],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
  test: {
    testTransformMode: {
      web: ['*.[jt]sx'],
    },
    deps: { registerNodeLoader: false },
  },
});
