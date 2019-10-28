<template>
  <div :class="videoState.startPlay ? 'custom-video_container' : 'custom-video_container noOpen'">
    <video
        class="custom-video_video"
        ref="custom-video"
    >
      <source :src="videoOption.src" type="video/mp4">
      <p>设备不支持</p>
    </video>
    <div class="custom-video_control">
      <div class="custom-video_play" @click="play">
        <i :class="videoState.play ? 'iconfont icon-play' : 'iconfont icon-play1'"></i>
      </div>
      <div class="custom-video_time_line">
        <div class="videoPro" ref="videoPro"></div>
        <div class="custom-video_time_point" ref="videoPoint"></div>
      </div>
      <div class="custom-video_time_show" v-if="!videoState.startPlay">{{duration}}</div>
      <div class="custom-video_time_show" v-else>{{currentTime}}</div>
      <div class="custom-video_volume">
        <div class="custom-video_volume_bar">
          <div class="custom-video_volume_bar_point"
               ref="videoYlPoint"
               @mousedown="handleVolPrograssDown"
               @mousemove="handleVolPrograssMove"
               @mouseup="handleVolPrograssUp"
          ></div>
        </div>
        <i :class="!videoState.muted? 'iconfont icon-yinliang' : 'iconfont icon-mute'" @click='enableMute'></i>
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
      videoState: {
        play: false, // 播放状态(播放，暂停)
        startPlay: false, // 标记视频是否已经开始播放
        muted: false // 标记是否静音
      },
      videoDom: null, // video
      duration: 0, // 总长时间
      currentTime: 0, // 当前播放时间
      videoYlPointCurrent: 0, // 移动按钮开始移动的位置
      videoYlPointFlag: false, // 移动按钮是否开始
      videoYlPointY: 90 // 移动按钮的top值

    }
  },
  mounted () {
    this.videoDom = this.$refs['custom-video']
    this.videoPro = this.$refs['videoPro']
    this.videoPoint = this.$refs['videoPoint']
    this.videoYlPoint = this.$refs['videoYlPoint']

    this.initMedaData()
  },
  created () {
  },
  methods: {
    timeTranslate (t) { // 时间转化
      let m = Math.floor(t / 60)
      m < 10 && (m = '0' + m)
      return m + ':' + (t % 60 / 100).toFixed(2).slice(-2)
    },
    initMedaData () {
      this.videoDom.addEventListener('loadedmetadata', () => { // 获取视频总时长
        this.duration = this.timeTranslate(this.videoDom.duration)
      })
      this.videoDom.addEventListener('timeupdate', () => { // 监听视频播放过程中的时间
        if (!this.videoState.startPlay) this.videoState.startPlay = true
        const percentage = 100 * this.videoDom.currentTime / this.videoDom.duration
        this.videoPro.style.width = percentage + '%'
        this.videoPoint.style.left = percentage - 1 + '%'
        this.currentTime = this.timeTranslate(this.videoDom.currentTime)
      })
      this.videoDom.addEventListener('volumechange', () => {
        const percentage = this.videoDom.volume * 100
        console.log('yinliang', percentage)
      })
    },
    play () {
      if (!this.videoState.play) {
        this.videoState.play = true
        this.videoDom.play()
      } else {
        this.videoState.play = false
        this.videoDom.pause()
      }
    },
    enableMute () {
      if (!this.videoState.muted) {
        this.videoDom.muted = true
        this.videoDom.volume = 0
        this.videoState.muted = true
      } else {
        this.videoDom.muted = false
        this.videoState.muted = false
      }
    },
    handleVolPrograssDown (ev) {
      this.videoYlPointCurrent = ev.pageY
      this.videoYlPointFlag = true
      console.log('开始', this.videoYlPointCurrent)
    },
    handleVolPrograssMove (ev) {
      if (!this.videoYlPointFlag) return
      const moveY = this.videoYlPointCurrent - ev.pageY
      console.log('123', this.videoYlPointCurrent, moveY)
      if (moveY + 10 > this.videoYlPointY) return
      this.videoYlPointTop = this.videoYlPointY - moveY
      this.videoYlPoint.style.top = this.videoYlPointTop + 'px'
      console.log('移动', moveY)
    },
    handleVolPrograssUp (ev) {
      const moveY = this.videoYlPointCurrent - ev.pageY
      this.videoYlPointY = this.videoYlPointY - moveY
      this.videoYlPointCurrent = 0
      this.videoYlPointFlag = false
      console.log('结束', this.videoYlPointCurrent)
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
      .videoPro{
        height: 2px;
        border-radius: 2px;
        background: cornflowerblue;
        position: absolute;
        left: 0;
      }
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
      position: relative;
      &:hover{
        color: cornflowerblue;
        .custom-video_volume_bar{
          display: block;
        }
      }
      .custom-video_volume_bar{
        width: 4px;
        height: 100px;
        border-radius: 4px;
        background: rgba(255, 255, 255, .5);
        position: absolute;
        top: -100px;
        left: 7px;
        // display: none;
        .custom-video_volume_bar_point{
          width: 10px;
          height: 10px;
          border-radius: 10px;
          background: #ffffff;
          position: absolute;
          top: 90px;
          left: -3px;
        }
      }
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
