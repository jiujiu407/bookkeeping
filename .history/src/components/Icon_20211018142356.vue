<template>
    <div>
 <svg>
        <use xlink:href="#label"/>
    </svg>
    </div>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try{
    importAll(require.context('../assets/icons',true,/\.svg$/));
    }catch(error){
 console.log(error)
    }
    export default {
        props:[]
    }
</script>

<style lang="scss" scoped>

</style>