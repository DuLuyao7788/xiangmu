<template>
    <div>
           <h1><el-image :src="img" style="width:20px;height:20px"></el-image>{{title}}</h1>
    </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      default: ""
    },
    title:{
      type: String,
      default: ""
    }
  }
  
}
</script>
<style scoped>
h1{
    margin-top: 0;
    font-weight: 400;
}
h1 .el-image{
    margin-right: .5rem;
}
</style>