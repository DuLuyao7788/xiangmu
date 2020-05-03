<template>
  <div class="pizhun">
    <div class="xiaoshou">本商品由1药网销售和发货。</div>
    <div class="wenhao">
      <span class="exiespan">鄂械注准20172642430</span>
      <div class="wenhao_icon_div">
        <span class="chaxunspan">查询食药局批准文号</span>
        <i class="el-icon-arrow-right el-icon--right arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoosdInfoPiZhun'
}
</script>
<style scoped>
.pizhun{
  width: 41.4rem;
  height: 7.2rem;
  color: #A0A3B3;
  font-size: 1.3rem;
  line-height: 3rem;
  background: #fff;
  border-top: 1px solid #F4F4F6;
}
/* 销售 */
.xiaoshou{
  margin-left: 1rem;
  margin-top: 0.6rem;
}
/* 标注的文号div */
.wenhao{
  display: flex;
  justify-content: space-between;
}
/* 萼谢span文字 */
.exiespan{
  margin-left: 1rem;
}
/* 批准和图标 */
.wenhao_icon_div{
  margin-right: 1rem;
}
/* c查询和图标的span */
.chaxunspan{
  margin-right: 0.3rem;
}
/* 图标的大小 */
.arrow-right{
  font-size: 1.7rem;
}
</style>