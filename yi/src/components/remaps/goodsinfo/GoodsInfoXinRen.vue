<template>
  <div class="xinrendiv">
    <span class="xinrenlispan">新人礼</span>
    <div class="manjiandiv">
      <span class="man1span">满43元减33.1</span>
      <span class="man1span">满99元减8</span>
      <span class="man1span">满199元减10</span>
      <span>满399元减20</span>
      <span>满799元减50</span>
    </div>
    <div class="xinrenlispan">
      <span>领取</span>
      <i class="el-icon-arrow-right el-icon--right arrow-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsInfoXinRen'
}
</script>
<style scoped>
/* 整体的div */
.xinrendiv{
  width: 41.4rem;
  height:6.138rem;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 1.328rem;
}
/* 新人礼span */
.xinrenlispan{
  color: #A0A3b3;
  line-height: 6rem;
}
/* 满减的div */
.manjiandiv{
  width: 28rem;
  color: #FF394E;
  line-height: 6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
  margin-left: -2rem;
}
/* 满减的span1 */
.man1span{
  margin-right: 1rem;
}
/* 领取后面的图标 */
.arrow-right{
  font-size: 1.6rem;
}
</style>