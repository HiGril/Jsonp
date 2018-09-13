import Router from "vue-router"
import Vue from "vue"
Vue.use(Router)

//引入进度条
import Nprogress from "nprogress"
import "nprogress/nprogress.css"


import home from "../components/home"

const router = new Router({
    mode: "history", //去除利用哈希路由产生的#

    routes: [
        {
            path: "/",
            name: "home", 
            component: home,
            meta: { title: "首页" }
        },
        {
            path: "/about/:id",
            name: "about",
            meta: { title: "详情页" },
            component: () => import("../components/about"), 
        },
        { 
            path: "/login", 
            name: "login", 
            meta: { title: "登录页" } ,
            component: () => import("../components/login")
        },
            
        {
            path: "/main",
            name:"main",
            redirect: "/main/home",
            component: () => import("../views/Layout/index"),
            children: [
                //    /main/home
                { 
                    name: "home1",
                    path: "home",
                    meta: { title: "首页" }, //在浏览器的标题头
                    component: home, 
                 },

                //    /main/about/:id
                {
                    path: "about/:id",
                    name: "about1", 
                    meta: { title: "详情页" },
                    component: () => import("../components/about")
                },

                //   /main/login

                {
                    path: "login",
                    name: "login1", 
                    meta: { title: "登录页" },
                    component: () => import("../components/login")
                 },


            ]
        }

    ],
})
router.beforeEach((to, from, next) => {
    Nprogress.start()
    if (to.meta && to.meta.title) {
        document.title = to.meta.title
    }
    next()
}),
    router.afterEach((to, from) => {
        Nprogress.done()
    })
export default router