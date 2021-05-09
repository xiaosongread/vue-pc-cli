<template>
<div>
  <LogoHeader type="bbs"/>
  <Header :list="menuList" type="bbs"/>
  <SwiperBanner :id="id"></SwiperBanner>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="whrp" id="82" type="bbs" titlog="whlt1"></ArticleLeft>
      <ArticleLeft :listData="xrxz" id="83" type="bbs" titlog="whlt2"></ArticleLeft>
      <ArticleLeft :listData="jyxc" id="84" type="bbs" titlog="whlt3"></ArticleLeft>
      <ArticleLeft :listData="hdjl" id="85" type="bbs" titlog="whlt4"></ArticleLeft>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { redDataListJson,menuDataList } from '@/utils/api'
import LogoHeader from '@/components/LogoHeader'
import Header from '@/components/Header'
import SwiperBanner from '@/components/SwiperBanner'
import ArticleLeft from '@/components/ArticleLeft'
import FirstRightNav from '@/components/FirstRightNav'

import Footer from '@/components/Footer'
let _that
export default {
  components: {
    LogoHeader,
    Header,
    SwiperBanner,
    ArticleLeft,
    FirstRightNav,

    Footer
  },
  data () {
    return {
      menuList: [],
      whltData: [],
      whrp: [],
      xrxz: [],
      jyxc: [],
      hdjl: [],
      id:"20"
    }
  },
  created () {
       _that = this
       this.menuDataList()
    this.DataListJson()
  },
  methods: {
    async menuDataList() {
      const data = await menuDataList()
      this.menuList = data.data.filter((item,index)=>{
        return item.id === 20
      })[0].data
    },
    async DataListJson () {
      const data = await redDataListJson({ channelId: 20 });
      _that.whltData = data.data[0].data;
      this.whltData.forEach((item, index)=>{
        switch(item.id) {
          case 82:
            _that.whrp = item.data
            break; 
          case 83:
            _that.xrxz = item.data
            break; 
          case 84:
            _that.jyxc = item.data
            break; 
          case 85:
            _that.hdjl = item.data
            break;
        }
      })
      console.log('接口数据', this.whrp)
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