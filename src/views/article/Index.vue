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
    <div v-for="(item, index) in ywsd" :key="index" v-if="index<3">
      <div class="secondli1"></div>
      <div class="secondli2">
        <a :title="item.title" href="/article/show-5487.html"
        target="_blank">{{item.title}}</a>
      </div>
    </div>
  </div>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="whjj"></ArticleLeft>
      <ArticleLeft :listData="cyzx"></ArticleLeft>
      <ArticleLeft :listData="hyqy"></ArticleLeft>
      <ArticleLeft :listData="dsdt"></ArticleLeft>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { channelDataListJson } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import SwiperBanner from '@/components/SwiperBanner'
import ArticleLeft from '@/components/ArticleLeft'
import FirstRightNav from '@/components/FirstRightNav'

import Footer from '@/components/Footer'
let _that
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
      wczxData: [],
      ywsd: [],
      whjj: [],
      cyzx: [],
      hyqy: [],
      dsdt: [],
    }
  },
  created () {
    _that = this
    this.channelDataListJson()
  },
  methods: {
    async channelDataListJson () {
      const data = await channelDataListJson()
      data.data.forEach((item, index)=>{
        if (item.id === 13) {
          _that.wczxData = item.data
        }
      })
      this.wczxData.forEach((item, index)=>{
        switch(item.id) {
          case 59:
            _that.ywsd = item.content
            break; 
          case 60:
            _that.whjj = item.content
            break; 
          case 61:
            _that.cyzx = item.content
            break; 
          case 77:
            _that.hyqy = item.content
            break;
          case 78:
            _that.dsdt = item.content
            break;
        }
      })
      console.log('接口数据', this.ywsd)
    },
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