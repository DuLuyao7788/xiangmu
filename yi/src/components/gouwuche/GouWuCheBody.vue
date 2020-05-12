<template>
  <div class="gouwuchebody">
    <!-- body的头部 -->
    <div class="body_header">
      <el-image src="/images/gouwuche/gouwucheimg.png"  class="logo"></el-image>
      <div class="gouwuchetishi">购物车还是空的哦~</div>
      <div class="dlbtn">登录并同步购物车商品</div>
    </div>
    <!-- body的内容 -->
    <!-- <div class="body_body">
      <GouWuCheGoods :gouwuche="gouwuche" :click="click"></GouWuCheGoods>
    </div> -->
  </div>
</template>
<script>

export default {
  name:'GouWuCheBody',
  
  data:function(){
    return{
      
    }
  },
  
}
</script>
<style scoped>
/* body的header */
.body_header{
  width: 41.4rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}
/* logo */
.logo{
 width: 18.4rem;
 height: 9.6rem;
}
/* 购物车的提示语句 */
.gouwuchetishi{
  font-size: 1.43rem;
  color: #999;
  margin-top: 2.8rem;
}
/* 登录的按钮 */
.dlbtn{
  width:23.4rem;
  height: 5rem;
  margin: 0 auto;
  font-size: 1.656rem;
  text-align: center;
  line-height: 5rem;
  color: #ffffff;
  background-image: linear-gradient(to right, #5577FB, #738EFC);
  border-radius: 2.66666667rem;
  margin-top: 2.8rem
}
</style>