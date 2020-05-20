<template>
    <div class="list">
      <ul>
        <li class="li" v-for="ill in illness" :key="ill.index">
          <div>{{ill.illnessName}}</div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
     props: {
    illness: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
}
</script>
<style  scoped>

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
 .list ul {
  display: flex;
  height: 3rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  overflow-x: auto;
}
.list ul li {
  width: 100%;
  font-size: 1.3rem;
  padding: 1rem;
  height: 100%;
}
</style>