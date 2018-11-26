const mutations = {
    SET_TOKEN:(state,token)=>{
        state.token = token
    },
    SET_NAME:(state,username)=>{
        state.username = username
    },
    // 设置当前正在编辑的文章，存放在 vuex 当中
    SET_CURRENT_ARTICLE:(state,{id,title,tags,content,isPublished})=>{
        state.id = id;
        state.title = title;
        state.tags = tags;
        state.content = content;
        state.isPublished = isPublished;
    },
    // 文章是否删除
    SET_DELETE_ARTICLE:(state)=>{
        state.toggleDelete = !state.toggleDelete;
    },
    // 文章是否发布
    SET_PUBLISH_STATE:(state)=>{
        state.isPublished = 1;
    },
    SET_TITLE:(state,title)=>{
        state.title = title
    },
    SET_TAGS:(state,tags)=>{
        state.tags = tags.join(',')
    },
    SET_CONTENT:(state,content)=>{
        state.content = content
    }
}

export default mutations