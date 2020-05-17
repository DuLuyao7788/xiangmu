<template>
  <div class="gouwuche" ref="root">
    <GouWuCheHeader  ref="souSou" :isfixedtop="souSouTop"></GouWuCheHeader>
    <GouWuCheBody></GouWuCheBody>
    <!-- <GouWuCheGoods :gouwuche="gouwuche" :click="click"></GouWuCheGoods> -->
    <!-- 联系客服 -->
     <div class="lianxikefu">
      <i class="el-icon-service service"></i>
      <div class="wenkefu">问客服</div>
    </div>
  </div>
</template>
<script>
import GouWuCheHeader from '@/components/gouwuche/GouWuCheHeader'
import GouWuCheBody from '@/components/gouwuche/GouWuCheBody'

export default {
  name:'GouWuChe',
  components:{
    GouWuCheHeader,
    GouWuCheBody
    
  },
  data:function(){
    return{
      souSouTop:false,
      gouwuche:[]
    }
  },
   mounted() {
      this.$store.dispatch("getGouWuChe").then(results => {
      this.gouwuche = results;
    });
     window.onload = () => {
      //通过refs从而取出来搜索框的整个div本身自已的高度
      const sousouHeight = this.$refs.souSou.$refs.root.clientHeight;
      console.log(this.$refs.root)
      this.$refs.root.onscroll = () => {
        console.log(11)
        //监测搜索框距离上面的初始点滚动的高度
        let scrollTop1 = this.$refs.root.scrollTop;
        //isfixedTop:sousouTop如果监测的搜索框距离上面的高度>=监测的距离到达搜索框的就让搜索框固定
        this.souSouTop = scrollTop1 >= sousouHeight;
      };
    };
  },
  methods: {
    click(){
     
    }
  },
}
</script>
<style scoped>
/* 设置整体的背景颜色 */
.gouwuche{
  height: 100vh;
  background-color:#FBFBFC;
}
.lianxikefu{
  position: fixed;
  bottom:12rem;
  right: 5rem;
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