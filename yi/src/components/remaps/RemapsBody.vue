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
        <RemapsBodyComment :remapsbodycomment2="remapsbodycomment2"></RemapsBodyComment>
      </div>
    </div>
  </div>
</template>
<script>
import RemapsBodyComment from './RemapsBodyComment'
export default {
  name:'RemapsBody',
  components:{
    RemapsBodyComment,
  },
  data:function(){
    return{
      remapsbodycomment:[],
      remapsbodycomment2:[]
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
}
</style>