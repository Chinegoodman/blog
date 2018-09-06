<template>
    <div class="wrapindex">
      <selfSwiper :swiperdata="swiperdata"></selfSwiper>
      <selfMusic></selfMusic>
      <div class="wrapindex_msglist">

      </div>
    </div>
</template>

<script>
  import selfSwiper from '@/assets/self-common/self-swiper/swiper.vue'
  import selfMusic from '@/assets/self-common/self-music/music.vue'
    export default {
      components:{
        selfSwiper,selfMusic
      },
        name: "wrapindex",
      data(){
        return{
          swiperdata:{
            activetindex:0,
            swiperheight:{
              height:'260px'
            },
            swiperarr:[
              {
                picurl:'https://cn.vuejs.org/images/logo.png',
                linktype:'http',
                linkurl:'https://www.jeep.com.cn/renegade/img/yuantu/wg5.jpg',
                title:'自由侠title',
                tip:'自由侠tip'
              },
              {
                picurl:'https://www.jeep.com.cn/renegade/img/yuantu/wg4.jpg',
                linktype:'linkkey',
                linkurl:'/personalcenter',
                title:'个人中心title',
                tip:'个人中心tip'
              },
              {
                picurl:'https://www.jeep.com.cn/renegade/img/yuantu/wg5.jpg',
                linktype:'linkkey',
                linkurl:'/',
                title:'首页title',
                tip:'首页tip'
              },
            ],
            sideatatus:true,
            pointsboxstatus:true,

            pointsboxstyle:'',
            pointstyle:'',
            pointactivestyle:'',
          }
        }
      }
    }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  div.wrapindex{
    box-shadow: @shadow;
    border: @border;
  }
</style>
