import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
//   pages: {
//     index:{
//       entry: 'src/main.js',
//       title: import.meta.env.VIT_APP_NAME
//       // title: process.env.VUE_APP_NAME
//       //  ? process.env.VUE_APP_NAME
//     }
});