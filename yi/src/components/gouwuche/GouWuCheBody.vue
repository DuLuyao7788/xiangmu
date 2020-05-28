<template>
  <div class="gouwuchebody">
    <!-- body的头部 -->
    <div class="body_header">
      <el-image src="/images/gouwuche/gouwucheimg.png"  class="logo"></el-image>
      <div class="gouwuchetishi">购物车还是空的哦~</div>
      <div class="dlbtn">登录并同步购物车商品</div>
    </div>
     <div class="body_headergood">
      <div class="goodsheader">
        <div class="dianming">
          <el-radio label=""></el-radio>
          <span class="dianmingspan">壹号大药房</span>
        </div>
        <div class="tishicha">
          <span>还差72.5元包邮</span>
          <span class="coudan">去凑单</span>
          <i class="el-icon-arrow-right el-icon--right"></i>
        </div>
      </div>
      
      <div class="goodsBody">
        <div class="radio_div">
          <el-radio label=""></el-radio>
        </div>
        <div class="infodivContainer">
          <el-image src="/images/gouwuche/gouwuchegood1.jpg" class="gouwuimg"></el-image>
          <div class="name_price_jiajian">
            <div class="gouwuname">白云山 小柴胡颗粒 10g*10袋</div>
            <div class="price_jianjia">
              <div class="gouwuprice">￥15.50</div>
              <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- body的内容 --> 
    <div class="body_body">
      <GouWuCheGoods :gouwuche="gouwuche" @click="click"></GouWuCheGoods>
    </div>
  </div>
</template>
<script>
import GouWuCheGoods from './GouWuCheGoods'
export default {
  name:'GouWuCheBody',
  components:{
    GouWuCheGoods
  },
  data:function(){
    return{
      gouwuche:[]
    }
  },
  methods: {
    click(index){
     console.log("我是body里面点击"+index)
    }
  },
 mounted() {
      this.$store.dispatch("getGouWuChe").then(results => {
      this.gouwuche = results;
    });
 }
}
</script>
<style scoped>
/* body的header */
.body_header{
  width: 41.4rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
}
/* logo */
.logo{
 width: 18.4rem;
 height: 9.6rem;
}
/* 购物车的提示语句 */
.gouwuchetishi{
  font-size: 1.43rem;
  color: #999;
  margin-top: 2.8rem;
}
/* 登录的按钮 */
.dlbtn{
  width:23.4rem;
  height: 5rem;
  margin: 0 auto;
  font-size: 1.656rem;
  text-align: center;
  line-height: 5rem;
  color: #ffffff;
  background-image: linear-gradient(to right, #5577FB, #738EFC);
  border-radius: 2.66666667rem;
  margin-top: 2.8rem
}
/* 商品的头部 */
.goodsheader{
  display: flex;
  justify-content: space-between;
  padding:0 2rem;
  width: 38.1rem;
  height: 4.64rem;
  border-bottom: 0.1rem solid #eeeeee;
}
.el-divider{
  padding: 0 2rem;
}
/* 药店的名字 */
.dianming{
  font-size: 1.6rem;
  color: #969AAE;
 
}
/* 店名的span */
.dianmingspan{
  margin-left: -2.5rem;
}
/* 提示还差多少钱 */
.tishicha{
  font-size: 1.4rem;
  
}
/* 去凑单 */
.coudan{
  color: red;
  margin-left: 1rem;
}
/* 购物车商品信息 */
.goodsBody{
  display: flex;
  margin-top: 1rem;
  padding: 0 1.3rem;
  width: 38.1rem;
  height: 13.1rem;
}
/* body下面的商品信息 */
.infodivContainer{
  display: flex;
  width: 38.1rem;
  height: 8.9rem;
}
/* 购物车的图片 */
.gouwuimg{
  width: 8.8rem;
  height: 8.8rem;
}
.name_price_jiajian{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 2rem;
}
.price_jianjia{
  display: flex;
  
}
.gouwuname{
  font-weight: 600;
  font-size: 1.5rem;
  
}
.gouwuprice{
  font-size: 1.7rem;
  color: red;
  font-weight: 550;
  margin-right: 2rem;
  margin-top: 1rem;
}
</style>