<template>
  <div class="header" :class="{'fixedtop':isfixedtop}" ref="root">
    <div class="inner">
      <el-row>
      <el-col :span="4">
        <i class="el-icon-arrow-left el-icon--left black"></i>
      </el-col>
      <el-col :span="17">
        <span class="headerspan">全国肺炎疫情动态,预防知识...</span>
      </el-col>
      <el-col :span="3">
        <i class="el-icon-shopping-cart-2 el-icon--right gouwuche"></i>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name:'RemapsHeader',
  props:{
   isfixedtop:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style scoped>
.header{
  width: 100%;
  height:4.7rem;
}
/* 设置inner */
.inner{
  width: 100%;
  height:4.7rem;
  padding: 1rem 0;
}
.el-row{
  fill: 1rem;
  align-items: center;
}
/* 返回的图标 */
.black{
  font-size: 2.3rem;
  color: #6D7089;
  margin-left: 2rem;
  margin-top: 0.2rem;
}
/* 全国疫情文字 */
.headerspan{
  font-size: 1.7rem;
  font-weight: 700;
  color: #262D56;
  text-align: center;
  margin-left: 1.2rem;
}
/* 购物车图标 */
.gouwuche{
  font-size: 2.2rem;
  color: #6D7089;
}
.fixedtop{
  position: fixed;
  top:0;
  width:100%;
  height: 4.7rem;
  z-index: 9999;
  background-color: #fff;
}

</style>