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
      <RemapsTuiJian :xiadufanghuispan="xiadufanghuispan"></RemapsTuiJian>
    </div>
    <!--宅家优选(第一个商品信息)  -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="changbeiyao"></RemapsBodyComment>
    </div>
    <!-- 感冒发烧药 -->
    <div class="chajiayouxuan">
      <RemapsTuiJian :xiadufanghuispan="fashaoyao"></RemapsTuiJian>
    </div>
    <!-- 感冒发烧药推荐商品 -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="ganmaofashao"></RemapsBodyComment>
    </div>
     <!-- 调节免疫力 -->
    <div class="chajiayouxuan">
      <RemapsTuiJian :xiadufanghuispan="tiaojiemianyili"></RemapsTuiJian>
    </div>
    <!-- 调节免疫力推荐商品 -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="mianyili"></RemapsBodyComment>
    </div>
    <!-- 流感用药 -->
    <div class="chajiayouxuan">
      <RemapsTuiJian :xiadufanghuispan="luganyongyao"></RemapsTuiJian>
    </div>
    <!-- 流感用药推荐商品 -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="lugan"></RemapsBodyComment>
    </div>
    <!-- 小儿感冒药 -->
    <div class="chajiayouxuan">
      <RemapsTuiJian :xiadufanghuispan="xiaoeryongyao"></RemapsTuiJian>
    </div>
    <!-- 小儿感冒药推荐商品 -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="xiaoerganmao"></RemapsBodyComment>
    </div>
    <!-- 咳嗽 -->
    <div class="chajiayouxuan">
      <RemapsTuiJian :xiadufanghuispan="kesou"></RemapsTuiJian>
    </div>
    <!-- 咳嗽推荐商品 -->
    <div class="chajiayouxuanProduct">
      <RemapsBodyComment :remapsbodycomment="kesougood"></RemapsBodyComment>
    </div>
    
    <div class="div-jian-ju-xue">
      <!-- 健康优选 -->
      <div class="jiankuangyouxuan">
        <!-- 图标和文字 -->
        <div class="xiaodudiv2">
          <div class="icon-theme1"></div>
          <span class="xiaodufanghui">健康优选</span>
        </div>
        <!-- 健康优选的商品 -->
        <div class="chajiayouxuanProduct">
          <RemapsBodyComment :remapsbodycomment="jiankuang" :moreInfo="moreInfo"></RemapsBodyComment>
        </div>
      </div>
      <!-- 居家常用 -->
      <div class="jiankuangyouxuan">
        <!-- 图标和文字 -->
        <div class="xiaodudiv2">
          <div class="icon-theme1"></div>
          <span class="xiaodufanghui">居家日用</span>
        </div>
        <!-- 居家常用的商品 -->
        <div class="chajiayouxuanProduct">
          <RemapsBodyComment :remapsbodycomment="jujiariyong"></RemapsBodyComment>
        </div>
      </div>
      <!-- 血糖用品 -->
      <div class="jiankuangyouxuan">
        <!-- 图标和文字 -->
        <div class="xiaodudiv">
          <div class="icon-theme"></div>
          <span class="xiaodufanghui">血糖用品</span>
          <div class="circle"></div>
          <span class="spanproduct">在线补货  安心居家</span>
        </div>
        <!-- 居家常用的商品 -->
        <div class="chajiayouxuanProduct">
          <RemapsBodyComment :remapsbodycomment="xuetangyongpin"></RemapsBodyComment>
        </div>
      </div>
      <!-- 不能忽市流感 -->
      <div class="luganimage">
        <el-image src="/images/remaps/hushilugan.png"></el-image>
      </div>
       <!-- 家庭常备 -->
      <div>
        <el-image src="/images/remaps/coudanjingxuan.jpg"></el-image>
      </div>
    </div>
  </div>
</template>
<script>
import RemapsBodyComment from './RemapsBodyComment'
import RemapsBodyTaoCang from './RemapsBodyTaoCang'
import RemapsTuiJian from './RemapsTuiJian'
export default {
  name:'RemapsBody',
  components:{
    RemapsBodyComment,
    RemapsBodyTaoCang,
    RemapsTuiJian
  },
  data:function(){
    return{
      remapsbodycomment:[],
      remapsbodycomment2:[],
      xiaodu:[],
      taocanggood:[],
      jiangkuang:[],
      changbeiyao:[],
      xiadufanghuispan:'宅家优选',
      fashaoyao:'感冒烧药用药',
      ganmaofashao:[],
      tiaojiemianyili:'调节免疫力',
      mianyili:[],
      luganyongyao:'流感用药',
      lugan:[],
      xiaoeryongyao:'小儿感冒',
      xiaoerganmao:[],
      kesou:'咳嗽',
      kesougood:[],
      moreInfo:true,
      jiankuang:[],
      jujiariyong:[],
      xuetangyongpin:[]
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
  methods: {
    to(router){
      this.$router.push({path:router})
    }
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
     this.$store.dispatch("getGanMaoFaShao").then(results =>{
      this.ganmaofashao=results;
    })
     this.$store.dispatch("getMianYiLi").then(results =>{
      this.mianyili=results;
    })
    this.$store.dispatch("getLuGanYongYao").then(results =>{
      this.lugan=results;
    })
     this.$store.dispatch("getXiaoErGanMao").then(results =>{
      this.xiaoerganmao=results;
    })
    this.$store.dispatch("getKeSou").then(results =>{
      this.kesougood=results;
    })
    this.$store.dispatch("getJianKuang").then(results =>{
      this.jiankuang=results;
    })
    this.$store.dispatch("getJuJiaRiYong").then(results =>{
      this.jujiariyong=results;
    })
    this.$store.dispatch("getXueTangYongPin").then(results =>{
      this.xuetangyongpin=results;
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
  height: 4.4rem;
  background-color: #EEE;
}
/* 常用备药div */
.beiyongdiv{
  width:41.4rem;
  height:16.2rem;
}
/* 宅家优选商品第一个 */
.chajiayouxuanProduct{
  margin-top: 1.4rem;
  width: 41.4rem;
  height: 23.8rem;
}
/* 整体div控制颜色 */
.div-jian-ju-xue{
  background-color:#EEE;
}
.xiaodudiv2{
  width: 41.4rem;
  height: 4.4rem;
  font-size: 1.54rem;
  line-height: 4.4rem;
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
  padding: 0.2rem 0;
}
/* 消毒防护 */
.xiaodufanghui{
  margin-left: 1.3rem;
  margin-right: 1rem;
  padding: 0.5rem 0;
}
.luganimage{
  width: 41.44rem;
  height: 16.575rem;
}
</style>