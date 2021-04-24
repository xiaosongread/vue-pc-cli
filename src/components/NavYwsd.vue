<template>
<div class="mb1right">
  <!--新闻速递-->
  <div class="mb1right1">
    <div class="redb2">
      <a href="/article.html" target="_blank">要闻速递</a><span id="redb2"> News</span>
    </div>
    <div class="garyb2">
    </div>
  </div>

  <div v-for="(item, index) in ywsdData" :key="index" v-if="index===0 || index<2">
    <div class="mb1right2-1">
      <a title="山西：文化旅游强势推进" href="/article/show-5601.html" target="_blank">{{item.title}}</a>
    </div>
    <div class="mb1right3">
      <p>{{item.zhaiyao}}</p>
    </div>
    <div class="space1">
    </div>
  </div>

  <div class="space1">
  </div>
  <a href="http://118.190.153.110/login" target="_blank"><img src="../assets/SXWB/img/whcy.jpg"></a>
  <div class="mb1right1">
    <div class="redb2">
      <a href="/article/62.html" target="_blank">
        政策法规
      </a><span id="redb2"> Law</span>
    </div>
    <div class="garyb2">
    </div>
  </div>
  <div class="mb1right4" >
    <ul v-for="(item, index) in zcfgData" :key="index" v-if="index===0 || index<4">
      <li>
        <p style="width: 335px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"><img
            src="../assets/SXWB/img/dian.jpg">&nbsp;<a title="国务院办公厅关于加强石窟寺保护利用工作的指导意见" href="/article/show-5678.html"
            target="_blank">{{item.title}}</a></p>
      </li>
    </ul>
  </div>
  <div class="mb1right1">
    <div class="redb2">
      <a href="/article/63.html" target="_blank">公告通知</a><span id="redb2"> Notice</span>
    </div>
    <div class="garyb2">
    </div>
  </div>
  <div class="mb1right4">
    <ul v-for="(item, index) in ggtzData" :key="index" v-if="index===0 || index<4">
      <li>
        <p style="width: 335px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"><img
            src="../assets/SXWB/img/dian.jpg">&nbsp;<a title="关于开展2021年度国家社会科学基金艺术学项目申报工作和2021年度国家社会科学基金艺术学重大项目招标公告的通知"
            href="/article/show-5666.html" target="_blank">{{item.title}}</a>
        </p>
      </li>
    </ul>
  </div>
  <div class="space1">
  </div>
</div>
</template>
<script>
export default {
  name: 'NavYwsd',
   props: {
    ywsdData: {
      type: Array,
      default: []
    },
    zcfgData: {
      type: Array,
      default: []
    },
    ggtzData: {
      type: Array,
      default: []
    },
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
<style>
a:link {
    color: black;
    text-decoration: none;
}
a:visited{
	color:black;
}	/* 已访问的链接 */
a:hover{
	color:black;
	text-decoration:underline;
}	/* 鼠标移动到链接上 */
a:active{
	color:black;
}
.mb1right {
    height: 840px;
    width: 350px;
    float: left;
    margin-left: 34px;
}
.mb1right1 {
    margin-top: 6px;
    height: 40px;
    width: 350px;
    float: left;
}
.redb2 {
    height: 21px;
    width: 155px;
    border: 3px solid #6E0A0A;
    float: left;
    font-size: 23px;
    font-weight: bold;
    color: #6E090A;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    line-height: 3px;
    margin-top: 20px;
}
.redb2 a:link {
    color: #6E090A;
    text-decoration: none;
}
#redb2 {
    color: #7E8285;
    font-size: 15px;
}
.garyb2 {
    margin-top: 20px;
    margin-left: 3px;
    height: 21px;
    width: 192px;
    border: 3px solid #7E8285;
    float: left;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
}
.space2{
	height:25px;
	width:350px;
	float:left;
}
.mb1right2{
	margin-top:0px;
	height:25px;
	width:410px;
	float:left;
	font-size:20px;
	font-weight:bold;
	letter-spacing:1px;
}
.mb1right2-1{
	margin-top:24px;
	height:25px;
	width:355px;
	float:left;
	font-size:20px;
	font-weight:bold;
	letter-spacing:1px;
}
.mb1right2-3{
	margin-top:25px;
	height:25px;
	width:355px;
	float:left;
	font-size:20px;
	font-weight:bold;
	letter-spacing:1px;
}
.mb1right3{
	margin-top:17px;
	height:68px;
	width:345px;
	float:left;
	font-size:15px;
	color:#7E8186;
	line-height:30px;
}
.mb1right3-1{
	margin-top:17px;
	height:68px;
	width:400px;
	float:left;
	font-size:15px;
	color:#7E8186;
	line-height:30px;
}
.space1{
	height:21px;
	width:350px;
	float:left;
}
.mb1right4{
	margin-top:22px;
	height:125px;
	width:350px;
	float:left;
	line-height:32px;
	font-size:15px;
}

.mb1right4 ul{
	float:left;
	padding-left:3px;
}
</style>
