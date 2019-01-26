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

    },
    actions:{
        getmenus(context,arg){
            console.log(arg)
            fecth_menus().then(res=>{
                console.log(res.data.data)
                context.commit('setmenus',res.data.data)
            })
        }
    }

})

export default store