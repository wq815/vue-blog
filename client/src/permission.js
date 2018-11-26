import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建白名单

router.beforeEach((to,from,next)=>{
    NProgress.start()
    next()
})

router.afterEach(()=>{
    NProgress.done()
})
