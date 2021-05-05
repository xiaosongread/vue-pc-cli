<template>
<div>
  <LogoHeader  type="wenbo"/>
  <Header :list="menuList" type="wenbo"/>
  <SwiperBanner :id="id"></SwiperBanner>
  <!-- 主内容 -->
  <div class="secondm">
    <div class="secondleft">
      <ArticleLeft :listData="dyjwbh" id="79"  type="wenbo" titlog="ws1"></ArticleLeft>
      <ArticleLeft :listData="drjwbh" id="80"  type="wenbo" titlog="ws2"></ArticleLeft>
      <ArticleLeft :listData="dsjwbh" id="150"  type="wenbo" titlog="ws4"></ArticleLeft>
      <ArticleLeft :listData="zwwb" id="81"  type="wenbo" titlog="ws3"></ArticleLeft>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { channelDataListJson, menuDataList } from '@/utils/api'
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
      wswbData: [],
      dyjwbh: [],
      drjwbh: [],
      zwwb: [],
      dsjwbh: [],
      id:"19"
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
        return item.id === 19
      })[0].data
    },
    async channelDataListJson () {
      const data = await channelDataListJson()
      data.data.forEach((item, index)=>{
        if (item.id === 19) {
          _that.wswbData = item.data
        }
      })
      this.wswbData.forEach((item, index)=>{
        switch(item.id) {
          case 79:
            _that.dyjwbh = item.content
            break; 
          case 80:
            _that.drjwbh = item.content
            break; 
          case 81:
            _that.zwwb = item.content
            break; 
          case 150:
            _that.dsjwbh = item.content
            break;
        }
      })
      console.log('接口数据', this.dyjwbh)
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