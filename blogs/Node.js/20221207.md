---
title: 在 Node.js 中使用 ES Modules 特性
date: 2022-12-07
tags:
  - Node.js
categories:
  - Node.js
---

## node 模块机制

早期 Node.js 的模块标准采用 CommonJS 模块规范，在后续的版本更新中，开始支持 ES Modules 模块规范。有几种方式在 Node.js 中使用 ES Modules 模块：

  - 将文件后缀名改为 .mjs
  - package.json 新增 "type": "module" 字段

## ES Modules 和 CommonJS 的相互引用

ESM 是编译时加载（静态加载）,它的加载、解析、执行是异步的。CJS 是运行时加载（动态加载），它的加载、解析、执行是同步的（require() 是一个同步方法）。

### CJS 模块加载 ESM 模块

由于 ESM 为异步加载，CJS 为同步加载，所以不能用 require() 去加载 ESM 模块，只能用同是异步加载且支持 CJS 以及 ESM 的 import() 来加载。

```JavaScript
// import() 返回一个 Promise
import('...').then(res => {});

(async () => {
  await import('...')
})();
```

### ESM 模块加载 CJS 模块

ESM 的 import 可以直接加载 CJS 模块，但只能整体加载。

```JavaScript
import m from '...';
const { o } = m;
```

## ES Modules 注意事项

为了使 ES Modules 能不做修改就在服务器和浏览器端通用，Node.js 规定 ES Modules 中不能使用一些 Node.js 中的内部变量，比如：

  - require
  - __dirname
  - __filename