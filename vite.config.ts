import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => {
            let patch = name === "row" || name === "col" ? "grid" : name;
            return `antd/lib/${patch}/style/index.less`;
          },
        },
      ],
    }),
  ],

  server: {
    open: "/index.html",
    port: 30086,
    proxy: {
      "/api": {
        target: "http://47.99.134.126:28019/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
});
