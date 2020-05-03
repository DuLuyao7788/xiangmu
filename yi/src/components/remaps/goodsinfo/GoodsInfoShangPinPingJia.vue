<template>
  <div class="pinjia">
    <div class="pingjiadiv">
      <span class="sppjspan">商品评价</span>
      <div>
        <span>查看全部评论</span>
        <i class="el-icon-arrow-right el-icon--right icon-more"></i>
      </div>
    </div>
    <div class="pinfen">
      <span>不错</span>
      <el-rate v-model="value" disabled></el-rate>
    </div>
    <!-- 时间 -->
    <div class="shijian">
      <span>20170520175054_G16ZQ9QM6I</span> 
      <span class="fenge">|</span> 
      <span>Fri May 01 16:15:43 CST 2020</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsInfoShangPinPingJia',
  data() {
    return {
      value:5
    }
  }
}
</script>
<style scoped>
/* 总的评价div */
.pinjia{
  width: 39.4rem;
  height: 13.1rem;
  font-size: 1.348rem;
  padding: 1rem 1rem;
  background-color: white;
}
.pingjiadiv{
  display: flex;
  justify-content: space-between;
}
/* 评分的div */
.pinfen{
  width: 41.1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
/* 时间的div */
.shijian{
  width: 41.4rem;
  color:#A0A3B3;
  margin-top: 1rem;
  line-height: 3rem;
}
/* 商品评价的span */
.sppjspan{
  font-size: 1.8rem;
  font-weight: bold;
}
/* 分割线设置 */
.fenge{
  margin-left:1rem;
  margin-right: 1rem;
}
</style>