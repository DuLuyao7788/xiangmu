<template>
  <div class="divcontiner">
      <ul class="ul"  @click="to('/goodspage')">
        <li class="li"  v-for="product in remapsbodycomment" :key="product.index">
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
      </ul>
  </div>
</template>
<script>
export default {
  name:"GoodsComment",
   props:{
    remapsbodycomment:{
      type:Array,
      default:function(){
        return[];
      }
    },
    moreInfo:{
      default:false
    }
  },
  methods: {
    to(router){
      this.$router.push({path:router})
    }
  },
}
</script>
<style scoped>
ul,li,h5{
  list-style: none;
  margin: 0;
  padding: 0;
}
.divcontiner{
  height: 23.8rem;
}
/* 图片的div */
.tudiv{
  width:11.7rem;
  height: 7.2rem;
  text-align: center;
}
/* 图片的大小 */
.imggood{
  width: 7.2rem;
}
.ul{
  width: 41.4rem;
  height: 16.4rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
  margin: 1rem;
  
}
.li{
  width: 11.7rem;
  height:16.4rem;
  margin-right: 1.5rem;
  box-sizing: border-box;
  display: inline-block;
}
.namediv{
  width: 12.4rem;
  height: 3.5rem;
  margin-left: -0.5rem;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 2rem;
}
/* 商品的名字 */
.product-name{
  width: 13.5rem;
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
  font-weight: bold;
  font-size: 1.764rem;
  color: #FF394E;
  padding:0.7rem 0;
}
/* 钱和购物车的div */
.money-gouwuche{
  text-align: center;
}
</style>