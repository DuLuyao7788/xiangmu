<template>
<div class="homegood">
  <HomeHeathTime></HomeHeathTime>
 <HomeHeathGoods :goodsInfo1="goodsInfo1"></HomeHeathGoods>
</div>
</template>
<script>
import HomeHeathTime from './heath/HomeHeathTime'
import HomeHeathGoods from './heath/HomeHeathGoods'
export default {
  name:"HomGoodsInfo",
  components:{
    HomeHeathTime,
    HomeHeathGoods
  },
   props:{
    goodsInfo1:{
      type:Array,
      default:function(){
        return[];
      }
    }
  }
}
</script>
<style scoped>

.homegood{
  background-color: #fff;
  margin:1rem 0;
}

</style>