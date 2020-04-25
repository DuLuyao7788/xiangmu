<template>
  <div>
     <div class="taocanggood" v-for="taocan in taocanggood" :key="taocan.index">
          <el-row type="flex">
            <el-col :span="10" class="col-image">
              <el-image :src="taocan.img"></el-image>
            </el-col>
            <el-col :span="14" class="col-msg">
              <h3 class="productEx2-name">{{taocan.name}}</h3>
              <p class="productEx2-des">{{taocan.des}}</p>
              <div class="div-money_gouwuche">
                <span class="productEx2-money">{{taocan.money}}</span>
                <div class="gouwuchediv">
                  <i class="el-icon-shopping-cart-2 el-icon--right gouwuche"></i>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
  </div>
</template>
<script>
export default {
  name:"RemapsBodyTaoCang",
  props:{
    taocanggood:{
      type:Array,
      default:function(){
        return[];
      }
    }
  }
}
</script>
<style scoped>
/* 套餐优选的商品图片 */
.col-image{
  width: 12.364rem;
  height: 12.364rem;
  margin-left: 1rem;
  margin-right: 2.9rem;
  border: 0.2rem solid rgb(251, 110, 110);
}
/* 套餐优选的具体信息 */
.col-msg{
  width: 23.5rem;
  height: 13.2rem;
  padding: 1.52rem 0;
  border-bottom: 1px solid rgba(0,0,0,.1)
}
/* 套餐优选的商品描述 */
.productEx2-des{
  width: 23.5rem;
  color: #999;
  font-size: 1.345rem;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin-top: -1rem;
}
/* 套餐优选的商品name */
.productEx2-name{
  font-size: 1.8rem;
  width: 23.5rem;
  height: 4.195rem;
  color: #212121;
  font-weight: 400;
  margin-top: -0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
/* 套餐优选的商品money */
.productEx2-money{
  font-size: 1.8rem;
  color: #F75F5D;
}
/* 套餐优选的价钱和购物车 */
.div-money_gouwuche{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -0.6rem;
}
/* 购物车图标的div设置margin-top */
.gouwuchediv{
  margin-top: 0.5rem;
}
/* 购物车的图标 */
.gouwuche{
  width: 3.09rem;
  height: 3.09rem;
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  line-height: 3.09rem;
  background-color: #FB6E6E;
}
</style>