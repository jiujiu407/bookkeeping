<template>
    <nav>
    <router-link to="/money" class="item" active-class="selected">
   <Icon name="money"></Icon>
    记账</router-link>
    <router-link to="/labels" class="item" active-class="selected">
    <Icon name="label"></Icon>
    标记</router-link>
    <router-link to="/statistics" class="item" active-class="selected">
    <Icon name="statistics"></Icon>
    统计</router-link>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

// scoped:样式只在当前组件范围生效
<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  flex-direction: row;
  > .item {
    padding: 2px 0;
    width: 33.3333%;
    display: flex;
    justify-content: center;
   align-items: center;
     flex-direction: column;
  }
    > .item.selected{
    border: 10px solid springgreen;
  }
}


</style>