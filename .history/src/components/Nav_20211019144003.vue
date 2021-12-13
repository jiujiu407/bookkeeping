<template>
    <nav>
    <router-link to="/money" class="item">
   <Icon name="money"></Icon>
    记账</router-link>
    <router-link to="/labels" class="item">
    <Icon name="label"></Icon>
    标记</router-link>
    <router-link to="/statistics" class="item">
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
nav{
  
}


</style>