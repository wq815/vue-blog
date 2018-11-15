import axios from "axios";
import store from '@/store/'
import {getToken,removeToken} from '@/utils/auth'
import router from '@/router/'
const server = axios.create({
    baseURL:'http://localhost:3000/api',
    timeout:5000
})

server.interceptors.request.use(
    config=>{
        if(store.state.token){
            config.headers['X-Token'] = getToken();
        }
        return config
    },
    error=>{
        Promise.reject(error)
    }
)

server.interceptors.response.use(
    response => {
        let res = response.data
        if(res.code == '401'){
            removeToken();
            store.commit('SET_TOKEN','');
            location.reload();
        }
        return response
    },
    error=>{
        return Promise.reject(error)
    }
)

export default server