import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve=>{
  require.ensure(['@/components/Home'],()=>{
    resolve(require('@/components/Home'))
  })
}
const GuiDang = resolve=>{
  require.ensure(['@/components/GuiDang'],()=>{
    resolve(require('@/components/GuiDang'))
  })
}
const Tags = resolve=>{
  require.ensure(['@/components/Tags'],()=>{
    resolve(require('@/components/Tags'))
  })
}
const AboutMe = resolve=>{
  require.ensure(['@/components/AboutMe'],()=>{
    resolve(require('@/components/AboutMe'))
  })
}
const ArticleShow = resolve=>{
  require.ensure(['@/components/ArticleShow'],()=>{
    resolve(require('@/components/ArticleShow'))
  })
}

const ReadingList = resolve=>{
  require.ensure(['@/components/ReadingList'],()=>{
    resolve(require('@/components/ReadingList'))
  })
}
const Resume = resolve=>{
  require.ensure(['@/components/Resume'],()=>{
    resolve(require('@/components/Resume'))
  })
}
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/articles',
      component:Home
    },
    {
      path:'/guidang',
      component:GuiDang
    },
    {
      path:'/tags',
      component:Tags
    },
    {
      path:'/aboutme',
      component:AboutMe
    },
    {
      path:'/articleShow/:id',
      component:ArticleShow
    },
    {
      path:'*',
      redirect:{
        path:'/articles',
        query:{
          page:0
        }
      }
    },
    {
      path: '/lists',
      component: ReadingList
    },
    {
      path:'/resume',
      component:Resume
    }
  ]
})
export default router
