<template>
  <div class="homefooter">
    <el-row type="flex" justify="space-between">
      <el-col >
        <div class="logo" :class="{active:active==1}" @click="$router.push({ path: '/' })">
          <i class="el-icon-s-home"></i>
          <div>首页</div>
        </div>
      </el-col>
      <el-col>
        <div class="logo" :class="{active:active==2}" @click="$router.push({ path: '/' })">
          <i class="el-icon-discover"></i>
          <div>找药</div>
        </div>
      </el-col>
       <el-col v-if="active==1">
        <div  class="imgs"  :class="{active:active==3}" @click="$router.push({ path: '/remaps' })">
         <el-image src="/images/home/footer_Logo.png"></el-image>
        </div>
      </el-col>
      <el-col >
        <div class="logo" :class="{active:active==4}" @click="$router.push({ path: '/' })">
          <i class="el-icon-shopping-cart-2"></i>
          <div>购物车</div>
        </div>
      </el-col>
      <el-col >
        <div class="logo" :class="{active:active==5}" @click="$router.push({ path: '/' })">
          <i class="el-icon-user"></i>
          <div>我的</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
     props: {
    active: {
      default: 1
    }
  }
}
</script>
<style  scoped>
.homefooter {
  text-align: center;
  color: #606266;
  border-top: 0.1rem solid #dcdfe6;
  padding: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
}
.homefooter i {
  font-size: 2.5rem;
}
.logo{
    margin-top: 10px;
}
.active {
  color:#f66;
}
</style>