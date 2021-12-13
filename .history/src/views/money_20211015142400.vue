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
        name: "Money",
    }
</script>

<style lang="scss" scoped> 
.nav-wrapper{
    border:1px solid green;
    display:flex;
    flex-direction: column;
}
.content{
    // 
    flex-grow: 1;
}
</style>