import axios from 'axios'

export function fecth_login(params){
   return axios.post('http://www.lovegf.cn:8888/api/private/v1/login',params)
}