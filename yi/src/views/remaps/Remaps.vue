<template>
  <div>
    <RemapsHeader></RemapsHeader>
    <RemapsBody :remaps="remaps"></RemapsBody>
  </div>
</template>
<script>
import RemapsHeader from '@/components/remaps/RemapsHeader.vue'
import RemapsBody from '@/components/remaps/RemapsBody.vue'
export default {
  name:'Remaps',
  components:{
    RemapsHeader,
    RemapsBody
  },
  data:function(){
    return{
      remaps:[]
    }
  },
  mounted() {
     this.$store.dispatch("getRemaps").then(results => {
      this.remaps = results;
    });
  },
}
</script>