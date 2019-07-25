import axios from 'axios'


// 创建http实例
const http = axios.create({
    // 指向接口地址
    baseURL: 'http://localhost:3000/admin/api'
})

// 把http导出一下
export default http