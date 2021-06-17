<template>
<div class="nav">
  <div class="nav1">
    <div class="navb1"><center><router-link :to="{path: 'index'}" target="_blank"  tag="a">首页</router-link></center></div>
    <div :class="index === (list.length-1)  ? 'navb1 lastNav' : 'navb1'" v-for="(item, index) in list" :key="index" v-if="list.length">
      <center>
        <router-link :to="{path: item.templateAlias, query: {id: item.id ,type:type}}" target="_blank"  tag="a">{{item.title}}</router-link>
      </center>
    </div>
    <div class="navb1" v-if="list.length===0">
      <center><router-link :to="{path: 'bbs', query: {id: 20 ,type:'index'}}" target="_blank"  tag="a">文化论坛</router-link></center>
    </div>
    <div class="navb1" v-if="list.length===0">
      <center><router-link :to="{path: 'wenbo', query: {id: 19 ,type:'index'}}" target="_blank"  tag="a">网上文博</router-link></center>
    </div>
    <div class="navb1" v-if="list.length===0">
      <center><router-link :to="{path: 'dock', query: {id: 18 ,type:'index'}}" target="_blank"  tag="a">产业对接</router-link></center>
    </div>
    <div class="navb1" v-if="list.length===0">
      <center><router-link :to="{path: 'hall', query: {id: 17 ,type:'index'}}" target="_blank"  tag="a">文化会馆</router-link></center>
    </div>
    <div class="navb1" v-if="list.length===0">
      <center><router-link :to="{path: 'photos', query: {id: 15 ,type:'index'}}" target="_blank"  tag="a">美丽山西</router-link></center>
    </div>
    <div class="navb1 lastNav" v-if="list.length===0">
      <center><router-link :to="{path: 'article', query: {id: 13 ,type:'index'}}" target="_blank"  tag="a">文产资讯</router-link></center>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    list: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      
    }
  },
  components: { },
  created () {

  },
  methods: {

  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.nav{
	margin-top:10px;
	height:61px;
	width:100%;
	background:#B28147;
	overflow:hidden;
}
.nav1{
	margin:0px auto;
	height:61px;
	width:1080px;
}
.navb1 {
  margin-top: 16px;
  margin-left: 0px;
  border: 2px solid #FFFFFF;
  height: 29px;
  // width: 85px;
  color: #FFFFFF;
  font-size: 24px;
  float: left;
  font-weight: bold;
  padding: 3px 12px 0;
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  line-height: 23px;
}
.navb1.lastNav {
 border: 0;
}
.navb1:nth-child(){
  border: 0 !important;
}
.navb2 {
  margin-top: 16px;
  border: 2px solid #FFFFFF;
  height: 29px;
  width: 110px;
  color: #FFFFFF;
  font-size: 23px;
  float: left;
  font-weight: bold;
  padding-top: 3px;
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  line-height: 23px;
}
.navb3 {
  margin-top: 16px;
  padding-left: 8px;
  border: 2px solid #FFFFFF;
  height: 29px;
  width: 125px;
  color: #FFFFFF;
  font-size: 23px;
  float: left;
  font-weight: bold;
  padding-top: 3px;
  border: 0px;
  line-height: 23px;
}
.nav a:link{
	color:#FFFFFF;
	text-decoration:none;
}
.nav a:visited{
	color:#FFFFFF;
	text-decoration:none;
}
</style>
