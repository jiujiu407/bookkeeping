<template>
    <div class="nav">
    <router-link to="/money">
   i
    记账</router-link>
    <router-link to="/labels">标记</router-link>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

// scoped:样式只在当前组件范围生效
<style lang="scss" scoped>

.nav{
    border:1px solid red;
}

</style>