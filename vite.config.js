import { defineConfig } from "vite";

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr:
      process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        game: resolve(__dirname, 'game.html'),
        gameover: resolve(__dirname, 'gameover.html'),
        answer: resolve(__dirname, 'answer.html'),
      }
    }
  },

});






