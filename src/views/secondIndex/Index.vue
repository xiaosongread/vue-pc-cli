<template>
<div>
  <IndexLogoHeader/>
  <!-- <Header/> -->
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
    <div class="listmain1left">
      <SecondItem :list="secondListData"></SecondItem>
    </div>
    <SecondNav></SecondNav>
  </div>
  <Footer/>
</div>
</template>

<script>
import { dataToJsonArticlePage } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import SecondItem from '@/components/SecondItem'
import SecondNav from '@/components/SecondNav'

import Footer from '@/components/Footer'
let that
export default {
  components: {
    IndexLogoHeader,
    Header,
    SecondNav,
    SecondItem,

    Footer
  },
  data () {
    return {
      secondListData: []
    }
  },
  created () {
    this.dataToJsonArticlePage()
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
  }
}
</script>
<style scoped>
.conBox{
  overflow: hidden;
}
.listmain1 {
    width: 1080px;
    height: 2040px;
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
</style>