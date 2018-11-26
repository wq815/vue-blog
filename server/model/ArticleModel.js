import query from '../utils/query'
import escape from '../utils/escape'

class ArticleModel{
    async getAllArticles(){
        return await query(`select * from article order by createTime DESC`)
    }
    async addArticle(){
        return await query(`insert into article set title='新文章',tags='',createTime=NOW(),publishTime=NOW(),content=''`);
    }
    async getOneArticle(id){
        return await query(`select * from article where id='${id}'`)
    }
    async updateArticle(id,{title,tags,content,isPublished}){
        return await query(escape`update article set title=${title},tags=${tags},content=${content},isPublished=${isPublished} where id=${id}`)
    }
    async deleteArticle(id){
        return await query(escape`delete from article where id=${id}`)
    }
    async publishArticle(id){
        return await query(escape`update article set isPublished=1 where id=${id}`)
    }
    async getCountArticle(){
        return await query(escape`select count(*) from article where isPublished=1`)
    }
    async getPublishArticle(offset){
        return await query(escape`SELECT * FROM article WHERE isPublished = 1 ORDER BY publishTime DESC LIMIT ${offset*1},5`)
    }
    async getPublishArticle(){
        return await query(escape`SELECT * FROM article WHERE isPublished = 1 ORDER BY publishTime DESC`)
    }
    async getAboutMe(){
        return await query(escape`select * from about`)
    }
    async getAbout(){
        return await query(escape`select * from about`)
    }
    async updateAbout(id,contents){
        return await query(escape`update about set content=${contents} where id=${id}`)
    }
}

export default new ArticleModel()