<template>
    <div class="self-music">
      <p class="self_music_title">{{musicdata.title}}</p>
      <div class="music_list">
        <div class="music_li">
          <span>歌曲编号</span>
          <span>歌曲名称</span>
          <span>歌手名</span>
        </div>

        <div class="music_li" v-for="(item,index) in musicdata.musicarr" :key="index">
          <span class="_textover">{{item.id}}</span>
          <span class="_textover">{{item.name}}</span>
          <span class="_textover">{{item.singer}}<i @click="listchose(index)">播放</i></span>
        </div>
      </div>
      <div class="music_showbox">
        <canvas id="music_canvas"></canvas>
        <div class="music_controls">
          <div class="music_jindutiao">
            <i class="music_jdt_point"></i>
          </div>
          <div class="music_change up">上一首</div>
          <div class="music_play_pause">播放/暂停</div>
          <div class="music_change down">下一首</div>
          <div class="music_voice">
            <i class="music_voice_point"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "music",
      data(){
          return{
            musicdata:{
              title:'😆😳你好，这是我自己收藏的音乐🎶',
              musicarr:[
                {
                  id:11,
                  name:'Name',
                  singer:'歌手名',
                  mus_link:'',
                  mus_lang:'100',
                },
                {
                  id:11,
                  name:'Name',
                  singer:'歌手名',
                  mus_link:'',
                  mus_lang:'100',
                },
                {
                  id:11,
                  name:'Name',
                  singer:'歌手名',
                  mus_link:'',
                  mus_lang:'100',
                },
                {
                  id:11,
                  name:'Name',
                  singer:'歌手名',
                  mus_link:'',
                  mus_lang:'100',
                },
              ]
            }
          }
      },
      methods:{
        listchose(index){
          console.log(`歌曲的序列号（下标）为：${index}`)
        }
      }
    }
</script>

<style scoped lang="less">
  @import url('./../../common');
  .self-music{
    border: @border;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .self_music_title{
      width: 100%;
      text-align: center;
      font-weight: bold;
      line-height: 1.8em;
      font-size: 25px;
      border-bottom: @border;
      color:#ccc;
    }
    .music_list{
      box-sizing: border-box;
      width: 30%;
      border-right: @border;
      .music_li{
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        color:#ccc;
        line-height: 1.9em;
        border-bottom: @border;
        span{
          border-right: @border;
          width: 37%;
          text-align: left;
          padding-left: 5px;
          display: inline-block;
          i{
            cursor: pointer;
            font-style: normal;
            box-shadow: @shadow;
            display: inline-block;
            padding: 0 5px;
            line-height: 1.5em;
            border-radius: 4px;
            float: right;
            margin-top: 0.2em;
            margin-right: 1em;
          }
        }
        span:nth-child(3){
          border-right: none;
          width: 50%;
        }
        span:nth-child(1){
          width: 13%;
        }
      }
    }
  }
</style>
