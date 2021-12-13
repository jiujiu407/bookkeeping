<template>
    <div class="layout-wrapper">
        <div class="content" :class="classPrefix && `${classPrefix}-content` ">
           <slot></slot>
        </div>
     <Nav />
    </div>
</template>

<script>
    export default {
       props: ['classPrefix'],
    }
</script>

<style lang="scss" scoped>
.layout-wrapper{
    display:flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    // 1的意思是尽量把所有的高度都给content,其他部分占剩下的
    flex-grow: 1;
    overflow: auto;
}
</style>