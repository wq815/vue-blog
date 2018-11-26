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
const Tags = resolve=>{
  require.ensure(['@/components/Tags'],()=>{
    resolve(require('@/components/Tags'))
  })
}
const ReadBook = resolve=>{
  require.ensure(['@/components/ReadBook'],()=>{
    resolve(require('@/components/ReadBook'))
  })
}
const About = resolve=>{
  require.ensure(['@/components/About'],()=>{
    resolve(require('@/components/About'))
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
    },
    {
      path:'/tags',
      component:Tags
    },
    {
      path:'/readbook',
      component:ReadBook
    },
    {
      path:'/about',
      component:About
    }
  ]
})

export default router