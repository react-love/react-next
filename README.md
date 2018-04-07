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

### 服务端渲染

本项目基于服务端渲染

### 客户端渲染
如果你不想使用服务端渲染，可以选择本项目的客户端渲染实现：https://github.com/hyy1115/react-redux-webpack3

### 安装教程
**1、你需要下载本项目，可以fork到你的个人github账号上，然后在你的账号下载项目**

**2、 安装依赖包**
```text
npm install && yarn
```

**3、运行项目**
有5个可执行命令，作用都不相同。

#### 1、在开发环境下，执行：
```text
npm run dev
```

#### 2、在生产环境下，执行：

**打包**

```text
npm run build //这是普通打包

npm run build-analyze //这是带有分析模块的打包
```

**启动服务**
```text
npm start //最后运行

npm run stop //停止服务
```

### 教程

前往：[本项目使用教程文档][1]

[1] https://github.com/hyy1115/react-next/blob/master/doc/%E6%95%99%E7%A8%8B.md