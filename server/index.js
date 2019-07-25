// 安装常用的模块  npm i express@next
// @next表示下一个版本
// npm i mongoose 数据库
// npm i cors 跨域请求
// 可以一起安装 npm i express@next mongoose cors

// 引入express
const express = require("express")
    // 定义一个express的实例
const app = express()

// 中间件
// 引入跨域模块，并直接使用
app.use(require('cors')())
app.use(express.json())

// 引用数据库
require('./plugins/db')(app)
    // 这样在admin/index.js里就可以直接使用app
require('./routes/admin')(app)


// app.listen启动
// 在3000端口定义一个实例，执行、、、
app.listen(3000, () => {
    console.log('http://localhost:3000');
});