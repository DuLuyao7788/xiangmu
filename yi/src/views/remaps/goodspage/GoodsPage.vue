<template>
  <div class="goodspage">
    <GoodsInfoHeader></GoodsInfoHeader>
    <GoodsInfoHeaderDaoHang></GoodsInfoHeaderDaoHang>
    <GoodsInfoHeaderLunBo></GoodsInfoHeaderLunBo>
    <GoodsInfoFooter></GoodsInfoFooter>
  </div>
</template>
<script>
import GoodsInfoHeader from '@/components/remaps/goodsinfo/GoodsInfoHeader.vue'
import GoodsInfoHeaderDaoHang from '@/components/remaps/goodsinfo/GoodsInfoHeaderDaoHang.vue'
import GoodsInfoHeaderLunBo from '@/components/remaps/goodsinfo/GoodsInfoHeaderLunBo.vue'
import GoodsInfoFooter from '@/components/remaps/goodsinfo/GoodsInfoFooter.vue'
export default {
  name:'GoodsPage',
  components:{
    GoodsInfoHeader,
    GoodsInfoHeaderDaoHang,
    GoodsInfoHeaderLunBo,
    GoodsInfoFooter
  }
}
</script>
<style scoped>
.goodspage{
  width: 41.4rem;
  height: 195.2rem;
  background-color: #EEE;
}

</style>