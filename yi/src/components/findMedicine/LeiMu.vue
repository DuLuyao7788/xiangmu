<template>
    <div class="leimu">
        <h1>{{title}}</h1>
        <el-col   :span="8" class="lmk" v-for="item  in goodlist" :key="item.index">
         <el-image :src="'/images/findMeducune/remenleimu/'+item.img"></el-image>
            <span>{{item.title}}</span>
        </el-col>
    </div>
</template>
<script>

export default {
       props: {
        title: {
       type: String,
       default: function() {
        return [];
      }
    },
       goodlist: {
       type: Array,
       default: function() {
        return [];
      }
    }
   },
  data() {
      return {
          id:'',
       
      }
  },
    mounted() {
     
    },
   
 
}
</script>
<style>

    .lmk{
        width: 25%;
        margin:1.2rem 1.8rem 1.2rem 0.2rem;
        color: #333;
        text-align: center;
    }
    .leimu h1{
        font-size: 1.7rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: 1rem;
        }
</style>