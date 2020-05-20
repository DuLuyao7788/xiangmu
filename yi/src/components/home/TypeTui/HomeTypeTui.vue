<template>
  <div class="typeTui">
    <HomeTypeList :illness="typeTui"></HomeTypeList>
    <div class="list">
      <ul>
        <li v-for="i in tuiList" :key="i.index">{{i.tuiName}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import HomeTypeList from "../ill/HomeTypeList";
export default {
  components: {
    HomeTypeList
  },
  props: {
    typeTui: {
      type: Array,
      default: function() {
        return [];
      }
    },
    tuiList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>
<style  scoped>
.typeTui {
  background-color: #fff;
  padding: 1rem;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.typeTui ul {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.typeTui ul li {
  color: #686b85;
  font-size: 1.1rem;
  width: 6rem;
  height: 2.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: .5rem;
}
</style>