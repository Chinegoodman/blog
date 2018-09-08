<template>
  <div id="app">
    <homeHeader></homeHeader>
    <wrapContent></wrapContent>
    <homeFooter></homeFooter>
    <homeLeft></homeLeft>
    <homeRight></homeRight>
  </div>
</template>

<script>
  import homeHeader from '@/components/common/homeHeader'
  import homeFooter from '@/components/common/homeFooter'
  import wrapContent from '@/components/common/wrapContent'
  import homeLeft from '@/components/common/homeLeft'
  import homeRight from '@/components/common/homeRight'
export default {
    components:{
      homeHeader,homeFooter,wrapContent,homeLeft,homeRight
    },
  name: 'App',

}
</script>

<style lang="less">
  @import url('assets/common');
  body{
    background-color: @bgcolor;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
