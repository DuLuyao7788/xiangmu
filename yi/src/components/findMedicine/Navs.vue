
<template class="navs">

<el-scrollbar style="height:100%">
     <ul >
       <li v-for="(item , index) in leimu"  :key="index" class="infinite-list-item" 
       :class="{'active':currentSort==index}" @click="active(index),show(item.id)">{{ item.count }}</li>
    </ul>
</el-scrollbar>

</template>
/**侧边导航 */
<script>

  export default {
    data () {
      return {
         currentSort:0,
      }
    },
      props: {
       leimu: {
       type: Array,
       default: function() {
        return [];
      }
    }
   },
    methods: {
      load () {
    
      },
      show(index){
        this.$emit('id',index)
      },
      active(index) {
       this.currentSort  =  index;
    }

    }
  }
</script>

<style scoped>
  .navs .active {
      background-color: #fff;
      color: red;
      border-left:2px solid red ;
  }
  .navs .el-scrollbar__bar .is-vertical {
      width: 0.1rem !important;
    }
  .navs .el-scrollbar__wrap {
      overflow-x: hidden;
     
    }
   .navs .el-scrollbar{
     width: 13.5rem;
     margin-top: 0.1rem;
     margin-right: 1rem;
    }
  
  .navs ul{
    height: 100%;
    overflow: auto;
    width: 100%;
    float: left;
    -webkit-overflow-scrolling: touch;
    border-right: 1px solid rgba(0,0,0,.1);
    background: #F7F7F7;
    font-size:  1.37333333333333335rem;
 
  }
 .navs ul li{
    padding-right:  1rem;
    padding-left:  1rem;
    white-space: nowrap;
    overflow: hidden;
    height: 5rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
    line-height: 5rem;
  }
 .navs li, ul {
    list-style: none;
}

</style>