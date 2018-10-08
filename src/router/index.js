import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/access/login.vue';
import Home from '../components/home';//主页
import NotFound from '../components/NotFound';//404

Vue.use(Router)
const vueRouter = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/access',
    },
    {
      path:'/access',
      name:'login',
      component:Login,
    },
    {
      path:'/home',
      name:'home',
      component:Home,
    },
    {
      path: '*', //404
      component: NotFound
    },
  ]
})

export default vueRouter
