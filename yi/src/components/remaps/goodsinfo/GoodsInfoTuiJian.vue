<template>
  <div class="tuijiandiv">
    <div class="tjdiv">
      <div class="xgtj">相关推荐</div>
      <span>品牌专区</span>
    </div>
    <!-- 商品推荐 -->
    <div>
      <GoodsComment :remapsbodycomment="GoodTuiJian"></GoodsComment>
    </div>
  </div>
   <!-- <GoodsComment :remapsbodycomment="GoodTuiJian"></GoodsComment> -->
</template>
<script>
import GoodsComment from './GoodsComment.vue'
export default {
  name:'GoodsInfoTuiJian',
  components:{
    GoodsComment
  },
  data:function(){
    return{
      GoodTuiJian:[],
      activeNam:''
    }
  },
  mounted() {
    this.$store.dispatch('getGoodTuiJian').then(results=>{
      this.GoodTuiJian=results
      console.log(GoodsComment)
    })
    
  },
}
</script>
<style scoped>
.tuijiandiv{
  width: 41.4rem;
  height: 22.6rem;
  background-color: white;
}
.tjdiv{
  width: 41.4rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.546rem;
  color: #686d85;
  border-bottom:0.1rem solid #eee;
  padding: 1.5rem 0rem;
}

</style>