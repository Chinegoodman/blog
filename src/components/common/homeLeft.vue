<template>
    <div class="homeleft">
      <router-link tag="p" v-for="(item,index) in breaddata" :class="{nobordertop:index==breaddata.length-1}" :key="index" :to="item.path">{{item.linkname}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "homeLeft",
      data(){
          return{
            breaddata:[

            ],
          }
      },
      methods:{
          getbread(){
            this.breaddata = this.$route.meta.bread;
            // console.log(this.breaddata)
          }
      },
      watch:{
          $route(newval,oldval){
            this.getbread()
          }
      },
      mounted(){
        this.getbread()
      }
    }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .homeleft{
    position: fixed;
    left: @sidecommontobody;
    bottom: @sidecommonbottom;
    height: auto;
    box-shadow: @shadow;
    background-color: @homeleftbg;
    padding: 10px;
    p{
      font-size: 14px;
      width: 15px;
      padding: 5px;
      cursor: pointer;
      color: @routlinkcolor;
      background-color: @routlinkbg;
      border-bottom: 2px dashed @bordercolor;
      &:hover{
        background-color: @routlinkhoverbg;
        /*color:;*/
      }
    }
    p.nobordertop{
      border-bottom: none;
    }
  }
</style>
