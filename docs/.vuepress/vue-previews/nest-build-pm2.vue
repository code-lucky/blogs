// 1、打包
npm run build
//2、创建
在宝塔文件"/www/wwwroot/"下创建一个文件,将打包的服务器代码放进去
//3、打开pm2管理器，添加你的项目

如果管理器启动项目失败，请使用以下手动启动

$ cd /www/wwwroot/nest
$ cnpm install
$ npm install
$ npm run build
$ node dist/main.js // 先测试运行是否有错误
$ pm2 start npm --name nest -- run start // pm2管理项目，直接在服务端跑起来
