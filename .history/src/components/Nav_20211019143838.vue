<template>
    <nav>
    <router-link to="/money">
   <Icon name="money"></Icon>
    记账</router-link>
    <router-link to="/labels">
    <Icon name="label"></Icon>
    标记</router-link>
    <router-link to="/statistics">
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



</style>