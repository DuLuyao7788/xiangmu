<template>
  <div class="xiaodudiv2">
    <div class="icon-theme1"></div>
    <span class="xiaodufanghui">{{xiadufanghuispan}}</span>
   </div>
</template>
<script>
export default {
  name:"RemapsTuiJian",
  props:{
    xiadufanghuispan:{
      default:''
    }
  }
}
</script>
<style scoped>
.xiaodudiv2{
  width: 41.4rem;
  height: 4.4rem;
  font-size: 1.54rem;
  line-height: 4.4rem;
}
/* 图标 */
.icon-theme1{
  width: 0.33rem;
  height: 2.4rem;
  display: inline-block;
  background-color: rgb(73, 144, 226);
  margin-left: 1.3rem;
  vertical-align: middle;
  margin-bottom: 0.2rem;
  padding: 0.2rem 0;
}
/* 消毒防护 */
.xiaodufanghui{
  margin-left: 1.3rem;
  margin-right: 1rem;
  padding: 0.5rem 0;
}
</style>