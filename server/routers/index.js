import Router from 'koa-router'

const router = new Router();

router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口服务器'
})

export default router