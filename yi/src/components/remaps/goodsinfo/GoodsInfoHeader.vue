<template>
  <div class="goodsinfodiv">
    <el-image src="/images/remaps/goodsinfo/logo.png" class="logoimg"></el-image>
    <span class="appspan">使用App享受更多优惠</span>
    <div class="lijixiazai">立即下载</div>
  </div>
</template>
<script>
export default {
  name:'GoodsInfoHeader'
}
</script>
<style scoped>
/* 这个div */
.goodsinfodiv{
  width: 41.4rem;
  height: 6.8rem;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* logo的span */
.logoimg{
  width: 4.8rem;
  height: 4.8rem;
  margin-left: 2rem;
  margin-top: 1rem;
}
/* 使用app */
.appspan{
  margin-left: -4.5rem;
  display: inline-block;
  font-size: 1.546rem;
  margin-top: 2.5rem;
}
.lijixiazai{
  width: 10rem;
  height: 3.3rem;
  background: linear-gradient(132deg,#5577fb,#738efc);
  border-radius: 4.56rem;
  display: inline-block;
  color: white;
  font-size: 1.5rem;
  text-align: center;
  line-height: 3.3rem;
  margin-top: 2rem;
}
</style>