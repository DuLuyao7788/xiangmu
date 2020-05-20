<template>
  <div class="buylook">
    <i class="el-icon-view"></i>
    <div class="text1">买过和看过</div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.buylook {
  display: flex;
  background-color: #fff;
  flex-direction: row-reverse;
  height: 5.4rem;
}
.buylook .text1 {
  margin-right: 10rem;
  font-size: 1.8rem;
  color:#262d56;
  align-self: center;
}
.buylook .el-icon-view {
  align-self: center;
  color: #d7d7d7;
  font-size: 2rem;
  margin-right: 2rem;
}
</style>