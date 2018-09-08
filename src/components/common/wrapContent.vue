<template>
  <div ref="wrapcontent" class="wrapcontent" :class="{footerfixed:footerfixedstatus}" :style="wrapcontentstyle">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "wrapContent",
    data(){
      return{
        wrapcontentstyle:{
          backgroundImage:"url('http://p2fo7k1rk.bkt.clouddn.com/bd1e1201808100938304442.jpg')",
          backgroundSize:'cover',
          backgroundPosition:'center center',
          backgroundRepeat:'repeat',
          backgroundAttachment:'fixed'
        }
      }
    },
    computed:{
      footerfixedstatus (){
        return this.$store.getters.getfooterfixedstatus
      }
    },
    mounted(){
      // let wrapcontent_height = this.$refs.wrapcontent.offsetTop;
      let wrapcontent_height = this.$refs.wrapcontent.offsetHeight;
      console.log(wrapcontent_height)
      this.$store.commit('muthomewraocontent_height',wrapcontent_height)
    }
  }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .wrapcontent{
    background: @wrapcontentbgcolor;
    padding-top: @headerheight;
  }
  .wrapcontent.footerfixed{
    padding-bottom: @footerheight;
  }
</style>
