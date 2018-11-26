<template>
    <div class="editor">
        <input type="text" id="title" class="title" v-model="title" @input='autosave'>
        <div class="operate-bar" v-show="$route.path == '/list'">
            <section class="tag-container">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href='#icon-tag'></use>
                </svg>
                <ul class="tags">
                    <li class="tag" v-for="(t,index) in getTags" :key="t">
                        <span>{{ t }}</span>
                        <sup @click='deleteTag(index)'>x</sup>
                    </li>
                </ul>
                <input v-if='showTags' class="tag-input" id="tag-input" @keydown.enter="addTag">
                <span v-else class="tag-add" @click='showTags = true'>+</span>
            </section>
            <section class="btn-container">
                <button id="dalete" class="delete" @click='deleteArticle'>删除文章</button>
                <button id="submit" class="not-del" @click='publishArticle'>发布文章</button>
            </section>
        </div>
        <p class="tips">标签查询页面只能批量更改标签，修改的文章内容会自动保存。</p>
        <div class="content">
            <textarea></textarea>
        </div>
    </div>
</template>

<script>
import SimpleMde from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
import {mapState,mapGetters,mapMutations} from 'vuex'
import debounce from 'lodash.debounce'
import request from '@/utils/request'
export default {
    name:'Editor',
    data(){
        return {
            simplemde:'',
            showTags:false
        }
    },
    mounted(){
        this.simplemde = new SimpleMde({
            placeholder:'Talk to me , what are you say...',
            spellChecker:false,
        });
        this.simplemde.codemirror.on('keyHandled', () => this.autosave())
        this.simplemde.codemirror.on('inputRead', () => this.autosave())
    },
    computed:{
        ...mapState(['id','tags','isPublished','content']),
        ...mapGetters(['getTags']),
        title:{
            set(value){
                // this.SET_TITLE(value);
                this.$store.commit('SET_TITLE',value)
            },
            get(){
                return this.$store.state.title
            }
        },
        // tags:{}
    },
    watch:{
        id(){
            this.simplemde.value(this.content);
        },
    },
    methods:{
        ...mapMutations(['SET_TITLE','SET_TAGS','SET_CONTENT']),
        autosave:debounce(function(){
            if(this.id){
                this.$store.dispatch('saveArticle',{
                    id:this.id,
                    content:this.simplemde.value(),
                    tags:this.getTags.join(','),
                    isPublished:this.isPublished,
                    title:this.title
                })
            }
        },1000),
        addTag(){
            if(this.showTags){
                const newTag = document.querySelector('#tag-input')
                if(newTag.value && this.getTags.indexOf(newTag.value) === -1){
                    this.getTags.push(newTag.value);
                    this.autosave();
                }
            }
            this.showTags = false
        },
        deleteTag(index){
            this.getTags.splice(index,1);
            this.autosave();
        },
        deleteArticle(){
            request({
                url:`/articles/del/${this.id}`,
                method:'delete'
            }).then(({data})=>{
                console.log(data)
                this.$store.commit('SET_DELETE_ARTICLE');
            }).catch(err=>{
                console.log(err)
            })
        },
        publishArticle(){
            if(!this.isPublished){
                request({
                    url:`/articles/publish/${this.id}`,
                    method:'put'
                }).then(({data})=>{
                    console.log(data)
                    this.$store.commit('SET_PUBLISH_STATE');
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin-bottom: 0.3em;
    width: 100%;
    height: 2em;
    border: none;
    font-size: 2.4rem;
    color: $title;
    outline: none;
    border-bottom: 1px solid $special;
    background: none;
    text-align: center;
    color: #27ade2
}
.operate-bar {
    @include flex($justify: space-between);
    height: 4em;
    font-size: 1.3rem;
    margin-bottom: 1em;
    .tag-container {
        @include flex($justify: flex-start);
        .icon {
            width: 1.5em;
            height: 1.5em;
            margin-right: 10px;
        }
        .tags {
            @include flex;
            list-style: none;
            margin-right: 10px;
            padding: 0;
            .tag {
                margin-right: 10px;
                color: white;
                position: relative;
                text-align: center;
                &:last-child {
                    margin-right: 0px;
                }
                span{
                    background-color: #27ade2;
                    display: inline-block;
                    padding: 1px 3px;
                    border-radius: 5px;
                }
            }
        }
        .tag-add {
            font: {
                weight: 600;
                size: 1.6rem;
            }
            color: black;
            // text-decoration: underline;
            cursor: pointer;
        }
    }
}
.tips {
    color: $quote;
    text-align: center;
}
.content {
    font-size: 1.6rem;
}
</style>
