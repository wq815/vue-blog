import Router from 'koa-router'
import {base_API} from '../config'
import UserController from '../Controller/UserController'
import ArticleController from '../Controller/ArticleController'
import BookController from '../Controller/BookController'
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
router.post('/articles/add',checkToken,ArticleController.addArticle)
router.get('/articles/:id',checkToken,ArticleController.getOneArticle)
router.post('/articles/update/:id',checkToken,ArticleController.updateArticle)
router.delete('/articles/del/:id',checkToken,ArticleController.deleteArticle)
router.put('/articles/publish/:id',checkToken,ArticleController.publishArticle)
router.get('/articles/client/list',ArticleController.getPublishArticle)
router.get('/about/client/list',ArticleController.getAboutMe)
router.get('/articles/get/:id',ArticleController.getOneArticle)
router.post('/articles/get/tags/:id',checkToken,ArticleController.getArticlesByTags)
router.post('/articles/client/tags/:id',ArticleController.getArticlesByTags)
router.get('/books',BookController.getBook)
router.get('/briefs',checkToken,ArticleController.getAbout)
router.put('/briefs/:id',checkToken,ArticleController.updateAbout)
router.delete('/books/:id',checkToken,BookController.deleteBook)
router.post('/books/add',checkToken,BookController.addBook)
router.put('/books/edit/:id',checkToken,BookController.editBook)
export default router