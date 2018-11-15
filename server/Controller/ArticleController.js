import Acticle from '../model/ActicleModel'

class ArticleController {
    async getArticles(ctx){
        let doc =await Acticle.getAllArticles();
        ctx.body = {
            success:true,
            data:doc
        }
    }
}

export default new ArticleController()