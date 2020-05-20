<template>
  <div class="illness">
   <HomeTitle img="/images/home/jia.png" title="常见疾病"></HomeTitle>
   <HomeTypeList :illness="illness"></HomeTypeList>
    <div class="content" v-for="i in 5" :key="i.index">
      <section class="xinxi">
        <a href>轻度腱鞘炎需要擦点什么要 怎样恢复快 方法又简单</a>
      </section>
      <section class="time">2015-6-15</section>
    </div>
    <div class="more">
      <a href>查看更多腱鞘炎问题<i class="el-icon-arrow-right"></i></a>
    </div>
  </div>
</template>
<script>
import HomeTitle from './HomeTitle'
import HomeTypeList from './HomeTypeList'
export default {
    components:{
HomeTitle,
HomeTypeList
    },
  props: {
    illness: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style>
.illness {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff;
}

.content {
  display: flex;
}
.xinxi {
  width: 26.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 1rem;
}
a {
  text-decoration: none;
  color: #000;
  font-size: 1.7rem;
}
.time {
  padding: 1rem 0;
  line-height: 2.4rem;
  font-size: 1.3rem;
  text-align: center;
  color: #a3a6b7;
}
.content:not(:nth-last-child(2)) {
  border-bottom: 1px solid #e5e5e5;
}
.more{
    text-align: center;
    padding: 1rem 0;
}
.more a{
    color: #5577fb;
    font-size: 1.4rem;
}

</style>