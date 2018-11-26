<template>
    <div class="about-container">
        <p v-html="parseMarkdown(articleList.content)"></p>
    </div>
</template>
<script>
import request from '@/utils/request'
import parseMarkdown from '@/utils/parseMarkdown'
export default {
    data(){
        return {
            articleList:''
        } 
    },
    mounted(){
        request({
            url:'/about/client/list',
            mothed:'get'
        }).then(({data})=>{
            this.articleList = data[0]
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        parseMarkdown,
    }
}
</script>
<style lang="scss" scoped>

</style>
