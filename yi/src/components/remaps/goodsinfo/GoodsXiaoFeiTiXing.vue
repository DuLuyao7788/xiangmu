<template>
  <div clas="tixingdiv">
    <div class="xftx">消费提醒</div>
    <div class="drugPromptContent">请仔细阅读产品说明书、禁忌内容、注意事项等内容或者在医务人员的指导下购买和使用，将产品置于儿童无法触及位置。</div>
  </div>
</template>
<script>
export default {
  name:'GoodsXiaoFeiTiXing'
}
</script>
<style scoped>
.tixingdiv{
  width: 39.4rem;
  height: 10rem;
  line-height: 10rem;
  padding: 2rem;
  background-color: white;
}
/* 消费提醒的文字 */
.xftx{
  text-align: center;
  margin-bottom: 0.7rem;
  font-size: 1.56rem;
  color: #7E829A;
}
/* 说明性文字 */
.drugPromptContent{
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.3rem;
  line-height: 2rem;
  color: #7E829A;
}
</style>