<template>
    <div class="homeleft">
      <router-link tag="p" v-for="(item,index) in breaddata" :key="index" :to="item.path">{{item.linkname}}</router-link>
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
            console.log(this.breaddata)
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
    left: 10px;
    bottom: 20px;
    height: auto;
    width: 35px;
    box-shadow: @shadow;
    background-color: @bgcolor;
    padding: 10px;
  }
</style>
