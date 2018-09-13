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
          // backgroundImage:"url('http://img.hb.aicdn.com/4047c0f9599a39b1d6bd0940d6828680a37a0a032fe24-ZDBI2r_fw658')",
          // backgroundImage:"",
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
      // // let wrapcontent_height = this.$refs.wrapcontent.offsetTop;
      // let wrapcontent_height = this.$refs.wrapcontent.offsetHeight;
      // // console.log(wrapcontent_height)
      // this.$store.commit('muthomewraocontent_height',wrapcontent_height)
    },
    watch:{
      // $route(){
      //   let wrapcontent_height = this.$refs.wrapcontent.offsetHeight;
      //   this.$store.commit('muthomewraocontent_height',wrapcontent_height)
      // }
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
