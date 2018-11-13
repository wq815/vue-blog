import Router from 'koa-router'
import {base_API} from '../config'
const router = new Router();

// 前端发来的请求都是 http://loaclhost:3000/api/...

router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口服务器'
})

router.prefix(`${base_API}`)
router.get('/index', async ctx=>{
    ctx.body='首页接口'
})

export default router