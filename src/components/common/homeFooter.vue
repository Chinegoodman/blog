<template>
  <div ref="homefooter" class="homefooter" :class="{footerfixed:footerfixedstatus}">
    <!--<button style="float: right;" @click="footerfixedfun">切换状态</button>-->
    <div class="content">
      <p>你好，欢迎光临我的个人站。</p>
      <p>站点基于vue.js/vue-router等技术，在项目中我自己尝试封装了：swiper组件/changepage组件/music组件等</p>
      <p>站点同时添加了开始参加前端开发(2016.06)至今的项目链接（静态页）。</p>
      <p>技术技能上：js，jq，css3，vue.js，小程序开发等</p>
      <p>站点右上角有我的邮箱及订阅号(关联了一个自己开发的小程序)等联系方式</p>
      <p>再次欢迎光临</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeFooter",
    data(){
      return{
        // footerfixedstatus:this.$store.state.footerfixedstatus
      }
    },
    computed:{
      footerfixedstatus (){
        return this.$store.getters.getfooterfixedstatus
      }
    },
    methods:{
      // footerfixedfun(){
      //   console.log(this.$store.getters.getfooterfixedstatus);
      //   // this.$store.getters.getfooterfixedstatus
      //   this.$store.commit('mutfooterfixedchange')
      // },
      footerfixedchangefun(){
        let windowHeight = document.documentElement.clientHeight;
        let homefooter_offtop = this.$refs.homefooter.offsetTop;
        let homefooter_offsetHeight = this.$refs.homefooter.offsetHeight;
        let homeheader_height = 65;//此处顶部高度不计入考量。因为wrapcontent.vue 部分已经设置了paddingtop，包含了此部分的高度。如有变动去common.less修改即可
        let homewraocontent_height = this.$store.getters.gethomewraocontent_height;
        console.log(`windowHeight:${windowHeight};homefooter_offtop:${homefooter_offtop};homefooter_offsetHeight:${homefooter_offsetHeight};homewraocontent_height:${homewraocontent_height}` )
        if(windowHeight>homefooter_offtop+220){
          this.$store.commit('mutfooterfixedchange',true)
        }else {
          this.$store.commit('mutfooterfixedchange',false)
        }
      }
    },
    mounted(){
      this.footerfixedchangefun()
    },
    watch:{
      $route(){
        this.footerfixedchangefun()
      }
    }
  }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .homefooter{
    background-color: @footerbgcolor;
    box-shadow: @shadow;
    position: relative;
    height: @footerheight;
    box-sizing: border-box;
    padding: 15px 0;
    .content{
      min-width: @minwidth;
      width: @width;
      margin: 0 auto;
      &>p{
        text-align: center;
        line-height: 2em;
      }
    }
  }
  .homefooter.footerfixed{
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
</style>
