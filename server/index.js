import koa from 'koa'
import cors from 'koa-cors'
import bodyparser from 'koa-bodyparser'

import router from './routers/'

import query from './utils/query'

const app = new koa();
app.use(cors()).use(bodyparser()).use(router.routes())

console.log('sadasddds')

app.listen(3000,()=>{
    console.log('run....')
})