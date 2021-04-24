<template>
<div>
  <IndexLogoHeader/>
  <Header/>
  <SwiperBanner></SwiperBanner>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="cyyq"></ArticleLeft>
      <ArticleLeft :listData="qylj"></ArticleLeft>
      <ArticleLeft :listData="cpzs"></ArticleLeft>
      <ArticleLeft :listData="ysdm"></ArticleLeft>
      <ArticleLeft :listData="wh"></ArticleLeft>
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
      whhgData: [],
      cyyq: [],
      qylj: [],
      cpzs: [],
      ysdm: [],
      wh: [],
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
        if (item.id === 17) {
          _that.whhgData = item.data
        }
      })
      this.whhgData.forEach((item, index)=>{
        switch(item.id) {
          case 64:
            _that.cyyq = item.content
            break; 
          case 65:
            _that.qylj = item.content
            break; 
          case 66:
            _that.cpzs = item.content
            break; 
          case 67:
            _that.ysdm = item.content
            break;
          case 68:
            _that.wh = item.content
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
.secondm {
  // height: 2070px;
  width: 1080px;
  margin: 0 auto;
  overflow: hidden;
}
.secondleft{
	margin-left:30px;
	margin-right:30px;
	// height:2070px;
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