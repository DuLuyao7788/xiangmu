<template>
  <div class="gouwucheheader" :class="{'fixedtop':isfixedtop}" ref="root">
    <i class="el-icon-arrow-left el-icon--left left-icon" @click="to('/')"></i>
    <ul class="jutijieshao">
      <li :class="{active:active==1}">购物清单</li>
      <li :class="{active:active==2}">需求清单</li>
    </ul>
    <i class="el-icon-more el-icon--right icon-more"></i>
  </div>
</template>
<script>
export default {
  name:'GouWuCheHeader',
  data:function(){
    return{
      active:1
    }
  },
   props:{
   isfixedtop:{
      type:Boolean,
      default:false
    }
  },
   methods: {
    to(router){
      this.$router.push({path:router})
    }
  },
}
</script>
<style scoped>
ul,li{
  list-style: none;
}
/* 整体的div */
.gouwucheheader{
  width: 41.4rem;
  height:4.9rem;
  display: flex;
  justify-content: space-between;
  color: #333;
  background-color: #fff;
  border: 0.11rem solid #eee;
}
/* 返回的图标 */
.left-icon{
  font-size: 2.6rem;
  color: #909399;
  margin-left: 2rem;
  line-height: 4.9rem;
}
/* 具体的介绍ul */
.jutijieshao{
  display: flex;
  margin-left: -5rem;
  font-size: 1.98rem;
  margin-top: 1rem;
}
.jutijieshao li{
  font-weight: 700;
  margin-bottom: 2rem;
}
/* 设置li的第一个元素 */
.jutijieshao li:nth-child(1){
 margin-right: 3rem;
}
/* 三个点图标 */
.icon-more{
  font-size: 2.6rem;
  color: #909399;
  margin-top:1.1rem;
  margin-right: 1.5rem;
}
/* 固定的样式 */
.fixedtop{
  position: fixed;
  top: 0;
  width: 41.4rem;
  height:5rem;
  z-index: 9999;
  background-color: #fff;
}
/* 激活的时候显示 */
.active{
  text-decoration-line: underline;
  text-decoration-color: blue;
  text-decoration-style: solid;
}

</style>