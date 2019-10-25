<template>
  <div class="custom-video_container noOpen">
    <video
        class="custom-video_video"
        ref="custom-video"
    >
      <source :src="videoOption.src" type="video/mp4">
      <p>设备不支持</p>
    </video>
    <div class="custom-video_control">
      <div class="custom-video_play" @click="play">
        <i class="iconfont icon-play1"></i>
      </div>
      <div class="custom-video_time_line">
        <div class="custom-video_time_point"></div>
      </div>
      <div class="custom-video_time_show">01:29:30</div>
      <div class="custom-video_volume">
        <i class="iconfont icon-yinliang"></i>
      </div>
      <div class="custom-video_time_full_screen">
        <i class="iconfont icon-tubiaozhizuomoban-"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      videoOption: {
        src: require('../assets/babel-01-05-gulp.mp4') // 视频
      },
      videoDom: null // video
    }
  },
  components: { },
  created () {
    this.videoDom = this.$refs['custom-video']
  },
  methods: {
    play () {

    }
  }
}
</script>

<style lang="scss" scoped>
/* 总容器 */
.custom-video_container{
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  &.noOpen:after{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: url('../assets/poster.jpg');
  }
  /* 视频标签 */
  .custom-video_video{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  /* 控制栏 */
  .custom-video_control{
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, .55);
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #ffffff;
    // bofang
    .custom-video_play{
      color: #ffffff;
      margin-left: 15px;
      &:hover{
        color: cornflowerblue;
      }
      .iconfont{
        font-size: 20px;
      }
    }
    // kongzhitiao
    .custom-video_time_line{
      width: 60%;
      height: 2px;
      border-radius: 2px;
      background: #ffffff;
      margin-left: 15px;
      position: relative;
      // jingduxiaoyuanquan
      .custom-video_time_point{
        width: 9px;
        height: 9px;
        border-radius: 9px;
        background: #ffffff;
        position: absolute;
        top: -4px;
        left: 0;
      }
    }
    // shijianxianshi
    .custom-video_time_show{
      font-size: 14px;
      margin-left: 15px;
    }
    // yinliang
    .custom-video_volume{
      color: #ffffff;
      margin-left: 15px;
      .iconfont{
        font-size: 20px;
      }
    }
    // quanping
    .custom-video_time_full_screen{
      color: #ffffff;
      margin-left: 15px;
      .iconfont{
        font-size: 20px;
      }
    }
  }
}

</style>
