<template>
    <ul class="list">
        <li class="article" :class="{active: activeIndex === index, published: isPublished === 1}" v-for="({title, createTime, isPublished,isChosen},index) in articleList" :key="index" @click="select(index)" v-if='isChosen'>
            <header>{{ title }}</header>
            <p>{{ createTime }}</p>
        </li>
    </ul>
</template>

<script>
import moment from 'moment'
import {mapMutations, mapState, mapActions} from 'vuex'
import request from '@/utils/request'

// moment.locale('zh-CN')
export default {
    data() {
        return {
            articleList: [],
            activeIndex:-1
        }
    },
    created() {
        request.get('/articles')
            .then(({data}) => {
                for (let article of data.data) {
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                    article.isChosen = true
                }
                this.articleList.push(...data.data)
                this.activeIndex = 0;
                if(this.articleList.length !== 0){
                    this.SET_CURRENT_ARTICLE(this.articleList[this.activeIndex])
                }
            })
            .catch(err => {
                console.log(err)
            })
    },
    methods: {
        updateList(updateId){
            request({
                url:`/articles/${updateId}`,
                method:'get'
            }).then(({data})=>{
                console.log(data)
                const article = data[0];
                article.createTime = moment(article.createTime).format('YYYY年 MM月 DD日 HH:mm:ss');
                article.isChosen = true;
                this.articleList.unshift(article);
                this.activeIndex++;
            }).catch(err=>{
                console.log(err)
            })
        },
        select(index){
            this.activeIndex = index;
            this.SET_CURRENT_ARTICLE(this.articleList[index])
        },

        ...mapMutations(['SET_CURRENT_ARTICLE']),
        
        showArticlesList(val){
            request({
                url:'/articles/get/tags/0',
                method:'post',
                data:val
            }).then(({data})=>{
                for (let article of data) {
                    article.createTime = moment(article.createTime).format('YYYY年 MMM DD日 HH:mm:ss')
                    article.isChosen = true
                }
                this.articleList = data
                this.activeIndex = 0;
                if(this.articleList.length !== 0){
                    this.SET_CURRENT_ARTICLE(this.articleList[this.activeIndex])
                }
            }).catch(err=>{
                console.log(err)
            })
        },
    },
    // 引入 vuex 中的全局变量，和 mutations 中的方法，要放到计算属性中
    computed: {
        ...mapState(['id','title', 'tags', 'content', 'isPublished', 'toggleDelete']),
    },
    watch: {
        title(val){
            this.articleList[this.activeIndex].title = val;
        },
        tags(val){
            this.articleList[this.activeIndex].tags = val;
        },
        content(val){
            this.articleList[this.activeIndex].content = val;
        },
        isPublished(val){
            this.articleList[this.activeIndex].isPublished = val;
        },
        toggleDelete(val){
            this.articleList.splice(this.activeIndex,1)
            if(this.activeIndex == this.articleList.length){
                this.activeIndex--
            }
            if(this.articleList.length !== 0){
                this.SET_CURRENT_ARTICLE(this.articleList[this.activeIndex])
            }else{
                this.SET_CURRENT_ARTICLE({
                    id:'',
                    title:'',
                    tags:'',
                    content:'',
                    isPublished:''
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.article {
    @include flex($flow: column wrap, $align: flex-start);
    padding: 0.2em 0.5em;
    margin-bottom: 1.5em;
    height: 5em;
    max-width: 100%;
    background: $white;
    border: 0.1em solid $special;
    cursor: pointer;
    header {
        max-width: 100%;
        font-size: 1.3rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.2em;
    }
    p {
        margin: 0;
        color: $special;
    }
    &:last-child {
        margin-bottom: 0;
    }
}

.active {
    border: 1px solid $base;
}

.published {
    border-right: 4px solid $base;
}
</style>
