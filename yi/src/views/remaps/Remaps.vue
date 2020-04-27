<template>
  <div ref="root" class="home">
    <RemapsHeader ref="souSou" :isfixedtop="souSouTop"></RemapsHeader>
    <RemapsBody :remaps="remaps"></RemapsBody>
    <div class="lianxikefu">
      <i class="el-icon-service service"></i>
      <div class="wenkefu">问客服</div>
    </div>
  </div>
</template>
<script>
import RemapsHeader from '@/components/remaps/RemapsHeader.vue'
import RemapsBody from '@/components/remaps/RemapsBody.vue'
export default {
  name:'Remaps',
  components:{
    RemapsHeader,
    RemapsBody
  },
  data:function(){
    return{
      remaps:[],
      souSouTop: false,
    }
  },
  mounted() {
     this.$store.dispatch("getRemaps").then(results => {
      this.remaps = results;
    });
     window.onload = () => {
      //通过refs从而取出来搜索框的整个div本身自已的高度
      const sousouHeight = this.$refs.souSou.$refs.root.clientHeight;
      this.$refs.root.onscroll = () => {
        //监测搜索框距离上面的初始点滚动的高度
        let scrollTop1 = this.$refs.root.scrollTop;
        //isfixedTop:sousouTop如果监测的搜索框距离上面的高度>=监测的距离到达搜索框的就让搜索框固定
        this.souSouTop = scrollTop1 >= sousouHeight;
      };
    };
  },
}
</script>
<style>
.home {
  height: 100vh;
  overflow: auto;
}
.lianxikefu{
  position: absolute;
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