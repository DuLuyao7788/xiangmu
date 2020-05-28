<template>
  <div class="find_medicine">
    <div class="container">
      <el-header>
        <Header></Header>
      </el-header>
      <el-main ref="root">
        <Navs class="navs" @id="getid" :leimu="leimu"></Navs>
        <Carousel class="lunbo"></Carousel>
        <LeiMu class="leimu" :title="leimu_title" :goodlist="goodlist"></LeiMu>
      </el-main>
      <el-footer>
        <Home-footer></Home-footer>
      </el-footer>
    </div>
  </div>
</template>
<script>
import Header from "../components/findMedicine/Header";
import Navs from "../components/findMedicine/Navs";
import Carousel from "../components/findMedicine/Carousel";
import LeiMu from "../components/findMedicine/LeiMu";
import HomeFooter from "../components/home/HomeFooter";
import store from "@/store/find.js";
export default {
  components: {
    Header,
    Navs,
    Carousel,
    LeiMu,
    HomeFooter
  },
  data() {
    return {
      goodlist: [],
      leimu: [],
      list: "",
      list_id: 1,
      leimu_title:""
    };
  },
  methods: {
    //点击时传入id的方法
    getid(id) {
      this.list_id = id;
      this.$store.dispatch("getgoodlist").then(results => {
      results.forEach(element => {
        //判断和点击的id相等的json id
        if ( this.list_id == element.list_id) {
            //将此id下的goodlist数组赋值给data里定义的goodlist
         console.log(element.title)
         this.leimu_title=element.title
         this.list = element.goodlist
    
        }
      });
      this.goodlist = this.list;
     
    });
  }
  },
  mounted() {
 
    //导航栏下级类目
  

    //导航类类目列表
    this.$store.dispatch("getleimu").then(results => {
      this.leimu = results;
        //  console.log(this.leimu)
    });
  },

  store
};
</script>
<style  scoped>
.el-header,
.el-footer,
.el-main {
  padding: 0;
}
.el-header {
  position: fixed;
  left: 0;
}
.lunbo {
  margin-top: 9.7rem;
  margin-left: 9.4rem;
}
.leimu {
  margin-top: 1rem;
  margin-left: 10.3rem;
}
.navs {
  width: 13.5rem;
  top: 8.5rem;
  left: -4rem;
  position: fixed;
}
</style>