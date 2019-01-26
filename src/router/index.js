import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Welcome from '@/components/welcome'
import Users from '@/components/users/users'
import { fecth_menus } from '../api';

Vue.use(Router)
const router =new Router({
  routes: [
    {path: '/',component:Login},

    {path: '/login',component:Login},
    {
      path: '/welcome',
      component:Welcome,
      children:[
        // {path:'/users',component:Users}
      ]
    
    }
  ]
})
//路由懒加载  自动遍历渲染 创建路由

fecth_menus().then(res=>{
  // console.log(res.data.data)
  res.data.data.forEach(i=>{
    i.children.forEach(v=>{
      // console.log(v.path)
      //创建路由规则对象
      const obj = {
        path:"/"+i.path,
        component:()=>import(`@/components/${i.path}/${v.path}.vue`)
      }
      
      router.options.routes[2].children.push(obj)
    })
  });
  router.addRoutes(router.options.routes)
})
// console.log(router)

// const users={path:'/users',component:Users}

// //添加动态路由并渲染  应该是个数组   放入当前页面所有路由

export default router
