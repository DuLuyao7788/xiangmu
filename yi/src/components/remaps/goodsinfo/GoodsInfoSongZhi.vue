<template>
  <div class="songzhi">
    <div class="song">送至</div>
    <div class="difang_shijian_div">
      <div class="didiandiv">
        <span>上海</span>
        <i class="el-icon-more el-icon--right icon-more"></i>
      </div>
      <div class="shijian">疫情期间,出库时间为实际时间为准</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsInfoSongZhi'
}
</script>
<style scoped>
.songzhi{
  width: 41.4rem;
  height: 8.255rem;
  font-size: 1.3248rem;
  display: flex;
  flex-direction: row;
  background-color: white;
}
/* 送至的文字 */
.song{
  width: 4.1rem;
  height: 1.92rem;
  line-height: 6rem;
  margin-left: 1rem;
  color: #A0A3B3;
  margin-right: 1.5rem;
}
/* 要送的地方和送出的时间 */
.difang_shijian_div{
  margin-top: 2rem;
  width: 33rem;
  color: #262d56;
  font-weight: bold;
}
/* 地点的div和图标 */
.didiandiv{
  display: flex;
  justify-content: space-between;
}
/* 时间的div */
.shijian{
  color: #686B85;
}
</style>