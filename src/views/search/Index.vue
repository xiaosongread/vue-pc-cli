<template>
<div>
  <IndexLogoHeader/>
  <Header :list="menuList" type="index"/>
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
    <div class="listmain1left">
      <SearchItem :list="secondListData" :searchContent="searchContent" :records=records></SearchItem>
      <pagination class="pagination1"
       :records="records" 
                  :per-page="perPage" 
                  @paginate="clickPage" 
                  v-model="page" 
                  :options="options">
      </pagination>
    </div>
    <div class="secondright">
      <FirstRightNav></FirstRightNav>
    </div>
  </div>
  <Footer/>
</div>
</template>

<script>
import { globalSearch,menuDataList } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import SearchItem from '@/components/SearchItem'
import FirstRightNav from '@/components/FirstRightNav'
import Footer from '@/components/Footer'
let that
export default {
  components: {
    IndexLogoHeader,
    Header,
    FirstRightNav,
    SearchItem,
    Footer
  },
  data () {
    return {
      page: 1,	//默认第一页
      perPage:25,//每页多少条
      pageNo:1,//当前页
      records: 0,//总数
      searchContent:"",
      secondListData: [],
      menuList: [],
      options: {
        chunk: 10,
        edgeNavigation: true,
        theme: 'bootstrap4'
      },
    }
  },
  created () {
    this.searchContent=this.$route.query.name
    this.globalSearch()
    this.menuDataList()
  },
  methods: {
    clickPage() {
      this.pageNo = this.page
      this.globalSearch()
    },
    async globalSearch () {
      const data = await globalSearch({
        title: this.searchContent,
        page: this.pageNo,
        limit: this.perPage
      })
      this.records = data.total
      this.secondListData = data.data
    },
     async menuDataList() {
      const data = await menuDataList()
      this.menuList = data.data
    },
  }
}
</script>
<style scoped>
.conBox{
  overflow: hidden;
}
.path{
  padding-left: 30px;
  margin: 20px auto 0;
  width: 1080px;
  height: 32px;
  background: #EEEEEE;
  font-size: 15px;
  line-height: 33px;
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
.pagination1{
  width: 640px;
  margin-top: 80px;
}
</style>
<style>
.pagination {
    font-size: 18px;  
}
.VuePagination {
  
  
}
.VuePagination__count{
  display: none;
  
}
.pagination a {
  color: #FFF;
  font-weight: bold;
  background-color: #6E0A0A;
}
.pagination a.page-link.active{
  color: rgb(133, 133, 133);
}
.secondright{
	height:2070px;
	width:350px;
	float:left;
	margin-left:34px;
}
</style>