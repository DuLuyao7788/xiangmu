<template >
  <div class="block">
    <el-carousel height="72px">
      <el-carousel-item v-for="(item , index) in lunbo" :key="index">
          <el-image :src="'/images/findMeducune/'+item.img"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
/**轮播图 */
<script>
export default {
      data () {
      return {
        lunbo: [
            {img:"lunbo1.jpg"},
            {img:"lunbo2.jpg"},
            {img:"lunbo3.jpg"},
          
        ],
         currentSort:0,
      }
    },
}
</script>
<style>
  .block .el-carousel{
     width: 27rem;
     margin-left: 0.5rem;
  }
  .block .el-carousel .el-image{
        height: 7.2rem;
        width: 27rem;
    }
  .block .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 15rem;
  }

   .block.el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
   .block.el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>