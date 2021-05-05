<template>
<div>
  <LogoHeader :type="types"/>
  <Header :list="headerListData" :type="types"/>
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
    <div class="listmain1left">
      <SecondItem :list="secondListData"></SecondItem>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { dataToJsonArticlePage, secondLeveldata } from '@/utils/api'
import LogoHeader from '@/components/LogoHeader'
import Header from '@/components/Header'
import SecondItem from '@/components/SecondItem'
import FirstRightNav from '@/components/FirstRightNav'

import Footer from '@/components/Footer'
let that
export default {
  components: {
    LogoHeader,
    Header,
    FirstRightNav,
    SecondItem,

    Footer
  },
  data () {
    return {
      secondListData: [],
      headerListData: [],
      types:""
    }
  },
  created () {
    this.types = this.$route.query.type
    this.dataToJsonArticlePage()
    this.secondLeveldata()
  },
  methods: {
    async dataToJsonArticlePage () {
      var id = this.$route.query.id
      const data = await dataToJsonArticlePage({
        categoryId: id,
        page: 1,
        limit: 10
      })
      this.secondListData = data.data
    },
    async secondLeveldata () {
      var id = this.$route.query.id
      const data = await secondLeveldata({
        categoryId: id,
      })
      this.headerListData = data.data
    },
  }
}
</script>
<style scoped>
.conBox{
  overflow: hidden;
}
.listmain1 {
    width: 1080px;
    height: 2250px;
    margin: 0 auto;
    margin-top: 5px;
}
.headerImg{
  margin-top: 10px;
  width: 1080px;
  height: 114px;
}
.listmain1left {
    width: 691px;
    float: left;
}
.secondright{
	height:2070px;
	width:350px;
	float:left;
	margin-left:34px;
}
</style>