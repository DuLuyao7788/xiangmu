<template>
  <div class="divcontiner">
      <ul class="ul"  >
        <li class="li"  v-for="product in remapsbodycomment" :key="product.index" @click="to('/goodspage')">
          <div class="tudiv">
            <el-image :src="product.img" class="imggood"></el-image>
          </div>
          <div class="namediv">
            <span class="product-name">{{product.title}}</span>
          </div>
          <div class="money-gouwuche">
            <span class="product-money">{{product.money}}</span>
            <div class="gouwuchediv" v-if="product.isgouwuche">
              <i class="el-icon-shopping-cart-2 el-icon--right gouwuche"></i>
            </div>
          </div>
        </li>
        <li>
          <div class="more" v-if="moreInfo" @click="to('/moreinfoPage')">
            <div class="span-i-div">
              <span class="morespan">MORE</span>
              <i class="el-icon-caret-right el-icon--right caret-right"></i>
            </div>
            <div class="chakan">查看更多</div>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:"RemapsBodyComment",
   props:{
    remapsbodycomment:{
      type:Array,
      default:function(){
        return[];
      }
    },
     remapsbodycomment2:{
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
  width: 13rem;
  border: 0.2rem solid rgb(251, 110, 110);
}
.ul{
  width: 41.4rem;
  height: 23.8rem;
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
  margin-right: 1.5rem;
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
  font-weight: 400;
  font-size: 1.5rem;
  color: #FB6E6E;
  padding:0.7rem 0;
}
/* 钱和购物车的div */
.money-gouwuche{
  border-top: 0.1rem dashed #FB6E6E;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* 购物车图标的div设置margin-top */
.gouwuchediv{
  margin-top: 0.8rem;
}
/* 购物车的图标 */
.gouwuche{
  width: 3.09rem;
  height: 3.09rem;
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  line-height: 3.09rem;
  background-color: #FB6E6E;
}
.imggood{
  width: 13rem;
  height: 13rem;
}
.more{
  width: 15.6rem;
  height: 23.8rem;
  background-color: rgb(251, 110, 110);
  margin-left: 1.7rem;
}
.span-i-div{
  padding: 6.8rem 0rem 0rem 1rem;
  color: #fff;
  font-weight: 500;
}
.morespan{
  font-size: 3.312rem;
}
.caret-right{
  display: inline-block;
  font-size: 1.3rem;
  text-align: center;
  padding-top: 3rem;
}
.chakan{
  font-size: 2rem;
   color: #fff;
  font-weight: 500;
  padding: 0rem 0rem 0rem 1rem;
}
</style>