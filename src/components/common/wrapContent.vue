<template>
  <div class="wraocontent">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "wrapContent"
  }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .wraocontent{
    background: @wrapcontentbgcolor;
  }
</style>
