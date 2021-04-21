<template>
<div>
  <IndexLogoHeader type="article"/>
  <Header/>
  <SwiperBanner></SwiperBanner>
  <div class="secondnav">
    <div class="secondnavimg">
      <a href="#">
        <img src="@/assets/SXWB/img/secondnav1.jpg">
      </a>
    </div>
    <div class="secondli1">
    </div>
    <div class="secondli2">
      <a title="擂鼓齐奏，2020年中国农民丰收节大同活动月喜庆丰收" href="/article/show-5487.html"
        target="_blank">擂鼓齐奏，2020年中国农民丰收节大同活动月喜庆丰收</a></div>
    <div class="secondad">
    </div>
    <div class="secondli1">
    </div>
    <div class="secondli2">
      <a title="山西省第六次旅游发展大会在忻州召开" href="/article/show-5455.html" target="_blank">山西省第六次旅游发展大会在忻州召开</a></div>
    <div class="secondad">
    </div>
    <div class="secondli1">
    </div>
    <div class="secondli2">
      <a title="山西文化产业如何“破茧成蝶”？" href="/article/show-4944.html" target="_blank">山西文化产业如何“破茧成蝶”？</a></div>
    <div class="secondad">
    </div>
  </div>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft></ArticleLeft>
      <ArticleLeft></ArticleLeft>
      <ArticleLeft></ArticleLeft>
      <ArticleLeft></ArticleLeft>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { getAllDict, getDouBanMovieList } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import SwiperBanner from '@/components/SwiperBanner'
import ArticleLeft from '@/components/ArticleLeft'
import FirstRightNav from '@/components/FirstRightNav'

import Footer from '@/components/Footer'
let that
export default {
  components: {
    IndexLogoHeader,
    Header,
    SwiperBanner,
    ArticleLeft,
    FirstRightNav,

    Footer
  },
  data () {
    return {

    }
  },
  created () {
    // this.getDict()
    that = this
    this.getDouBanMovieList()
  },
  methods: {
    addAppCount () {
      this.$store.commit('ADD_COUNT', 1)
    },
    deieteAppCount () {
      if (this.$store.state.appConut) this.$store.commit('DELETE_COUNT', 1)
    },
    // 获取热门电影
    getDouBanMovieList () {
      getDouBanMovieList().then(function (data) {
        that.$store.dispatch('RESET_ACCTION_APP_COUNT', data.title)
      })
    },
    async getDict () {
      const data = await getAllDict()
      if (data.code === 1 && data.data) {
        console.log('接口数据', data)
      }
    },
    durationNotify () {
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 1000
      })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mbmain {
  margin-top: 25px;
  width: 1080px;
  margin: 0px auto;
}
.mb1 {
  margin-top: 95px;
  width: 1080px;
}
.mbimg1 {
  margin-top: 60px;
  margin-bottom: 45px;
  height: 162px;
  width: 1080px;
}
.mb2 {
    height: 1245px;
    width: 1080px;
}
.mg3{
  margin-top: 35px;
  height: 546px;
  width: 1080px;
}
.secondnav{
	margin:30px auto 0;
	height:45px;
	width:1080px;
}
.secondnavimg{
	margin-left:30px;
	margin-right:28px;
	height:45px;
	width:45px;
	float:left;
}
.secondli1{
	margin-top:5px;
	margin-right:5px;
	height:15px;
	width:15px;
	float:left;
	background:url('~@/assets/SXWB/img/菱形.png');
}
.secondli1_1{
	margin-left:65px;
	margin-top:5px;
	margin-right:5px;
	height:15px;
	width:15px;
	float:left;
	background:url('~@/assets/SXWB/img/菱形.png');
}
.secondli2{
	height:45px;
	width:300px;
	float:left;
	font-size:19px;
	font-weight:bold;
	line-height:25px;
	padding-top:0px;
}
.secondm {
  height: 2070px;
  width: 1080px;
  margin: 0 auto;
}
.secondleft{
	margin-left:30px;
	margin-right:30px;
	height:2070px;
	width:631px;
	float:left;
}
.secondright{
	height:2070px;
	width:350px;
	float:left;
	margin-left:34px;
}
</style>