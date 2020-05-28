<template>
  <div class="searchlan">
    <i class="el-icon-arrow-left" @click="to('/')"></i>
    <div class="sousuo">
      <i class="el-icon-search"></i>
      <input type="text"  placeholder="浪漫告白季" autocomplete="off" />
    </div>
    <div class="souBtn">搜索</div>
  </div>
</template>
<script>
export default {
  methods: {
    to(router) {
      this.$router.push({ path: router });
    }
  }
};
</script>
<style  scoped>
.searchlan {
  display: flex;
  justify-content: space-between;
  height: 4.4rem;
  line-height: 4.4rem;
  text-align: center;
  background-color: #fff;
  padding: 0 1rem;
}
.searchlan .el-icon-arrow-left {
  font-size: 2.4rem;
  font-weight: 600;
  align-self: center;
}
.searchlan .sousuo {
  width: 28.2rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  align-self: center;
  background-color: #fff;
  border-radius: 2rem;
  font-size: 1.4rem;
  text-align: left;
  /* padding: .5rem; */
  border: 1px solid #d7d7d7;
  color: #d7d7d7;
}
.searchlan .sousuo .el-icon-search {
  margin: 0 0.5rem;
  font-size: 1.7rem;
}
.searchlan .sousuo input {
  border: none;
  outline: none;
}
.searchlan .souBtn {
  width: 2.4rem;
  color: #686b85;
  font-size: 1.2rem;
}
</style>