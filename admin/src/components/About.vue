<template>
    <div class="about-container main">
        <h2>关于我 /
            <span>ABOUT ME</span>
        </h2>
        <hr>
        <main>
            <textarea></textarea>
            <section class="btn-container">
                <button class="not-del" @click="updateAbout">提交修改</button>
            </section>
        </main>
    </div>
</template>

<script>
/**
 * @author
 * @file 关于我的后台管理组件
 * */

import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde'
import request from '@/utils/request' 

export default {
    data() {
        return {
            id: '',
            simplemde: ''
        }
    },
    mounted() {
        this.simplemde = new SimpleMDE({
            autoDownloadFontAwesome: false,
            spellChecker: false
        })
        request.get('/briefs')
            .then(({data}) => {
                this.id = data[0].id
                this.simplemde.value(data[0].content)
            })
    },
    methods: {
        updateAbout() {
            request({
                url:`/briefs/${this.id}`,
                method:'put',
                data:{
                    content:this.simplemde.value()
                }
            }).then(({data})=>{
                console.log(data)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    height: calc(100% - 48px);
    padding: 0.5em 0;
    overflow: auto;
    font-size: 1.6rem;
}

.btn-container {
    @include flex($justify: flex-end);
}
</style>
