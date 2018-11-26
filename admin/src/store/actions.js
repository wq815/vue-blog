import request from '@/utils/request.js'
// actions 可以写异步代码
// mutations 只能写同步代码
// 通常情况下 业务逻辑放在 actions 中
const actions = {
    async saveArticle({state,commit},{id,title,tags,content,isPublished}){
        request({
            url:`/articles/update/${id}`,
            method:'post',
            data:{
                title,
                tags,
                content,
                isPublished,
            }
        }).then(({data})=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
        commit('SET_CURRENT_ARTICLE',{id,title,tags,content,isPublished});
    }
}

export default actions