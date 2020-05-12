<template>
  <div class="gouwuchegoods">
   <div class="yanxuandiv">
     <span class="ywyx">药网严选</span>
   </div>
   <!-- 商品介绍 -->
   <div class="goodsContainer">
     <div class="goodsinfo" :style="{height:(item.dec?'32.7rem':'27.2rem')}" v-for="item in gouwuche" :key="item.id">
       <el-image :src="item.img" class="tupian"></el-image>
       <div class="name">{{item.title}}</div>
       <div class="price_gouwuche">
         <span class="price">{{item.money}}</span>
         <div v-if="item.isgouwuche">
           <span v-on:click="click">
             <i class="el-icon-shopping-cart-2 el-icon--right shopping" ></i>
           </span>
         </div>
       </div>
       <div class="goodshuoming" v-if="item.dec">{{item.des}}</div>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  name:'GouWuCheGoods',
  props:{
    gouwuche:{
      type:Array,
      default:function(){
        return[];
      }
    },
    methods: {
      click(){
        console.log(111)
        this.$emit('click')
      }
    },
  }
}
</script>
<style scoped>
/* 购物车的商品 */
.gouwuchegoods{
  width: 41.4rem;
}
/* 药网严选的div */
.yanxuandiv{
  width: 100%;
  text-align: center;
  margin-bottom: 2.8rem;
}
/* 药网严选的文字 */
.ywyx{
  font-size: 1.987rem;
  font-weight: 700;
}
/* 设置商品的总容器 */
.goodsContainer{
  width: 41.4rem;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  background-color: #FBFBFC;
}

/* 商品的div */
.goodsinfo{
  width: 18.4rem;
  height: 29.4rem;
  margin-right: 1rem;
  background-color: #fff;
  margin-bottom: 1rem;
}
/* 设置图片的大小 */
.tupian{
  width: 18.4rem;
  height: 18.4rem;
  border-radius: 5%;
}
/* 商品的名字 */
.name{
  /* margin-left: 1rem;
  margin-right: 1rem; */
  padding: 0 1rem;
  line-height: 1.97rem;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 0.8rem;
}
/* 商品的价钱和购物车 */
.price_gouwuche{
  width: 16.4rem;
  height: 3.3rem;
  line-height: 3.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 0.6rem;
}
/* 设置价钱的文字 */
.price{
  font-size: 1.5rem;
  color: #FF394E;
}
/* 购物车的图标 */
.shopping{
  font-size: 2.5rem;
  color: #FF394E;
}
/* 商品的使用说明 */
.goodshuoming{
  font-size: 1.1rem;
  color: #262D56;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  opacity: .5;
  padding-top: 1.2rem;
  padding-left: 0.9rem;
  padding-right: 0.2rem;
  border-top: 0.1rem solid #eee;
}
</style>