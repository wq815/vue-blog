import {getToken} from '@/utils/auth'
const state = {
    token:getToken(), // 登录凭证
    username:'', // 登录的用户名
    id:'', // 文章 id
    title:'', // 文章标题
    tags:'', // 文章标签
    content:'', // 文章内容
    isPublished:'', // 文章是否发布
    toggleDelete:false // 文章是否删除
}

export default state