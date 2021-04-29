## vite+react+ts+antd demo

## 准备工作
升级npm到12.x， 升级完npm 以后遇到的问题：
1. 最新版的npm会对依赖进行分析， 重复的依赖安装过程会报错 添加 `--force` 强制安装 或者`--legcal-dep`

## start
按照官网步骤[中文官网](https://www.pipipi.net/vite/guide/#%E6%90%AD%E5%BB%BA%E7%AC%AC%E4%B8%80%E4%B8%AA-vite-%E9%A1%B9%E7%9B%AE) 

npm init @vitejs/app my-app -- --template react-ts


## issues
1. webpack.externals 在vite中怎么实现呢？ 或者应该是考虑在rollup中怎么实现， 毕竟vite 主要专注
于生产环境编译；