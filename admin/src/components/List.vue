<template>
    <div style="height:100%">
        <div class="list-container main">
            <h2>文章列表 /
                <span>ARTICLE LIST</span>
            </h2>
            <hr>
            <main>
                <div class="article-list">
                    <section class="btn-container">
                        <button id="add" class="not-del" @click="AddArticle">新文章</button>
                    </section>
                    <article-list ref="articleList"></article-list>
                </div>
                <editor></editor>
            </main>
        </div>
    </div>
</template>
<script>
import ArticleList from '@/components/common/ArticleList'
import Editor from '@/components/common/Editor'
import md5 from 'md5'
import request from '@/utils/request'
export default {
    name:'List',
    data(){
        return {
            ArticleList:[]
        }
    },
    methods:{
        AddArticle(){
            request({
                url:'/articles/add',
                method:'post',
                data:{}
            }).then(({data})=>{
                // console.log(data)
                const addId = data.insertId;
                // 调用子组件的 updateArticle 方法更新文章列表
                this.$refs.articleList.updateList(addId);
            }).catch(err=>{
                console.log(err)
            })
        }
    },
    mounted(){
        // console.log(this.$refs.articleList)
    },
    components:{
        ArticleList,
        Editor,
    },
}
</script>
<style lang="scss" scoped>
main {
    @include flex($justify: space-between);
    height: calc(100% - 48px);
    padding: 0.5em 0;
}

.article-list {
    width: 40%;
    height: 100%;
    overflow: auto;
    padding: 0 0.8em 0.5em 0;
    .list {
        // margin: 0;
        padding: 0;
        list-style: none;
    }
}

.editor {
    width: 58%;
    height: 100%;
    padding: 0 0.8em 0.5em 0;
    overflow: auto;
}
</style>
