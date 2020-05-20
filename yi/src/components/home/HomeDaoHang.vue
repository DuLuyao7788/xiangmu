<template>
  <div class="sydh">
    <el-row>
      <el-col v-for="(item,i) in homedao" :key="i" :span="4" :offset="(i!=0 && i!= 5) ? 1 : 0">
        <el-image :src="item.img"  style="width: 45px; height: 45px">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div>{{ item.title }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homedao: [
        { id: 1, title: "轻松找药", img: "/images/home/homedao1.png" },
        { id: 2, title: "轻松找药", img: "/images/home/homedao2.png" },
        { id: 3, title: "轻松找药", img: "/images/home/homedao3.png" },
        { id: 4, title: "轻松找药", img: "/images/home/homedao4.png" },
        { id: 5, title: "轻松找药", img: "/images/home/homedao5.png" },
        { id: 6, title: "轻松找药", img: "/images/home/homedao6.png" },
        { id: 7, title: "轻松找药", img: "/images/home/homedao7.png" },
        { id: 8, title: "轻松找药", img: "/images/home/homedao8.png" },
        { id: 9, title: "轻松找药", img: "/images/home/homedao9.png" },
        { id: 10, title: "轻松找药",img: "/images/home/homedao10.png" }
      ]
    };
  }
};
</script>

<style scoped>
.sydh {
  padding: 10px;
  background-color: #fff;
}
.el-col {
  text-align: center;
  padding-bottom: 10px;
  font-size:14px ;
}

</style>