<template>
<div class="nav">
  <div class="nav1">
    <div class="navb1"><center><router-link :to="{path: 'index'}">首页</router-link></center></div>
    <div :class="index === (list.length-1) && type=='index' ? 'navb1 lastNav' : 'navb1'" v-for="(item, index) in list" :key="index">
      <center>
        <router-link :to="{path: item.templateAlias, query: {id: item.id }}">{{item.title}}</router-link>
      </center>
    </div>
    <div class="navb1 lastNav" v-if="type!='index'"><center> <a href="https://shop145668320.taobao.com" target="_blank">山西文博馆</a></center></div>
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
      default: "second"
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
	margin-top:5px;
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
  font-size: 23px;
  float: left;
  font-weight: bold;
  padding: 3px 10px 0;
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
