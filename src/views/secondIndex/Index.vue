<template>
<div>
  <IndexLogoHeader/>
  <Header/>
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
    <div class="listmain1left">
      <SecondItem></SecondItem>
    </div>
    <SecondNav></SecondNav>
  </div>
  <Footer/>
</div>
</template>

<script>
// import { getAllDict, getDouBanMovieList } from '@/utils/api'
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

    }
  },
  created () {
    
  },
  methods: {
    // async getDict () {
    //   const data = await getAllDict()
    //   if (data.code === 1 && data.data) {
    //     console.log('接口数据', data)
    //   }
    // },
    // durationNotify () {
    //   this.$notify.open({
    //     content: '10秒后自动关闭！',
    //     duration: 1000
    //   })
    // }
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