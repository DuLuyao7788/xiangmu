<template>
  <div class="lunbodiv">
    <!-- 轮播图 -->
    <div class="luimgdiv">
      <el-carousel indicator-position="none" :autoplay="false"  arrow="nerver">
        <el-carousel-item v-for="item in items" :key="item.id">
          <el-image :src="item.img" class="images"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 下面的说明 -->
    <div class="shangpinshuoming">
      <div class="baoyou">
        <i class="el-icon-circle-check el-icon--left circle-check"></i>
        <span>满88包邮</span>
      </div>
      <div class="baozheng">
        <i class="el-icon-circle-check el-icon--left circle-check"></i>
        <span>正品保证</span>
      </div>
      <div class="baoyou">
        <i class="el-icon-circle-check el-icon--left circle-check"></i>
        <span>正品保险</span>
      </div>
      <div class="morediv">
        <i class="el-icon-more"></i>
      </div>
    </div>
    <!-- 价钱，说明 ,法律 -->
    <div class="money-saymingdiv">
      <!-- 价钱 -->
      <div class="money">
        <span class="qianfuhao">￥</span>
        <span class="biajia">19.9</span>
      </div>
      <!-- 药品的名字 -->
      <div class="yaopinNameDiv">
        <el-image src="/images/remaps/goodsinfo/ziying.png" class="ziying"></el-image>
        <span class="name">朵丽米 一次性使用医用口罩   17.cm × 9.5cm - 3 层 成人款 (黑) 10只/袋</span>
      </div>
      <!-- 法律 -->
      <div class="falu">
        <GoodsInfoPiZhun></GoodsInfoPiZhun>
      </div>
    </div>
    <!-- 新人礼 -->
    <div class="xinrenli">
      <GoodsInfoXinRen></GoodsInfoXinRen>
    </div>
    <!-- 送至地方 -->
    <div class="songzhi">
      <GoodsInfoSongZhi></GoodsInfoSongZhi>
    </div>
    <!-- 商品评价 -->
    <div class="sppj">
      <GoodsInfoShangPinPingJia></GoodsInfoShangPinPingJia>
    </div>
    <!-- 相关推荐 -->
    <div class="xgtj">
      <GoodsInfoTuiJian></GoodsInfoTuiJian>
    </div>
    <!-- 图片详情 -->
    <div class="tupian">
      <GoodsTuWenXianQing></GoodsTuWenXianQing>
    </div>
    <!-- 消费提醒 -->
    <div class="xiaofei">
      <GoodsXiaoFeiTiXing></GoodsXiaoFeiTiXing>
    </div>
  </div>
</template>
<script>
import GoodsInfoPiZhun from './GoodsInfoPiZhun.vue'
import GoodsInfoXinRen from './GoodsInfoXinRen.vue'
import GoodsInfoSongZhi from './GoodsInfoSongZhi.vue'
import GoodsInfoShangPinPingJia from './GoodsInfoShangPinPingJia.vue'
import GoodsInfoTuiJian from './GoodsInfoTuiJian.vue'
import GoodsTuWenXianQing from './GoodsTuWenXianQing.vue'
import GoodsXiaoFeiTiXing from './GoodsXiaoFeiTiXing.vue'
export default {
  name:'GoodsInfoHeaderLunBo',
  components:{
    GoodsInfoPiZhun,
    GoodsInfoXinRen,
    GoodsInfoSongZhi,
    GoodsInfoShangPinPingJia,
    GoodsInfoTuiJian,
    GoodsTuWenXianQing,
    GoodsXiaoFeiTiXing
  },
  data:function(){
    return{
      items:[
        {"id":1,"img":"/images/remaps/goodsinfo/lunbo1.jpg"},
        {"id":2,"img":"/images/remaps/goodsinfo/lunbo2.jpg"},
        {"id":3,"img":"/images/remaps/goodsinfo/lunbo3.jpg"},
        {"id":4,"img":"/images/remaps/goodsinfo/lunbo4.jpg"}
      ]
    }
  }
}
</script>
<style scoped>
/* 设置轮播的整体大小的div */
.lunbodiv{
  width: 41.4rem;
  height:189.6rem;
  background-color: #eee;
}
.luimgdiv{
  width: 41.4rem;
  height:26.4rem;
  text-align: center;
  background-color: white;
}
/* 设置图片的大小 */
.images{
  width: 26.4rem;
  height: 26.4rem;
}
/* 商品说明 */
.shangpinshuoming{
  width: 100%;
  height:4.41rem;
  background-color: #EEEE;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.3248rem;
  color: #263D56;
}
.baoyou{
  line-height: 4.41rem;
  margin-right: 3rem;
  margin-left: 1.4rem;
}
/* 包邮文字设置 */
.baozheng,.baoxian{
  line-height: 4.41rem;
  margin-right: 3rem;
}
/* morede icon样式 */
.morediv{
  margin-right: 2rem;
  line-height: 4rem;
}
/* 原型的图标颜色 */
.circle-check{
  color: #96ABFC;
}
/* 价钱和说明性名字div设置背景颜色 */
.money-saymingdiv{
  background-color: white;
}
/* 设置价钱的字体样式 */
.money{
  width: 41.4rem;
  height: 4.6rem;
  color:#FF394E;
  font-weight: 600;
  padding-top: 2rem;
  margin-left: 0.5rem;
}
/* 钱的标志 */
.qianfuhao{
  font-size: 1.5456rem;
}
.biajia{
  font-size: 2.6496rem;
}
/* 设置药品的名字div */
.yaopinNameDiv{
  width: 41.1rem;
  height: 8.471rem;
  margin-left: 1rem;
  color: #262D56;
  line-height: 2.6rem;
  font-size: 1.87rem;
  font-weight: bold;
  display: inline-block;
}
/* 自营div */
.ziying{
  width:3.7rem;
  height: 1.566rem;
  margin-left: 0.2rem;
  margin-top: 0.3rem;
}
/* 口罩 */
.koukao{
  display: inline-block;
}
/* 成人款 */
.chengrenkuang{
  margin-left: -4.6rem;
}
/* 法律的div */
.falu{
  background-color: white;
}
/* 新人礼 */
.xinrenli{
  margin-top: 1rem;
  background-color: white;
  margin-bottom: 1rem;
}
/* 送至什么地方 */
.songzhi{
  margin-bottom: 1rem;
}
/* 商品评价 */
.sppj{
  margin-bottom: 1rem;
}
/* 相关推荐 */
.xgtj{
  margin-bottom: 1rem;
}
/* 图片详情 */
.tupian{
  margin-bottom: 1rem;
}
/* 消费 */
.xiaofei{
  background-color: white;
   width: 42.1rem;
  height: 10rem;
  line-height: 3rem;
  margin-bottom: 1rem;
}
</style>