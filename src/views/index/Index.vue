<template>
<div>
  <IndexLogoHeader/>
  <Header/>
  <div class="mbmain">
    <div class="mb1">
      <IndexMb1Left :listData="wczxData"/>
      <NavYwsd :listData="wczxData"/>
      <img src="@/assets/SXWB/img/mbimg31.jpg" class="mbimg1">
      <IndexMb2Left :listMLSXData="mlsxData" :listWHHGData="whhgData"/>
      <IndexMb2Right/>
      <img src="@/assets/SXWB/img/mbimg31.jpg" class="mbimg1">
      <IndexMb3Left :listCYDJData="cydjData" :listWSWBData="wswbData" :listWHLTData="whltData"/>
      <IndexMb3Right/>
      <img src="@/assets/SXWB/img/mg3.jpg" class="mg3">
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { channelDataListJson, getDouBanMovieList } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import IndexMb1Left from '@/components/IndexMb1Left'
import NavYwsd from '@/components/NavYwsd'
import IndexMb2Left from '@/components/IndexMb2Left'
import IndexMb2Right from '@/components/IndexMb2Right'
import IndexMb3Left from '@/components/IndexMb3Left'
import IndexMb3Right from '@/components/IndexMb3Right'
import Footer from '@/components/Footer'
let _that
export default {
  components: {
    IndexLogoHeader,
    Header,
    IndexMb1Left,
    NavYwsd,
    IndexMb2Left,
    IndexMb2Right,
    IndexMb3Left,
    IndexMb3Right,
    Footer
  },
  data () {
    return {
      whltData: [],
      wswbData: [],
      cydjData: [],
      whhgData: [],
      mlsxData: [],
      wczxData: [],
    }
  },
  created () {
    this.channelDataListJson()
    _that = this
    // this.getDouBanMovieList()
  },
  methods: {
    async channelDataListJson () {
      const data = await channelDataListJson()
      data.data.forEach((item, index)=>{
        switch(item.id) {
          case 20:
            _that.whltData = item.data
            break; 
          case 19:
            _that.wswbData = item.data
            break; 
          case 18:
            _that.cydjData = item.data
            break; 
          case 17:
            _that.whhgData = item.data
            break; 
          case 15:
            _that.mlsxData = item.data
            break; 
          case 13:
            _that.wczxData = item.data
            break; 
        }
      })
      console.log('接口数据', data)
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
</style>