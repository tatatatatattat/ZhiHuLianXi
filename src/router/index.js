// 引入vue和vue-router 
import Vue from 'vue'
import VueRouter from 'vue-router'

// 按需引入懒加载
const Home = () =>import('../views/Home');
const Find = () =>import('../views/Find');
const HotList = () =>import('../views/HotList');
const Specials = () =>import('../views/Specials');
// import Home from '../views/Home'
// import Find from '../views/Find'
// import HotList from '../views/HotList'
// import Specials from '../views/Specials'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },{
        path:'/home',
        component:Home,
    },{
        path:'/find',
        component:Find,
    },{
        path:'/hotlist',
        component:HotList
    },{
        path:'/specials',
        component:Specials
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router