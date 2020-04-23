<template>
  <div>
    <ul class="ul">
        <li class="li" v-for="product in remapsbodycomment2" :key="product.index">
          <div class="tudiv">
            <el-image :src="product.img" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">{{product.title}}</span>
          </div>
          <h5 class="product-money">{{product.money}}</h5>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"RemapsBodyComment2",
  props:{
    remapsbodycomment2:{
      type:Array,
      default:function(){
        return[]
      }
    }
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
/* 设置整体的位置*/
.rexiaodiv{
  margin-top: 1rem;
  position: relative;
  z-index: 0;
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