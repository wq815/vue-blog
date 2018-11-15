import Router from 'koa-router'
import {base_API} from '../config'
import UserController from '../Controller/UserController'
import ArticleController from '../Controller/ArticleController'
const router = new Router();
import checkToken from '../utils/checkToken'

// 前端发来的请求都是 http://loaclhost:3000/api/...

router.get('/',async ctx=>{
    ctx.body = '欢迎使用vue-blog接口服务器'
})

router.prefix(`${base_API}`)
router.post('/login', UserController.login);
router.get('/logout',checkToken,UserController.logout)
router.get('/articles',checkToken,ArticleController.getArticles)

export default router