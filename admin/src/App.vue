<template>
  <div id="app">
    <template v-if="isLogin">
      <header-nav></header-nav>
      <Aside></Aside>
    </template>
    <router-view/>
    <div id="backimg"></div>
  </div>
</template>

<script>
import Aside from '@/components/common/Aside'
import HeaderNav from '@/components/common/HeaderNav'
export default {
  name: 'App',
  components:{
    Aside,
    HeaderNav
  },
  data(){
    return{
      isLogin:false
    }
  },
  watch:{
    $route(val){
      this.isLogin = val.path != '/login'
    }
  }
}
</script>

<style>
</style>
