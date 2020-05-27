<template>
  <div class="home" ref="root">
    <el-container>
      <el-header height="150px">
        <HomeSearch ref="search1" :is-fixed-top="souSouTop"></HomeSearch>
        <HomeCarousel></HomeCarousel>
      </el-header>
      <el-main>
        <HomeDaoHang :homedao="homedao"></HomeDaoHang>
        <HomeGoodsInfo :goodsInfo1="goodsInfo1"></HomeGoodsInfo>
        <div class="img1">
          <el-image src="/images/home/heath-bottom.jpg"></el-image>
        </div>
        <HomeJinXuan :goodsInfo="goodsInfo"></HomeJinXuan>
        <Homeillness :illness="illness"></Homeillness>
        <HomeTypeTui :typeTui="typeTui" :tuiList="tuiList"></HomeTypeTui>
      </el-main>
      <el-footer>
        <HomeFooter></HomeFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeSearch from "@/components/home/HomeSearch.vue";
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import HomeDaoHang from "@/components/home/HomeDaoHang.vue";
import HomeGoodsInfo from "@/components/home/heath/HomeGoodsInfo.vue";
import HomeJinXuan from "@/components/home/HomeJinXuan";
import Homeillness from "@/components/home/ill/Homeillness"
import HomeFooter from "@/components/home/HomeFooter"
import HomeTypeTui from "@/components/home/TypeTui/HomeTypeTui"
import store from "@/store/home.js";
export default {
  name: "Home",
  components: {
    HomeSearch,
    HomeCarousel,
    HomeDaoHang,
    HomeGoodsInfo,
    HomeJinXuan,
    Homeillness,
    HomeFooter,
    HomeTypeTui
  },
  data() {
    return {
      homedao:[],
      goodsInfo1:[],
      goodsInfo:[],
      illness:[],
      typeTui:[],
      tuiList:[],
      souSouTop: false,
    };
  },
  mounted() {
    // 搜索框
     window.onload = () => {
      // const search1Height = this.$refs.search1.$refs.root.clientHeight;
      this.$refs.root.onscroll = () => {
        //监测搜索框距离上面的初始点滚动的高度
        let scrollTop1 = this.$refs.root.scrollTop;
        //isfixedTop:sousouTop如果监测的搜索框距离上面的高度>=监测的距离到达搜索框的就让搜索框固定
        this.souSouTop = scrollTop1 >= 150;
      };
    };
    this.$store.dispatch("getHomedao").then(results => {
      this.homedao = results;
    });
    this.$store.dispatch("getHomeGoodsInfo").then(results => {
      this.goodsInfo1 = results;
    });
     this.$store.dispatch("getGoodsInfo").then(results => {
      this.goodsInfo = results;
    });
     this.$store.dispatch("getIllness").then(results => {
      this.illness = results;
    });
    this.$store.dispatch("getTypeTui").then(results => {
      this.typeTui = results;
    });
     this.$store.dispatch("getTuiList").then(results => {
      this.tuiList = results;
    });
  },
  store
};
</script>
<style  scoped>
.el-header,
.el-main {
  padding: 0;
  background-color: #f7f7f7;
}
.el-main .img1 .el-image{
  width: 100%;
}
.el-footer{
  padding: 0;
}
</style>
