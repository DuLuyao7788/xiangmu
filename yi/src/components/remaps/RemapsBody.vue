<template>
  <div class="body">
    <div v-for="item in remaps" :key="item.index" class="tupian">
      <el-image :src="item.image"></el-image>
    </div>

    <div class="procontainer">
      <div class="rexiaodiv">
        <RemapsBodyComment :remapsbodycomment="remapsbodycomment"></RemapsBodyComment>
      </div>
      <div class="rexiaodiv2">
        <RemapsBodyComment :remapsbodycomment="remapsbodycomment2"></RemapsBodyComment>
      </div>
      <div class="rexiaodiv3">
        <div class="xiaodudiv">
          <div class="icon-theme"></div>
          <span class="xiaodufanghui">消毒防护</span>
          <div class="circle"></div>
          <span class="spanproduct">75酒精、洗手液、消毒液、双氧水</span>
        </div>
        <div class="rexiaoxiaofuproduct">
          <RemapsBodyComment :remapsbodycomment="xiaodu"></RemapsBodyComment>
        </div>
      </div>
    </div>

    <div class="lijizutuandiv">
      <el-image src="/images/remaps/lijizutuan.jpg"></el-image>
    </div>
    <div class="taocangyouhui">
      <el-image src="/images/remaps/taocangyouhui.jpg"></el-image>
    </div>
    <div class="taocanggoods">
      <RemapsBodyTaoCang :taocanggood="taocanggood"></RemapsBodyTaoCang>
    </div>
    <!-- 健康优选 -->
    <div class="jiankuangyouxuan">
      <el-image src="/images/remaps/jiankuang.jpg"></el-image>
    </div>
    <!-- 健康优选产品 -->
    <div class="jiankuangyouxuanproduct">
      <RemapsBodyTaoCang :taocanggood="jiangkuang"></RemapsBodyTaoCang>
    </div>
    <!-- 家庭常备药 -->
    <div class="beiyongdiv">
      <el-image src="/images/remaps/jiatingchangbeiyao.jpg"></el-image>
    </div>
    <!--宅家优选 -->
    <div class="chajiayouxuan">
      <div class="xiaodudiv2">
        <div class="icon-theme1"></div>
        <span class="xiaodufanghui">宅家优选</span>
      </div>
    </div>
    <!--宅家优选(第一个商品信息)  -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="changbeiyao"></RemapsBodyComment>
    </div>
  </div>
</template>
<script>
import RemapsBodyComment from './RemapsBodyComment'
import RemapsBodyTaoCang from './RemapsBodyTaoCang'
export default {
  name:'RemapsBody',
  components:{
    RemapsBodyComment,
    RemapsBodyTaoCang
  },
  data:function(){
    return{
      remapsbodycomment:[],
      remapsbodycomment2:[],
      xiaodu:[],
      taocanggood:[],
      jiangkuang:[],
      changbeiyao:[]
    }
  },
  props:{
    remaps:{
      type:Array,
      default:function(){
        return[];
      }
    },
  },
 mounted() {
     this.$store.dispatch("getRbc").then(results => {
      this.remapsbodycomment = results;
    });
    this.$store.dispatch("getRbc2").then(results =>{
      this.remapsbodycomment2=results;
    })
    this.$store.dispatch("getXiaoDu").then(results =>{
      this.xiaodu=results;
    })
    this.$store.dispatch("getTaoCangGood").then(results =>{
      this.taocanggood=results;
    })
    this.$store.dispatch("getJianKuangProduct").then(results =>{
      this.jiangkuang=results;
    })
    this.$store.dispatch("getChangBeiYao").then(results =>{
      this.changbeiyao=results;
    })
    
  }
}
</script>
<style scoped>
/* 设置疫情信息的图片 */
.el-image2{
  margin-top: -0.3rem;
}
ul,li,h5{
  list-style: none;
  margin: 0;
  padding: 0;
}
/* 图片的div */
.tudiv{
  width: 11.8rem;
  border: 0.2rem solid rgb(251, 110, 110);
}
/* 设置图片大小*/
.imggood{
  width: 11.8rem;
  height: 11.8rem;
}
/* 设置整体的容器背景颜色 */
.procontainer{
  background-color:#EEE;
  margin-top: -0.2rem;
}
/* 设置整体的位置*/
.rexiaodiv{
  width: 100%;
  height: 23.8rem;
  position: relative;
  z-index: 0;
  padding-top: 1rem;
}
.ul{
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
}
.li{
  width: 12.4rem;
  height:21.6rem;
  margin-left: 2rem;
  box-sizing: border-box;
  display: inline-block;
}
.namediv{
  width: 12.4rem;
  height: 3.5rem;
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  margin-bottom: 0.4rem;
  white-space: nowrap;
  overflow: hidden;
}
/* 商品的名字 */
.product-name{
  white-space: normal;
  font-size: 1.2rem;
  overflow: hidden;
  margin-bottom: 1rem;
}
/* 商品价钱 */
.product-money{
  font-weight: 400;
  font-size: 1.6rem;
  color: #FB6E6E;
  border-top: 0.1rem dashed #FB6E6E;
  
}
/* 设置第二个商品信息的div */
.rexiaodiv2{
  margin-top: 1.2rem;
  height: 23.8rem;
}
/* 热销的div3 */
.rexiaodiv3{
  margin-top: 1.2rem;
}
/* 消毒的div */
.xiaodudiv{
  font-size: 1.54rem;
  margin-bottom: 2.2rem;
}
.icon-theme{
  width: 0.33rem;
  height: 2.4rem;
  display: inline-block;
  background-color: rgb(73, 144, 226);
  margin-left: 1.3rem;
  vertical-align: middle;
}
/* 消毒防护 */
.xiaodufanghui{
  margin-left: 1.3rem;
  margin-right: 1rem;
}
/* 原点 */
.circle{
  width: 0.6rem;
  height: 0.6rem;
    display: inline-block;
    margin-left: 0.1rem;
    margin-right: 0.7rem;
    border-radius: 50%;
    vertical-align: middle;
    background-color: rgb(247, 95, 93);
}
/* 具体的消毒东西 */
.spanproduct{
  color: #F75F5D;
}
/* 立即组团div */
.lijizutuandiv{
  margin-top: 1.2rem;
}
/*宅家优选  */
.chajiayouxuan{
  width: 41.4rem;
  height: 4rem;
  background-color: #EEE;
}
.xiaodudiv2{
  font-size: 1.54rem;
  margin-bottom: 2.2rem;
  padding-top: 1rem;
}
/* 常用备药div */
.beiyongdiv{
  width:41.4rem;
  height:16.2rem;
}
/* 图标 */
.icon-theme1{
  width: 0.33rem;
  height: 2.4rem;
  display: inline-block;
  background-color: rgb(73, 144, 226);
  margin-left: 1.3rem;
  vertical-align: middle;
  margin-bottom: 0.2rem;
}
/* 宅家优选商品第一个 */
.chajiayouxuanProduct{
  margin-top: 1.4rem;
}
</style>