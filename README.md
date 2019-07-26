# BlogApp
基于 React, Redux, Express, Nodejs, GraphQL 等实现的 Blog App，Blog APP 分为前端 ， 中间层， 后端三层
![](https://github.com/sundial-dreams/BlogApp/blob/master/blog%20app.png?raw=true)
### 基本架构
+ 前端：Nextjs React Redux 等， 以及Apollo Client来做graphQL查询
+ 中间层: Express + GrapgQL提供GraphQL查询服务
+ 后端: Express + TypeSrtipt 开发，数据库使用Mysql

### 运行效果(或者点击[这里](codejs.net.cn:8080)查看）
+ 运行效果
![](https://github.com/sundial-dreams/BlogApp/blob/master/2019-07-26_23-16-46.gif?raw=true)
+ 首页
![](https://github.com/sundial-dreams/BlogApp/blob/master/chrome_2019-07-26_23-18-51.jpg?raw=true)
+ 发布文章
![](https://github.com/sundial-dreams/BlogApp/blob/master/chrome_2019-07-26_23-20-28.jpg?raw=true)
+ 浏览文章
![](https://github.com/sundial-dreams/BlogApp/blob/master/chrome_2019-07-26_23-20-57.jpg?raw=true)

### 项目运行
+ 运行客户端
  1. 进入BlogAppClient，执行```yarn```安装依赖
  2. 运行```yarn dev-next```，即可以开发模式运行项目
  3. 生产模式执行```yarn build && yarn start-next -p 80```
+ 运行GraphQL中间层
  1. 进入BlogAppGraphQL，执行```yarn```安装依赖
  2. ```yarn dev```以开发模式运行，生产模式使用```yarn start```
+ 运行服务端
  1. 进入BlogAppServer，执行```yarn```安装依赖
  2. ```yarn dev```以开发模式运行，```yarn product```以生产模式运行
