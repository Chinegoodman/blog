<template>
    <div class="wrapindex">
      <selfSwiper class="wrapindex_swiper" :swiperdata="swiperdata"></selfSwiper>
      <div class="wrapindex_music">
        <selfMusic :musicdata="musicdata"></selfMusic>
      </div>
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
              height:'510px'
            },
            swiperarr:[
              {
                // picurl:'https://cn.vuejs.org/images/logo.png',
                picurl:'https://www.jeep.com.cn/renegade/img/skv2.jpg',
                linktype:'http',
                linkurl:'https://www.jeep.com.cn/renegade/',
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
          },
          musicdata:{
            title:'😆😳你好，这是我自己收藏的音乐🎶',
            musilistapi:'http://www.egtch.com/t_works/Vuedata/data.php'
          }
        }
      },
      methods:{
      },
      created(){
      }
    }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .wrapindex{
    .wrapindex_swiper{
      min-width: @minwidth;
      width: @width;
      margin: 0 auto;
    }
    .wrapindex_music{
      /*margin: 10px auto;*/
      min-width: @minwidth;
      width: @width;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 25px 0;
    }
  }
</style>
