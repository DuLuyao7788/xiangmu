<template>
    <div class="my">
        <div class=" ">
            <el-header>
              <my-header></my-header>
            </el-header>
            <el-main>
                 <my-top></my-top>
                 <my-order></my-order>
                 <my-server></my-server>
                 <exclusive-pharmacist></exclusive-pharmacist>
                 <Welfare></Welfare>
            </el-main>
            <el-footer>
               <Home-footer ></Home-footer>
            </el-footer>
        </div>
    </div>
</template>

<script>
import MyHeader from '../components/my/MyHeader'
import MyTop from '../components/my/MyTop'
import MyOrder from '../components/my/MyOrder'
import MyServer from '../components/my/MyServer'
import ExclusivePharmacist from '../components/my/ExclusivePharmacist'
import Welfare from '../components/my/Welfare'
import HomeFooter from '../components/home/HomeFooter'
export default {
  components:{
      MyHeader,
      MyTop  ,
      MyOrder,
      MyServer,
      ExclusivePharmacist,
      Welfare,
      HomeFooter
  }
}
</script>
<style  scoped>
.el-header,
.el-footer,.el-main {
  padding: 0;
}
</style>