<template>
   <div class="divcontiner">
      <ul class="ul"  >
        <li class="li"  v-for="product in goodsInfo1" :key="product.index" @click="to('/goodspage')">
          <div class="tudiv">
            <el-image :src="product.img" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">{{product.title}}</span>
          </div>
          <div class="money-gouwuche">
            <span class="product-money">{{product.money}}</span>
          </div>
        </li>
        <li>
             <div class="more">
            <span>查看全部</span>
            <div> <i class="el-icon-arrow-right"></i></div>
           
          </div>
        </li>
       
      </ul>
      
  </div>
</template>
<script>
export default {
     props:{
    goodsInfo1:{
      type:Array,
      default:function(){
        return[];
      }
    }
  }
}
</script>
<style  scoped>
ul,li,h5{
  list-style: none;
  margin: 0;
  padding: 0;
}

/* 图片的div */
.tudiv{
  width: 10rem;
  text-align: center;
  /* border: 0.2rem solid rgb(251, 110, 110); */
}
.ul{
  height: 15.5rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
  padding: 1rem 0;
}
.li{
  width: 10rem;
  height:15.5rem;
  margin: 0 0.8rem;
  box-sizing: border-box;
  display: inline-block;

}
.namediv{
  width: 10rem;
  height: 3.5rem;
  margin-top: 0.8rem;
  margin-left: 0.5rem;
  margin-bottom: 0.4rem;
  white-space: nowrap;
  overflow: hidden;
}
/* 商品的名字 */
.product-name{
  width: 10rem;
  height:3.8rem;
  white-space: normal;
  font-size: 1.34rem;
  line-height: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
/* 商品价钱 */
.product-money{
  font-weight: 400;
  font-size: 1.5rem;
  color: #FB6E6E;
  padding:0.7rem 0;
}
/* 钱和购物车的div */
.money-gouwuche{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.imggood{
  width: 8rem;
  height:8rem;
}
.ul li:last-child{
    text-align: center;
    height:15.5rem;
    margin: 0;
}
.more{
    padding:1rem;
    background-color:#f5f5f5;
    color: #999;
    border-top-left-radius:10%;
    border-bottom-left-radius:10%;
}
.more span{
display: inline-block;
white-space: pre-wrap;
width: 1rem;
}

</style>