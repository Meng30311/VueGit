import Vue from 'vue'
import VueRouter from 'vue-router'
//官方元件

import Home from '@/components/HelloWorld'
import login from '@/components/pages/Login'
//自訂分頁元件
Vue.use(VueRouter);

export default new VueRouter({
   routes:[
       {
           name:'首頁',
           path:'/',
           component:Home
       },
       {
           name:'登入',
           path:'/login',
           component:login 
       },
   ],
});