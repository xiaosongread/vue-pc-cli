<template>
<div>
  <IndexLogoHeader/>
  <Header :list="headerListData"/>
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
    <div class="listmain1left">
      <SecondItem :list="secondListData"></SecondItem>
      <pagination :records="records" 
                  :per-page="perPage" 
                  @paginate="clickPage" 
                  v-model="page" 
                  :options="options">
      </pagination>
    </div>
    <SecondNav></SecondNav>
  </div>
  <Footer/>
</div>
</template>

<script>
import { dataToJsonArticlePage, secondLeveldata } from '@/utils/api'
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
      page: 1,	//默认第一页
      perPage:10,//每页多少条
      pageNo:1,//当前页
      records: 0,//总数
      secondListData: [],
      headerListData: [],
      options: {
        chunk: 10,
        edgeNavigation: true,
        theme: 'bootstrap4'
      }
    }
  },
  created () {
    this.dataToJsonArticlePage()
    this.secondLeveldata()
  },
  methods: {
    clickPage() {
      this.dataToJsonArticlePage()
    },
    async dataToJsonArticlePage () {
      var id = this.$route.query.id
      const data = await dataToJsonArticlePage({
        categoryId: id,
        page: this.pageNo,
        limit: this.perPage
      })
      this.records = data.total
      this.pageNo = this.pageNo + 1
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
<style>
.pagination {
    font-size: 16px;
}
.VuePagination {
  margin-top: 15px;
}
.VuePagination__count{
  display: none;
}
.pagination a {
  color: #000;
}
.pagination a.page-link.active{
  color: rgb(133, 133, 133);
}
</style>