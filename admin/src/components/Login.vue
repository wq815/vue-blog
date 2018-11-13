<template>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
    </svg>
</template>
<script>
import request from '@/utils/request'
export default {
    name:'Login',
    data(){
        return{
        }
    },
    mounted(){
        request.get('/index').then(res=>{
            console.log(res.data)
        })
    }
}
</script>
<style scoped>

</style>
