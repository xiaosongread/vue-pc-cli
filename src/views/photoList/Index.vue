<template>
<div>
  <LogoHeader :type="types"/>
  <Header :list="headerListData" :type="types"/>
  <div class="listmain1">
    <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg">
   <div class="path">
        <router-link target="_blank"  tag="a" :to="{ path: 'index', query: { } }" >首页</router-link> >
        <router-link target="_blank"  tag="a" :to="{ path: paths1, query: {id:ids1, type:paths1} }" >{{channelTitle}}</router-link> >
        <router-link target="_blank"  tag="a" :to="{ path: paths2, query: {id:ids2,type:paths1 } }" >{{categoryTitle}}</router-link> 
      </div>
    <div class="listmain1left">
      <PhotoTw :listData="secondListData" type="list"></PhotoTw>
      <pagination :records="records" 
                  :per-page="perPage" 
                  @paginate="clickPage" 
                  v-model="page" 
                  :options="options">
      </pagination>
    </div>
  </div>

  <Footer/>
</div>
</template>

<script>
import { dataToJsonArticlePage, secondLeveldata } from '@/utils/api'
import LogoHeader from '@/components/LogoHeader'
import Header from '@/components/Header'
import PhotoTw from "@/components/PhotoTw";
import SecondItem from '@/components/SecondItem'
import FirstRightNav from '@/components/FirstRightNav'

import Footer from '@/components/Footer'
let that
export default {
  components: {
    LogoHeader,
    Header,
    PhotoTw,
    FirstRightNav,
    SecondItem,

    Footer
  },
  data () {
    return {
      page: 1,	//默认第一页
      perPage:6,//每页多少条
      pageNo:1,//当前页
      records: 0,//总数
      secondListData: [],
      headerListData: [],
      paths1:'',
      ids1:'',
      paths2:'',
      ids2:'',
      channelTitle:'',
      categoryTitle:'',
      options: {
        chunk: 10,
        edgeNavigation: true,
        theme: 'bootstrap4'
      },
      types:""
    }
  },
  created () {
    this.types = this.$route.query.type
    this.secondLeveldata()
    this.dataToJsonArticlePage()
  },
  methods: {
    clickPage() {
      this.pageNo = this.page
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
      this.secondListData = data.data
      this.paths1=data.dataYiji.channelTemplateAlias
       this.paths2=data.dataErji.categoryTemplateAlias
       this.ids1=data.dataYiji.channelId
       this.ids2=data.dataErji.categoryId
       this.channelTitle=data.dataYiji.channelTitle
       this.categoryTitle=data.dataErji.categoryTitle
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
    height: 1240px;
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
    font-size: 18px;
}
.VuePagination {
  width: 1080px;
  margin-top: 50px;
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