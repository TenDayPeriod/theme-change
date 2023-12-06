# 最终目的：**antd动态调整样式**

## 1、项目启动

1. 在终端直接yarn或者yarn install（没有安装yarn需要先安装，具体参考 [yarn的安装](https://yarn.nodejs.cn/en/docs/install#windows-stable)）
2. 终端yarn start

## 2、项目介绍

1、主要使用

- "react": "^18.2.0"
- "antd": "4.22.8"
- "sass": "^1.58.3"
- "typescript": "^5.3.2",
- 其余一些基本上是之前项目直接搬的

2、项目功能参考

1. [antd之外样式改变](https://juejin.cn/post/7134594122391748615?searchId=202312021743052B0545AE67835A1B4675)（原理与方案三类型）
2. [antd样式改变](https://www.jianshu.com/p/13421246b97d)（lessc --js --modify-var="ant-prefix=custom" node_modules/antd/dist/antd.variable.less custom.css   、其中ant-prefix=custom中的custom为需要切换样式的名字）