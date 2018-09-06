<template>
    <div class="self-swiperbox" :style="swiperdata.swiperheight">
      <transition name="fade">
        <div @click="changepage(item.linktype,item.linkurl)" class="swiper-libox" v-if="index==defaultactivetindex" v-for="(item,index) in swiperdata.swiperarr" :key="index" :style="{backgroundImage:'url('+item.picurl+')'}">
          <p v-text="item.title"></p>
          <i v-text="item.tip"></i>
        </div>
      </transition>
      <div @click="left" v-if="swiperdata.sideatatus!=false" class="self-swiper-sidebtn self-swiper-sideleftbtn">左</div>
      <div @click="right" v-if="swiperdata.sideatatus!=false" class="self-swiper-sidebtn self-swiper-siderightbtn">右</div>

      <div v-if="swiperdata.pointsboxstatus!=false" class="self-swiper-pointsboxstyle" :style="swiperdata.pointsboxstyle">
        <i @click="defaultactivetindex=index"  :style="swiperdata.pointstyle" :class="{pointactivestyle:index==defaultactivetindex}" v-for="(item,index) in swiperdata.swiperarr.length" :key="index">{{index+1}}</i>
      </div>
    </div>
</template>

<script>
    export default {
      props:['swiperdata'],
      data(){
        return{
          defaultactivetindex:0,
        }
      },
        name: "swiper",
      methods:{
        changepage(type,url){
          if(type=='http'){
            window.open(url)
          }else {
            this.$router.push(url)
          }
        },
        left(){
          if(this.defaultactivetindex==0){
            this.defaultactivetindex=this.swiperdata.swiperarr.length-1
          }else {
            this.defaultactivetindex--
          }
        },
        right(){
          if(this.defaultactivetindex==this.swiperdata.swiperarr.length-1){
            this.defaultactivetindex=0
          }else {
            this.defaultactivetindex++
          }
        }
      },
      beforeCreate:()=>{
        // this.defaultactivetindex=this.swiperdata.activetindex
      }
    }
</script>

<style scoped lang="less">
  @import url('./../../common');
  @bgcolor:rgba(255,255,255,0.5);
  @bgactivecolor:rgba(255,255,255,0.9);
  @color:rgba(0,0,0,0.75);
  @activecolor:rgba(0,0,0,0.9);
  @sidebarheight:35px;
  @sidebaroff:15px;

  .self-swiperbox{
    position: relative;
    .swiper-libox{
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      background-color: #ccc;
      position: absolute;
      left: 0;
      top: 0;
      p{
        background: @bgcolor;
        color: @color;
        display: inline-block;
        margin-left: 25px;
        margin-right: 10px;
        margin-top: 10px;
        padding: 0 15px;
        &:hover{
          background: @bgactivecolor;
          color: @activecolor;
          box-shadow: @shadow;
        }
      }
      i{
        background: @bgcolor;
        color: @color;
        font-style: normal;
        display: inline-block;
        padding: 0 5px;
        &:hover{
          background: @bgactivecolor;
          color: @activecolor;
          box-shadow: @shadow;
        }
      }
    }
    .self-swiper-sidebtn{
      position: absolute;
      top: 50%;
      width: @sidebarheight;
      height: @sidebarheight;
      border-radius: 50%;
      text-align: center;
      line-height: @sidebarheight;
      font-weight: bold;
      color: @color;
      transform: translateY(-50%);
      background: @bgcolor;
      &:hover{
        background: @bgactivecolor;
        color: @activecolor;
        box-shadow: @shadow;
      }
    }
    .self-swiper-sideleftbtn{
      left: @sidebaroff;
    }
    .self-swiper-siderightbtn{
      right: @sidebaroff;
    }
    .self-swiper-pointsboxstyle{
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      i{
        display: inline-block;
        padding: 0 10px;
        line-height: 25px;
        font-size: 14px;
        background: @bgcolor;
        color: @color;
        font-style: normal;
        margin-right: 15px;
        &:hover{
          background: @bgactivecolor;
          color: @activecolor;
          box-shadow: @shadow;
        }
      }
      i.pointactivestyle{
        background: @bgactivecolor;
        color: @activecolor;
        box-shadow: @shadow;
      }
      i:last-child{
        margin-right: 0;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.9s;
    /*transition: left 2s;*/
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
  }
  .fade-enter{
    /*left:-1500px;*/
  }
  .fade-leave-to{
    /*left:3000px;*/
  }
</style>
