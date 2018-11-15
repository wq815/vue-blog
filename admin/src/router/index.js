import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve=>{
  require.ensure(['@/components/Login'],()=>{
    resolve(require('@/components/Login'))
  })
}

const List = resolve=>{
  require.ensure(['@/components/List'],()=>{
    resolve(require('@/components/List'))
  })
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/list'
    },
    {
      path: '/login',
      component:Login
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'*',
      redirect:'/list'
    }
  ]
})

export default router