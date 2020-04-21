<template>
  <div class="home">
    <el-container>
      <el-header height="150px">
        <HomeSearch></HomeSearch>
        <HomeCarousel></HomeCarousel>
      </el-header>
      <el-main>
        <HomeDaoHang></HomeDaoHang>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import HomeSearch from "@/components/home/HomeSearch.vue";
import HomeCarousel from "@/components/home/HomeCarousel.vue"
import HomeDaoHang from "@/components/home/HomeDaoHang.vue"
export default {
  name: "Home",
  components: {
    HomeSearch,
    HomeCarousel,
    HomeDaoHang
  }
};
</script>
<style  scoped>
.el-header,
.el-main{
  padding: 0;
}
</style>
