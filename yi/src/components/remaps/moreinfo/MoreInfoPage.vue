<template>
  <div>
    <div class="moreHeader_div">
      <el-image src="/images/remaps/moreHeader.jpg"></el-image>
    </div>
    <div class="div_product_info">
      <!-- 10元专区 -->
      <div class="ten_yuan_div">
        <!-- 图标和文字 -->
        <div class="xiaodudiv">
          <div class="icon-theme1"></div>
          <span class="xiaodufanghui">10元左右专区</span>
        </div>
        <!-- 健康优选的商品 -->
        <div class="chajiayouxuanProduct">
          <MoreInfoComment :moreinfocomment="moreinfocomment1"></MoreInfoComment>
          <div class="two_info_div">
            <MoreInfoComment :moreinfocomment="moreinfocomment2"></MoreInfoComment>
          </div>
        </div>
      </div>
      <!-- 20十元专区 -->
      <div class="ten_yuan_div">
        <!-- 图标和文字 -->
        <div class="xiaodudiv">
          <div class="icon-theme1"></div>
          <span class="xiaodufanghui">20元左右专区</span>
        </div>
        <!-- 健康优选的商品 -->
        <div class="chajiayouxuanProduct">
          <MoreInfoComment :moreinfocomment="twoinfo1"></MoreInfoComment>
          <div class="two_info_div">
            <MoreInfoComment :moreinfocomment="twoinfo2"></MoreInfoComment>
          </div>
        </div>
      </div>
      <!-- 30十元专区 -->
      <div class="ten_yuan_div">
        <!-- 图标和文字 -->
        <div class="xiaodudiv">
          <div class="icon-theme1"></div>
          <span class="xiaodufanghui">30元左右专区</span>
        </div>
        <!-- 健康优选的商品 -->
        <div class="chajiayouxuanProduct">
          <MoreInfoComment :moreinfocomment="threeinfo1"></MoreInfoComment>
          <div class="two_info_div">
            <MoreInfoComment :moreinfocomment="threeinfo2"></MoreInfoComment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MoreInfoComment from './MoreInfoComment'
export default {
  name:'MoreInfoPage',
  components:{
    MoreInfoComment,
  },
  data:function(){
      return{
        moreinfocomment1:[],
        moreinfocomment2:[],
        twoinfo1:[],
        twoinfo2:[],
        threeinfo1:[],
        threeinfo2:[],
      }
    },
    mounted() {
      this.$store.dispatch("getTenYuanZhuanQu1").then(results =>{
        this.moreinfocomment1=results;
      })
       this.$store.dispatch("getTenYuanZhuanQu2").then(results =>{
        this.moreinfocomment2=results;
      })
      this.$store.dispatch("getTwoYuanZhuanQu1").then(results =>{
        this.twoinfo1=results;
      })
      this.$store.dispatch("getTwoYuanZhuanQu2").then(results =>{
        this.twoinfo2=results;
      })
      this.$store.dispatch("getThreeYuanZhuanQu1").then(results =>{
        this.threeinfo1=results;
      })
       this.$store.dispatch("getThreeYuanZhuanQu2").then(results =>{
        this.threeinfo2=results;
      })
    },

}
</script>
<style scoped>
/* 设置头部图片的与底面的边距 */
.moreHeader_div{
  width: 41.4rem;
  height:19.8rem;
}
.div_product_info{
  width:41.4rem;
  background-color: #EEE;
}
.ten_yuan_div{
  width: 100%;
}
/* 消毒的div */
.xiaodudiv{
  width:41.4rem;
  height: 2.9rem;
  font-size: 1.54rem;
  margin-bottom: 2.2rem;
  padding-top: 1.5rem;
}
.icon-theme1{
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
  padding-top: 1rem;
}
/* 第二个信息商品介绍 */
.two_info_div{
  margin-top: 1.7rem;
}
</style>