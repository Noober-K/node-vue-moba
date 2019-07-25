module.exports = app => {
    const express = require('express')
        // express的子路由
    const router = express.Router()
        // 引用Category模型
    const Category = require('../../models/Category')


    router.post('/categories', async(req, res) => {
        // 需要用到数据库 在index里引用一下数据库

        const model = await Category.create(req.body)
        res.send(model)
    })

    app.use('/admin/api', router)
}