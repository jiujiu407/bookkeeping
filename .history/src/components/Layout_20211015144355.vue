<template>
    <div class="nav-wrapper">
        <div class="content">
            牛牛
        </div>
     <Nav />
    </div>
</template>

<script>
    export default {
        name=
    }
</script>

<style lang="scss" scoped>
.nav-wrapper{
    border:1px solid green;
    display:flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    // 1的意思是尽量把所有的高度都给content,其他部分占剩下的
    flex-grow: 1;
    overflow: auto;
    border: 1px solid blue;
}
</style>