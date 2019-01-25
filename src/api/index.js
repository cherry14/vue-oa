import axios from 'axios'
//设置请求拦截
const token=localStorage.getItem('token')
axios.interceptors.request.use(function(config){
    //config是请求配置对象，里面存储的是有当前请求方法，请求路径，请求头信息
    if(token){
        config.headers.Authorization = token
    }
   
    return config
})
export function fecth_login(params){
   return axios.post('http://www.lovegf.cn:8888/api/private/v1/login',params)
}
export function fecth_menus(){
    return axios.get('http://www.lovegf.cn:8888/api/private/v1/menus')
 }
 export function fecth_users(){
   
 }