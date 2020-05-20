<template>
  <div class="search">
    <SearchLan></SearchLan>
    <OftenSearch :oftenList="oftenList"></OftenSearch>
    <BuyAndLook></BuyAndLook>
    <SearchGoods :searchGoods="searchGoods"></SearchGoods>
  </div>
</template>
<script>
import SearchLan from "@/components/home/search/SearchLan";
import OftenSearch from "@/components/home/search/OftenSearch";
import BuyAndLook from "@/components/home/search/BuyAndLook"
import SearchGoods from "@/components/home/search/SearchGoods"
import store from "@/store/home.js";
export default {
  components: {
    SearchLan,
    OftenSearch,
    BuyAndLook,
    SearchGoods
  },
  data() {
    return {
      oftenList: [],
      searchGoods:[]
    };
  },
  store,
  mounted() {
    this.$store.dispatch("getOftenList").then(results => {
      this.oftenList = results;
    });
     this.$store.dispatch("getLookSearchGoods").then(results => {
      this.searchGoods = results;
    });
  }
};
</script>
<style  scoped>
.search {
  background-color: #f7f7f7;
}
</style>