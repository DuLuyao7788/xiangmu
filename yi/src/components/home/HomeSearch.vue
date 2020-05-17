<template>
  <div class="sou-suo" :class="{'fixed-top':isFixedTop}" ref="root">
    <div class="address1">
      <img src="/images/home/logo1.png" alt width="30px" height="30px" />
      <a href class="address">安徽</a>
    </div>
    <div class="inner">
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
      default: true
    }
  }
};
</script>
<style  scoped>
.sou-suo {
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
  color: #fff;
  z-index: 9999;
  background-color: transparent;
}
.sou-suo .address1 {
  margin-left:2rem;
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
  color: #999;
  font-size: 14px;
}
.sou-suo .inner {
  width: 25rem;
  height: 17px;
  background-color: #fff;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
  padding: 5px;
}
.sou-suo .zixun {
  display: flex;
  flex-direction: row;
  width: 100px;
  margin-left:2rem;
}
.sou-suo .zixun p {
  margin: 0;
  font-size: 14px;
}
.el-icon-chat-line-square {
  font-size: 30px;
}
.sou-suo.fixed-top {
  position: fixed;
  top: 0;
  width: calc(100% - 40px);
}
</style>