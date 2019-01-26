import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Welcome from '@/components/welcome'



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

// fecth_menus().then(res=>{
//   // console.log(res.data.data)
//   res.data.data.forEach(i=>{
//     i.children.forEach(v=>{
    
//       const obj = {
//         path:"/"+i.path,
//         component:()=>import(`@/components/${i.path}/${v.path}.vue`)
//       }
      
//       router.options.routes[2].children.push(obj)
//     })
//   });
 
// })
// console.log(router)

// const users={path:'/users',component:Users}

// //添加动态路由并渲染  应该是个数组   放入当前页面所有路由
//导航全局守卫
router.beforeEach(function(to,from,next){
  const token = localStorage.getItem('token')
  if(token){
    next()
  }else{
    if(to.path=='/login'){
      next()
    }else{
      next('/login')
    }
  }
})

export default router
