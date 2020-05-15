// 路由
const Router=require('@koa/router')
const goodRouter=new Router({
  prefix:'/good'
})
//导入中间件
const {getList}=require('../middleware/goodmiddle')
goodRouter.get(['/','/list'],getList,ctx=>{
  ctx.body=ctx.good
  
})
module.exports=goodRouter