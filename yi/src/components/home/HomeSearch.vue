<template>
  <div class="sou-suo" :class="{'fixed-top':isFixedTop}" ref="root">
    <div class="address1">
      <img src="/images/home/logo1.png" alt width="30px" height="30px" />
      <a href class="address">安徽</a>
    </div>
    <div class="inner" @click="to('/search')">
      <i class="el-icon-search el-icon--left"></i>
      <span>请输入商品名称</span>
    </div>
    <div class="zixun">
      <i class="el-icon-chat-line-square"></i>
      <p>
        资讯
        <br />药师
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isFixedTop: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    to(router){
      this.$router.push({path:router})
    }
  }
};
</script>
<style  scoped>
.sou-suo {
  padding: .5rem 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  z-index: 9999;
  background-color: transparent;
  position: fixed;
  top: 0;
}
.sou-suo .address1 {
  margin-left:1rem;
  margin-right:1rem;
  width: 95px;
  display: flex;
}

.sou-suo .address {
   width: 100%;
  display: block;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
}
.sou-suo .inner {
  width: 25rem;
  height: 17px;
  background-color: #fff;
  color: #999;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
  padding: 5px;
}
.sou-suo .zixun {
  display: flex;
  flex-direction: row;
  color: #fff;
  width: 70px;
  margin-left:2rem;
}
.sou-suo .zixun p {
  margin: 0;
  font-size: 1rem;
}
.el-icon-chat-line-square {
  font-size: 25px;
}
.sou-suo.fixed-top {
  background-color: #f7f7f7;
}
.sou-suo.fixed-top .address{
 color: #999
}
.sou-suo.fixed-top .inner{
    color: #b8b8be;
    background: hsla(0,0%,92.2%,.48);
}
.sou-suo.fixed-top .zixun{
    color: #b8b8be;
}
</style>