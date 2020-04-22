<template>
  <div class="body">
    <div v-for="item in remaps" :key="item.id">
      <el-image :src="item.image"></el-image>
    </div>
    
    <div class="rexiaodiv">
      <ul class="ul">
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
        <li class="li">
          <div class="tudiv">
            <el-image src="/images/remaps/goods1.jpg" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">赛能 硫酸羟氯喹片 0.2 g*10 片</span>
            <span class="product-name"></span>
          </div>
          <h5 class="product-money">￥47</h5>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'RemapsBody',
  props:{
    remaps:{
      type:Array,
      default:function(){
        return[];
      }
    },
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
  border: 0.18rem solid rgb(251, 110, 110);
}
/* 设置图片大小*/
.imggood{
  width: 11.8rem;
  height: 11.8rem;
}
.ul{
  display: flex;
  flex-direction: row;
}
.li{
  width: 12.4rem;
  height:21.6rem;
  margin-left: 2rem;
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
}
/* 商品价钱 */
.product-money{
  font-weight: 400;
  font-size: 1.4rem;
  color: #FB6E6E;
  border-top: 0.1rem dashed #FB6E6E;
  padding:0.7rem 0;
}
</style>