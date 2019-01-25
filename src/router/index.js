import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Welcome from '@/components/welcome'
import Users from '@/components/users/users'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component:Login},

    {path: '/login',component:Login},
    {
      path: '/welcome',
      component:Welcome,
      children:[
        {path:'/users',component:Users}
      ]
    
    }
  ]
})