import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        let doc =await Article.getAllArticles();
        // for(let d of doc){
        //     d.tags = d.tags.split(',')
        // }
        ctx.body = {
            success:true,
            data:doc
        }
    }
    async addArticle(ctx){
        const res = await Article.addArticle();
        ctx.body = res;
    }
    async getOneArticle(ctx){
        const article = await Article.getOneArticle(ctx.params.id);
        ctx.body = article
    }
    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
    async deleteArticle(ctx){
        const id = ctx.params.id
        ctx.body = await Article.deleteArticle(id);
    }
    async publishArticle(ctx){
        const id = ctx.params.id
        ctx.body = await Article.publishArticle(id)
    }
    async getPublishArticle(ctx){
        const offset = ctx.query.offetpage;
        const isPublished = ctx.query.isPublished
        if(isPublished == 1){
            const data = await Article.getPublishArticle(offset)
            const countArticle = await Article.getCountArticle();
            ctx.body = {
                data,
                maxPage:Math.ceil(countArticle[0]['count(*)']/5)
            }
        }else{
            ctx.body = await Article.getPublishArticle()
        }
    }
    async getAboutMe(ctx){
        ctx.body = await Article.getAboutMe()
    }
    async getArticlesByTags(ctx){
        let tags = ctx.request.body;
        let articles = await Article.getAllArticles();
        let articlesshow = [];
        if(tags.length == 0){
            if(ctx.params.id*1){
                ctx.body = []
            }else{
                ctx.body = articles
            }
        }else{
            for(let article of articles){
                for(let tag of tags){
                    if(article.tags.split(',').indexOf(tag)!=-1){
                        articlesshow.push(article)
                        break
                    }
                }
            }
            ctx.body = articlesshow
        }
    }
    async getAbout(ctx){
        ctx.body = await Article.getAbout();
    }
    async updateAbout(ctx){
        ctx.body = await Article.updateAbout(ctx.params.id,ctx.request.body.content)
    }
}

export default new ArticleController()