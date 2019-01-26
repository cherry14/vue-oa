import Vue from 'vue'
import Vuex from 'vuex'
import { fecth_menus } from '@/api';
import router from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        menus:JSON.parse(localStorage.getItem('menus'))||[]
    },
    mutations:{
        setmenus(state,list){
            state.menus=list
            localStorage.setItem('menus',JSON.stringify(list))
            router.push('/welcome')
        }
    },
    getters:{
        //路由规则的组装放到getters中，根据menus菜单那数组确认路由规则
        //从菜单列表转换为路由规则
        menusRouter(state){
            let routes = []
            state.menus.forEach(i=>{
                i.children.forEach(v=>{
                
                  const obj = {
                    path:"/"+i.path,
                    component:()=>import(`@/components/${i.path}/${v.path}.vue`)
                  }
                  routes.push(obj)
                
                })
            });
            // console.log(routes)

            return routes
        }

    },
    actions:{
        getmenus(context,arg){
            // console.log(arg)
            fecth_menus().then(res=>{
                // console.log(res.data.data)
                context.commit('setmenus',res.data.data)
            })
        }
    }

})

export default store