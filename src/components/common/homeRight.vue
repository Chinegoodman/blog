<template>
  <div class="homeright" @click="gotopagetop">
    <!--<p>homeRight</p>-->
    <i class="icon iconfont icon-airplaneblackshapefromtopview"></i>
  </div>
</template>

<script>
  export default {
    name: "homeRight",
    methods:{
      gotopagetop(){
        document.documentElement.scrollTop=0
      }
    }
  }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .homeright{
    position: fixed;
    right: @sidecommontobody;
    bottom: @sidecommonbottom;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    box-shadow: @shadow;
    text-align: center;
    line-height: 35px;
    box-sizing: border-box;
    i{
      font-size: 25px;
      cursor: pointer;
    }
    &:hover{
      border: @border;
      box-shadow: @shadow;
      background-color: @bgcolor;
    }
  }
</style>
