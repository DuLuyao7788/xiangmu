<template>
  <div class="searchgoods">
    <div class="goods" v-for="item in searchGoods" :key="item.index">
      <div>
        <el-image :src="item.img" class="imggood"></el-image>
      </div>
      <p>{{item.title}}</p>
      <span>{{item.money}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    searchGoods: {
      type: Array,
      default: function() {
        [];
      }
    }
  }
};
</script>
<style  scoped>
.searchgoods {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  padding-top: 1rem;
  background-color: #fff;
}
.searchgoods .goods {
  height: 22.4rem;
  width: 17.2rem;
  background-color: #fff;
  box-shadow: 0 1px 24px 0 rgba(38, 45, 86, 0.1);
  margin-left: 1rem;
  margin-bottom: 1rem;
}
.searchgoods .imggood {
  width: 12rem;
  height: 12rem;
  margin: 0.8rem 2.4rem;
}
.searchgoods p {
  padding: 0 1rem;
  margin: 0.5rem 0 1rem .5rem;
  color: #262d56;
  font-size: 1.3rem;
}
.searchgoods span {
  color: #ff394e;
  margin-left: 1rem;
  font-size: 1.5rem;
}
</style>