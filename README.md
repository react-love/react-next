# react-next
这是一个next架构为主的react服务端渲染模板，实现了以下功能：

- [x] webpack，包括开发环境下的热更新等功能，以及部署环境下的打包功能
- [x] babelrc配置
- [x] 支持scss
- [x] 支持next-router
- [x] 支持redux
- [x] 支持图片格式文件
- [x] 支持axios
- [x] 支持gzip
- [x] 支持preact，在生产环境中使用

### 服务端渲染

本项目基于服务端渲染

### 客户端渲染
如果你不想使用服务端渲染，可以选择本项目的客户端渲染实现：https://github.com/hyy1115/react-redux-webpack3

### 安装教程
**1、你需要下载本项目，可以fork到你的个人github账号上，然后在你的账号下载项目**

**2、 安装依赖包**
```text
npm install
```

**3、运行项目**
有3个可执行命令，作用都不相同。

在开发环境下，执行：
```text
npm run dev
```

在生产环境下，执行：
```text
npm run build //先打包

npm start //最后运行，你也可以增加pm2的配置
```

##### 后续会发布每个功能的实现教程、以及介绍和客户端渲染的区别。