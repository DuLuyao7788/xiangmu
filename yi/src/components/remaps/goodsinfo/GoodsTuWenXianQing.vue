<template>
  <div class="tuwendiv">
    <div class="wenzi_tuwen">图文详情</div>
    <div>
      <el-image src="/images/remaps/goodsinfo/tupianxianqing.jpg"></el-image>
      <el-image src="/images/remaps/goodsinfo/tupianxiangqing_renzheng.jpg"></el-image>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsTuWenXianQing'
}
</script>
<style scoped>
/* 整体的div */
.tuwendiv{
  width: 41.4rem;
  height: 66.7rem;
  background-color: white;
}
/* 图文详情的文字 */
.wenzi_tuwen{
  width: 41.4rem;
  font-size: 1.6rem;
  text-align: center;
  padding: 1.2rem;
  color: #2D265D;
  font-weight: bold;
  border-bottom: 0.1rem solid #eee;
  margin-bottom: 1.3rem;
}
</style>