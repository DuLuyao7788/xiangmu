const Koa=require('koa')
// post请求
const PostKoA=require('koa-body')
const cors = require('koa2-cors')

const app=new Koa()
app.use(cors())

const goodRouter=require('./router/good')
app.use(goodRouter.routes())

app.listen(4000,()=>{
  console.log('http://127.0.0.1:4000')
})