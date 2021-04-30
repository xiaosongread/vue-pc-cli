<template>
<div>
  <IndexLogoHeader/>
  <Header :list="menuList" type="index"/>
  <div class="mbmain">
    <div class="mb1">
      <IndexMb1Left :listData="wczxData"/>
      <NavYwsd :ywsdData="ywsdData" :zcfgData="zcfgData" :ggtzData="ggtzData"/>
      <img src="@/assets/SXWB/img/mbimg31.jpg" class="mbimg1">
      <IndexMb2Left :listMLSXData="mlsxData" :listWHHGData="whhgData" v-if="mlsxData"/>
      <IndexMb2Right :sjsjData="sjsjData"/>
      <img src="@/assets/SXWB/img/mbimg31.jpg" class="mbimg1">
      <IndexMb3Left :listCYDJData="cydjData" :listWSWBData="wswbData" :listWHLTData="whltData"/>
      <IndexMb3Right :dxalData="dxalData"/>
      <img src="@/assets/SXWB/img/mg3.jpg" class="mg3">
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { channelDataListJson,dataToJsonArticle, menuDataList } from '@/utils/api'
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
      menuList: [],
      data: [],
      whltData: [],
      wswbData: [],
      cydjData: [],
      whhgData: [],
      mlsxData: [],
      wczxData: [],
      ywsdData: [],
      zcfgData: [],
      ggtzData: [],
      sjsjData: [],
      dxalData: [],
    }
  },
  created () {
    this.menuDataList()
    this.channelDataListJson()
    this.zcfgdataToJsonArticle()
    this.ywsddataToJsonArticle()
    this.ggtzdataToJsonArticle()
    this.sjsjdataToJsonArticle()
    this.dxaldataToJsonArticle()
    _that = this
    // this.getDouBanMovieList()
  },
  methods: {
    async menuDataList() {
      const data = await menuDataList()
      this.menuList = data.data
    },
    async channelDataListJson () {
      const data = await channelDataListJson()
      this.data = data.data
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
      console.log('接口数据', this.data, _that.mlsxData)
    },
    async zcfgdataToJsonArticle () {
      const data = await dataToJsonArticle({categoryId:62})
      _that.zcfgData=data
    },
    async ywsddataToJsonArticle () {
      const data = await dataToJsonArticle({categoryId:59})
      _that.ywsdData=data
    },
    async ggtzdataToJsonArticle () {
      const data = await dataToJsonArticle({categoryId:63})
      _that.ggtzData=data
    },
    async sjsjdataToJsonArticle () {
      const data = await dataToJsonArticle({categoryId:90})
      _that.sjsjData=data
    },
    async dxaldataToJsonArticle () {
      const data = await dataToJsonArticle({categoryId:86})
      _that.dxalData=data
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
  margin-top: 30px;
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