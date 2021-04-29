<template>
<div>
  <IndexLogoHeader type="BBS"/>
  <Header :list="menuList"/>
  <SwiperBanner></SwiperBanner>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="whrp" titlog="whlt1"></ArticleLeft>
      <ArticleLeft :listData="xrxz" titlog="whlt2"></ArticleLeft>
      <ArticleLeft :listData="jyxc" titlog="whlt3"></ArticleLeft>
      <ArticleLeft :listData="hdjl" titlog="whlt4"></ArticleLeft>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { channelDataListJson,menuDataList } from '@/utils/api'
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
      menuList: [],
      whltData: [],
      whrp: [],
      xrxz: [],
      jyxc: [],
      hdjl: [],
    }
  },
  created () {
       _that = this
       this.menuDataList()
    this.channelDataListJson()
  },
  methods: {
    async menuDataList() {
      const data = await menuDataList()
      this.menuList = data.data.filter((item,index)=>{
        return item.id === 20
      })[0].data
    },
    async channelDataListJson () {
      const data = await channelDataListJson()
      data.data.forEach((item, index)=>{
        if (item.id === 20) {
          _that.whltData = item.data
        }
      })
      this.whltData.forEach((item, index)=>{
        switch(item.id) {
          case 82:
            _that.whrp = item.content
            break; 
          case 83:
            _that.xrxz = item.content
            break; 
          case 84:
            _that.jyxc = item.content
            break; 
          case 85:
            _that.hdjl = item.content
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