<template>
<div>
  <IndexLogoHeader/>
  <Header :list="cydjData"/>
  <SwiperBanner></SwiperBanner>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="gxpt" titlog="cy1"></ArticleLeft>
      <ArticleLeft :listData="xmtj" titlog="cy2"></ArticleLeft>
      <ArticleLeft :listData="xmpg" titlog="cy3"></ArticleLeft>
      <ArticleLeft :listData="qyld" titlog="cy4"></ArticleLeft>
      <ArticleLeft :listData="dxal" titlog="cy5"></ArticleLeft>
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
      cydjData: [],
      dxal: [],
      qyld: [],
      xmpg: [],
      xmtj: [],
      gxpt: [],
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
        if (item.id === 18) {
          _that.cydjData = item.data
        }
      })
      this.cydjData.forEach((item, index)=>{
        switch(item.id) {
          case 86:
            _that.dxal = item.content
            break; 
          case 72:
            _that.qyld = item.content
            break; 
          case 71:
            _that.xmpg = item.content
            break; 
          case 70:
            _that.xmtj = item.content
            break;
          case 69:
            _that.gxpt = item.content
            break;
        }
      })
      console.log('接口数据', this.dxal)
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