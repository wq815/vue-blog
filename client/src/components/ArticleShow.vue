<template>
    <article>
        <header>
            <h1>{{ article.title }}</h1>
            <h4 class="time">{{ article.publishTime }}</h4>
            <h4>
                <span class="tag" v-for="(tag,index) in article.tags" :key="index">{{ tag }}</span>
            </h4>
        </header>
        <p v-html="parseMarkdown(article.content)"></p>
    </article>
</template>
<script>
import request from '@/utils/request'
import moment from 'moment'
import parseMarkdown from "@/utils/parseMarkdown";
export default {
    mounted(){
        request({
            url:`/articles/get/${this.$route.params.id}`,
            method:'get'
        }).then(({data})=>{
            console.log(data)
            data[0].publishTime = moment(data[0].publishTime).format('YYYY年M月D日 h:m')
            data[0].tags = data[0].tags.split(',')
            this.article = data[0]
        }).catch(err=>{
            console.log(err)
        })
    },
    data(){
        return {
            article:''
        }
    },
    methods:{
        parseMarkdown
    }
}
</script>
<style lang="scss" scoped>
.tag {
    color: $quote;
    margin-right: 1em;
}
pre{
    background-color:rgba(248, 248, 248,.5); 
}
</style>
