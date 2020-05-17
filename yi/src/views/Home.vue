<template>
  <div class="home">
    <el-container>
      <el-header height="150px">
        <HomeSearch></HomeSearch>
        <HomeCarousel></HomeCarousel>
      </el-header>
      <el-main>
        <HomeDaoHang></HomeDaoHang>
        <HomeGoodsInfo :goodsInfo1="goodsInfo1"></HomeGoodsInfo>
        <div>
          <el-image src="/images/home/heath-bottom.jpg"></el-image>
        </div>
        <HomeJinXuan :goodsInfo1="goodsInfo1"></HomeJinXuan>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeSearch from "@/components/home/HomeSearch.vue";
import HomeCarousel from "@/components/home/HomeCarousel.vue";
import HomeDaoHang from "@/components/home/HomeDaoHang.vue";
import HomeGoodsInfo from "@/components/home/HomeGoodsInfo.vue";
import HomeJinXuan from "@/components/home/HomeJinXuan";
import store from "@/store/home.js";
export default {
  name: "Home",
  components: {
    HomeSearch,
    HomeCarousel,
    HomeDaoHang,
    HomeGoodsInfo,
    HomeJinXuan
  },
  data() {
    return {
      goodsInfo1: []
    };
  },
  mounted() {
    this.$store.dispatch("getHomeGoodsInfo").then(results => {
      this.goodsInfo1 = results;
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
</style>
