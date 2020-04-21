<template>
  <div class="block">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in items" :key="item.index">
        <img :src="item.img" alt="" width="100%" height="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { img: "/images/home/lun1.jpg" },
        { img: "/images/home/lun2.jpg" },
        { img: "/images/home/lun3.jpg" },
        { img: "/images/home/lun4.jpg" }
      ]
    };
  }
};
</script>
<style  scoped>
.block{
    position: absolute;
    top: 0;
    z-index: 0;
    width: 100%;
}
</style>