<template>
  <div class="custom-video_container">
    <video
        class="custom-video_video"
        ref="custom-video"
        src="@/assets/babel-01-05-gulp.mp4"
    >
      <source type="video/mp4">
      <p>设备不支持</p>
    </video>
    <!--播放或者暂停按钮-->
    <div class="custom-video_play iconfont"></div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      mesg: 'mesg!'
    }
  },
  components: { },
  created () {

  },
  methods: {

  }
}
</script>

<style>
/* 总容器 */
.custom-video_container{
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
/* 视频标签 */
.custom-video_video{
  width: 100%;
  height: 100%;
  object-fit: fill;
}
/* 暂停 或者 播放 */
.custom-video_play{
  position: absolute;
  right: 50px;
  bottom: 50px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 30px;
  color: cornflowerblue;
}
/* 暂停隐藏 */
/* .custom-video_play-pause{
  display: none;
} */
/* hover 显示 */
/* .custom-video_container:hover > .custom-video_play-pause{
  display: inline-block;
} */
/* hover 播放按钮动画 */
/* .custom-video_play:hover{
  box-shadow: 0 0 10px #5A4180;
  transition: all 0.4s;
} */
</style>
