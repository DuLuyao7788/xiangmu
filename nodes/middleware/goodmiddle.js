
//导入中间件
const goodmiddel=require('../model/goodmodel')
// 商品的中间件
module.exports={
  getList: async (ctx,next)=>{
    ctx.good=await goodmiddel.goodList()
    //继续往下执行
    next()
  }
}