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
            title:'😆😳你好，这是我自己收藏的音乐🎶(暂时为第三方的音乐列表)',
            musilistapi:'http://www.egtch.com/t_works/Vuedata/data.php'
          }
        }
      },
      methods:{
        confirmdomshow(){
          let content = '你好，这个网站我是用的vue.js框架完成的====>>header部分使用了iconfont提供的资源====>>左侧浮动按钮是个面包屑====>>内容部分使用了自己写的swiper组件，相关图片及链接后期会修改====>>音乐模块音乐列表暂时使用第三方的音乐列表====>>音乐的画布效果使用的音乐api(借鉴别人的代码做的)====>>计划音乐模块添加自己写的翻页组件====>>计划内容部分添加自己经手的项目'
          const confirmdom = confirm(content)
        }
      },
      created(){
        this.confirmdomshow()
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
