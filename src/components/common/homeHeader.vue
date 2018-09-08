<template>
    <div class="header">
      <div class="headercontent" :class="{headercontentshow:headercontenthidestatus}">
        <img class="headericon" :src="headerdata.headericonlink" :alt="headerdata.iconalt">
        <p class="headertitle">{{headerdata.title}}</p>
        <ul class="headerlinks">
          <li v-for="(item,index) in headerdata.headerlinks" :key="index" @click="changepage(item.linkkey)"><i :class="item.iconfont" :title="item.title"></i></li>
        </ul>
      </div>
      <div class="button" @click="headercontenthidestatus=!headercontenthidestatus">显示/隐藏</div>
    </div>
</template>

<script>
    export default {
        name: "homeHeader",
      data(){
          return{
            headercontenthidestatus:false,
            // 顶部微信状态：默认隐藏
            headerweinxinstatus:false,
            headerdata:{
              headericonlink:require('./../../assets/xpxj.png'),
              // headericonlink:'',
              iconalt:'icon图片',
              title:'你好。😛',
              headerlinks:[
                {
                  linkkey:'index',
                  iconfont:'iconfont icon-cangku',
                  title:'首页',
                },
                {
                  linkkey:'youxiang',
                  iconfont:'iconfont icon-youxiang',
                  title:'发邮件',
                },
                {
                  linkkey:'github',
                  iconfont:'iconfont icon-github',
                  title:'github',
                },
                {
                  linkkey:'gitlab',
                  iconfont:'iconfont icon-gitlab',
                  title:'gitlab',
                },
                {
                  linkkey:'web2',
                  iconfont:'iconfont icon-web2',
                  title:'老站点',
                },
                {
                  linkkey:'weixin',
                  iconfont:'iconfont icon-weixin',
                  title:'订阅号',
                },
                {
                  linkkey:'gerenzhongxin',
                  iconfont:'iconfont icon-gerenzhongxin',
                  title:'个人中心',
                },
              ]
            }
          }
      },
      methods:{
        changepage(key){
          switch (key){
            case 'youxiang':
              window.open('mailto:pangshifeng0539@126.com')
              break;
            case 'github':
              window.open('https://github.com/Chinegoodman?tab=repositories')
              break;
            case 'gitlab':
              window.open('http://219.141.209.187/users/pangshifeng/projects')
              break;
            case 'web2':
              window.open('http://www.baidu.com')
              break;
            case 'index':
              this.$router.push('/')
              break;
            case 'weixin':
              this.headerweinxinstatus=true;
              console.log('显示微信二维码或相关提示')
              break;
            case 'gerenzhongxin':
              this.$router.push('personalcenter')
              break;
          }
        }
      }
    }
</script>

<style scoped lang="less">
  @import url('./../../assets/common');
  .header{
    background-color: @headerbgcolor;
    border-bottom: @border;
    box-shadow: @shadow;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: @headerheight;
    .headercontent{
      position: relative;
      top:  -@headerheight;
      min-width: @minwidth;
      width: @width;
      margin: 0 auto;
      height: @headerheight;
      transition: top 1.5s;
      .headericon{
        padding-top: @headerheight/3/2;
        height: @headerheight/3*2;
        /*background: #000;*/
        float: left;
      }
      .headertitle{
        line-height: @headerheight;
        text-align: center;
        font-weight: 600;
        font-size: 24px;
      }
      .headerlinks{
        position: absolute;
        right: 0;
        top: 12px;
        li{
          display: inline-block;
          margin-left: 10px;
          width: @headerlinkiconheight;
          height: @headerlinkiconheight;
          line-height: @headerlinkiconheight;
          text-align: center;
          border: @border;
          border-radius: 50%;
          background-color: @headerdefaultlinkbgcolor;
          cursor: pointer;
          i{
            font-size: @headerlinkiconheight/3*2;
          }
          &:hover{
            background-color: @headerdefaultlinkhoverbgcolor;
          }
        }
      }
    }
    .headercontentshow{
      top:0;
    }
    &>.button{
      position: absolute;
      left: @headerbtnleft;
      top: @headerbtntop;
      z-index: 500;
      color: rgba(0,0,0,0.2);
      background-color: rgba(255,255,255,0.2);
      display: none;
    }
    &:hover>.button{
      display: block;
    }
  }
</style>
