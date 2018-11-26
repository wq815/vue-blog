import router from '@/router'
import NProgress from 'nprogress'
import {getToken} from '@/utils/auth'
import 'nprogress/nprogress.css'

// 创建白名单
const whiteList = ['/login']

router.beforeEach((to,from,next)=>{
    NProgress.start()
    if(getToken()){
        if(to.path == '/login'){
            next({path:'/list'})
            NProgress.done();
        }else{
            next();
        }
    }else{
        console.log(whiteList.indexOf(to.path))
        if(whiteList.indexOf(to.path) !== -1){
            next();
        }else{
            next({path:'/login'});
            NProgress.done();
        }
    }
})

router.afterEach(()=>{
    NProgress.done()
})
