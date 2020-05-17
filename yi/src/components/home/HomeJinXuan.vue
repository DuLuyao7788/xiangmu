<template>
    <div class="homejin">
        <h1><el-image src="/images/home/jin_logo.png" style="width:18px;height:18px"></el-image>精选专题</h1>
        <div class="jinxuan">
            <div>
                <el-image src="/images/home/jinxuan_big(1).jpg" style="width:100%;heigth:100%"></el-image>
            </div>
            <HomeHeathGoods :goodsInfo1="goodsInfo1"></HomeHeathGoods>
        </div>
         <div>
            <div>
                <el-image src="/images/home/jinxuan_big(1).jpg" style="width:100%;heigth:100%"></el-image>
            </div>
            <HomeHeathGoods :goodsInfo1="goodsInfo1"></HomeHeathGoods>
        </div>
         <div>
            <div>
                <el-image src="/images/home/jinxuan_big(1).jpg" style="width:100%;heigth:100%"></el-image>
            </div>
            <HomeHeathGoods :goodsInfo1="goodsInfo1"></HomeHeathGoods>
        </div>
         <div>
            <div>
                <el-image src="/images/home/jinxuan_big(1).jpg" style="width:100%;heigth:100%"></el-image>
            </div>
            <HomeHeathGoods :goodsInfo1="goodsInfo1"></HomeHeathGoods>
        </div>
    </div>
</template>
<script>
import HomeHeathGoods from './heath/HomeHeathGoods'
export default {
    components:{
        HomeHeathGoods
    },
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