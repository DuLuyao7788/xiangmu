<template>
    <div class="homejin">
       <HomeTitle img="/images/home/jin_logo.png" title="精选专题"></HomeTitle>
        <div class="jinxuan" v-for="goods in goodsInfo" :key="goods.index">
            <div>
                <el-image :src="goods.image" style="width:100%;heigth:100%"></el-image>
            </div>
            <HomeHeathGoods :goodsInfo1="goods.goods"></HomeHeathGoods>
        </div>
    </div>
</template>
<script>
import HomeHeathGoods from './heath/HomeHeathGoods'
import HomeTitle from './ill/HomeTitle'
export default {
    components:{
        HomeHeathGoods,
        HomeTitle
    },
      props:{
    goodsInfo:{
      type:Array,
      default:function(){
        return[];
      }
    }
  }
}
</script>
<style>
.homejin{
    padding:1rem;
    margin-top: 1rem;
    background-color: #ffffff;
}
h1{
    margin-top: 0;
    font-weight: 400;
}
h1 .el-image{
    margin-right: 1rem;
}
.jinxuan{
    margin:1rem 0;
}
.el-image{
    border-radius:.5rem;
}

</style>