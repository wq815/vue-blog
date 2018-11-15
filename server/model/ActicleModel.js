import query from '../utils/query'

class ArticleModel{
    async getAllArticles(){
        return await query(`select * from article order by createTime DESC`)
    }
}

export default new ArticleModel()