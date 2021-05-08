<template>
<div>
  <LogoHeader type="dock"/>
  <Header :list="menuList" type="dock"/>
  <SwiperBanner :id="id"></SwiperBanner>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="gxpt" type="dock" id="69" titlog="cy1"></ArticleLeft>
      <ArticleLeft :listData="xmtj" type="dock" id="70" titlog="cy2"></ArticleLeft>
      <ArticleLeft :listData="xmpg" type="dock" id="71" titlog="cy3"></ArticleLeft>
      <ArticleLeft :listData="qyld" type="dock" id="72" titlog="cy4"></ArticleLeft>
      <ArticleLeft :listData="dxal" type="dock" id="86" titlog="cy5"></ArticleLeft>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { redDataListJson, menuDataList } from '@/utils/api'
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
      cydjData: [],
      dxal: [],
      qyld: [],
      xmpg: [],
      xmtj: [],
      gxpt: [],
      id: "18",
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
        return item.id === 18
      })[0].data
    },
    async DataListJson () {
      const data = await redDataListJson({ channelId: 18 });
      _that.cydjData = data.data[0].data;
      this.cydjData.forEach((item, index)=>{
        switch(item.id) {
          case 86:
            _that.dxal = item.data
            break; 
          case 72:
            _that.qyld = item.data
            break; 
          case 71:
            _that.xmpg = item.data
            break; 
          case 70:
            _that.xmtj = item.data
            break;
          case 69:
            _that.gxpt = item.data
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
  // height: 2070px;
  width: 1080px;
  margin: 0 auto;
  overflow: hidden;
}
.secondleft{
	margin-left:30px;
	margin-right:30px;
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