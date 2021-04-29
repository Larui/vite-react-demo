## vite+react+ts+antd demo

## 准备工作
升级node到12.x， 升级完node 以后遇到的问题：
1. 最新版的npm会对依赖进行分析， 重复的依赖安装过程会报错 添加 `--force` 强制安装 或者`--legcal-dep`

## 开始步骤
按照官网步骤[中文官网](https://www.pipipi.net/clearvite/guide/#%E6%90%AD%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-vite-%E9%A1%B9%E7%9B%AE) 

`npm init @vitejs/app my-app -- --template react-ts`

```
react-router
redux
antd
axios
less
moment/datejs
```

# 待解决的问题
1. 怎么拆分文件
2. 静态资源引用
3. 如果是多入口打包
4. 性能监测

# 已解决的问题 
1. `Error: esbuild: Failed to install correctly`, 解决办法 `node node_modules/esbuild/install.js`

## 尚未解决
1. webpack.externals 在vite中怎么实现呢？ 或者应该是考虑在rollup中怎么实现， 毕竟vite 主要专注
于生产环境编译；