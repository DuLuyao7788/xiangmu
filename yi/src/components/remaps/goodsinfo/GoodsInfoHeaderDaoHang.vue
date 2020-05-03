<template>
  <div class="daohang">
    <i class="el-icon-arrow-left el-icon--left left-icon"></i>
    <ul class="jutijieshao">
      <li>商品</li>
      <li>评价</li>
      <li>详情</li>
    </ul>
    <i class="el-icon-more el-icon--right icon-more"></i>
  </div>
</template>
<script>
export default {
  name:'GoodsInfoHeaderDaoHang'
}
</script>
<style scoped>
ul,li{
  list-style: none;
}
/* 整体的div */
.daohang{
  width: 41.4rem;
  height:4.9rem;
  display: flex;
  justify-content: space-between;
  color: #333;
  background-color: #fff;
}
/* 返回的图标 */
.left-icon{
  font-size: 2.6rem;
  color: #909399;
  margin-left: 2rem;
  line-height: 4.9rem;
}
/* 具体的介绍ul */
.jutijieshao{
  display: flex;
  margin-left: -5rem;
  font-size: 1.4rem;
}
.jutijieshao li{
  font-weight: 600;
  margin-right: 2rem;
}
/* 三个点图标 */
.icon-more{
  font-size: 2.6rem;
  color: #909399;
  margin-top:1.1rem;
  margin-right: 1.5rem;
}
</style>