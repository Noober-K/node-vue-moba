import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Main from './views/Main.vue'
import CategoryEdit from './views/CategoryEdit.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: Main,
            children: [
                // 添加子路由，对应组件CategoryEdit
                { path: '/categories/create', component: CategoryEdit }
            ]
        },

    ]
})