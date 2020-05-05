<template>
  <div class="goodspage" ref="root">
    <el-container>
      <el-header height="68">
        <GoodsInfoHeader></GoodsInfoHeader>
      </el-header>
      <el-main>
        <GoodsInfoHeaderDaoHang ref="souSou" :isfixedtop="souSouTop"></GoodsInfoHeaderDaoHang>
        <GoodsInfoHeaderLunBo></GoodsInfoHeaderLunBo>
      </el-main>
      <el-footer>
        <GoodsInfoFooter></GoodsInfoFooter>
      </el-footer>
    </el-container>
    <!-- 联系客服 -->
     <div class="lianxikefu">
      <i class="el-icon-service service"></i>
      <div class="wenkefu">问客服</div>
    </div>
  </div>
</template>
<script>
import GoodsInfoHeader from '@/components/remaps/goodsinfo/GoodsInfoHeader.vue'
import GoodsInfoHeaderDaoHang from '@/components/remaps/goodsinfo/GoodsInfoHeaderDaoHang.vue'
import GoodsInfoHeaderLunBo from '@/components/remaps/goodsinfo/GoodsInfoHeaderLunBo.vue'
import GoodsInfoFooter from '@/components/remaps/goodsinfo/GoodsInfoFooter.vue'
export default {
  name:'GoodsPage',
  components:{
    GoodsInfoHeader,
    GoodsInfoHeaderDaoHang,
    GoodsInfoHeaderLunBo,
    GoodsInfoFooter
  },
  data:function(){
    return{
      souSouTop:false
    }
  },
  mounted() {
     window.onload = () => {
      //通过refs从而取出来搜索框的整个div本身自已的高度
      const sousouHeight = this.$refs.souSou.$refs.root.clientHeight;
      const souSouoffectTop = this.$refs.souSou.$refs.root.offsetTop;
      console.log(sousouHeight,souSouoffectTop)
      window.onscroll = () => {
        //监测搜索框距离上面的初始点滚动的高度
        let scrollTop1 = this.$refs.root.scrollTop;
        //isfixedTop:sousouTop如果监测的搜索框距离上面的高度>=监测的距离到达搜索框的就让搜索框固定
        this.souSouTop = scrollTop1 >= souSouoffectTop-sousouHeight-20;
        console.log(this.souSouTop)
      };
    };
  },
}
</script>
<style scoped>
.el-main,.el-header,.el-footer{
  padding: 0;
  margin: 0;
}
.goodspage{
  width: 41.4rem;
  height: 189.6rem;
  background-color: #EEE;
}
.el-main{
  width: 100%;
}
.lianxikefu{
  position: fixed;
  bottom:10rem;
  right: 2rem;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #fff;
}
.service{
  position: absolute;
  top: 1rem;
  left: 1.8rem;
  font-size: 2.8rem;
  text-align: center;
  color: #81C6EF;
}
.wenkefu{
  position: absolute;
  top: 3.9rem;
  left: 1.6rem;
  font-size: 1.1rem;
  text-align: center;
  color: #81C6EF;
}

</style>