<template>
<div>
  <IndexLogoHeader/>
  <Header/>
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
    <div class="listmain1left">
      <div class="title">借进博“东风”，推进更高水平对外开放</div>
      <div class="time">
        <span>时间：2021-09-09</span>
        <span>作者：小张</span>
      </div>
      <div class="cons">文章的内容</div>
      <div class="subTit">
        <span>来源：山西日报</span>
        <span>【责任编辑：lcx】</span>
      </div>
      <div class="thirdtext2">
				<p style="width: 800px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">【上一篇】<a href="/hall/show-5607.html">以特色演艺助力文旅融合</a>
				</p>
				<p style="width: 800px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
				【下一篇】<a href="/hall/show-5663.html">“品牌行”外延效应持续扩大</a>
				</p>
      </div>
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
    font-size: 14px;
}
.title{
  line-height: 39px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 37px;
}
.cons{
  margin-left: 30px;
}
.time,.subTit{
  height: 40px;
  margin-left: 30px;
  margin-top: 35px;
  border-bottom: 3px solid #EFEFEF;
}
.subTit{
  display: flex;
  justify-content: space-between;
}
.thirdtext2 {
    padding-left: 45px;
    height: 14px;
    width: 691px;
    float: left;
    font-size: 16px;
    line-height: 32px;
    color: #6E0A0A;
    margin-bottom: 40px;
}
</style>