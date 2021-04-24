<template>
<div class="secondleft1">
  <div class="secondlefttitle">
    <div class="secondlefttitle1"></div>
    <div class="secondlefttitle2">
      <a href="/article/60.html"><img src="../assets/SXWB/img/w1.jpg" alt=""></a></div>
  </div>

	<div v-for="(item, index) in listData" :key="index" v-if="index<2">
		<div class="secfont1">
			<a :title="item.title" href="/article/show-5548.html" target="_blank">{{item.title}}</a></div>
		<div class="main-left1 ilist">
			<a :title="item.title" href="/article/show-5548.html" target="_blank">
				<img src="../assets/SXWB/img/mb.jpg">
			</a>
		</div>
		<div class="secfont2font1">{{item.zhaiyao}}</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'ArticleLeft',
	props: {
    listData: {
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
<style scoped>
.secondleft1{
	margin-top:40px;
	height:auto;
	width:631px;
	float:left;
	padding-bottom:42px;
	border:2px dashed #CECECE;
	border-top:0px;
	border-left:0px;
	border-right:0px;

}
.secondlefttitle{
	height:54px;
	width:321px;
	float:left;
}
.secondlefttitle1{
	height:50px;
	width:23px;
	float:left;
	border:4px solid #6E0A0A;
	border-right:0px;
}
.secondlefttitle2{
	height:50px;
	width:290px;
	float:left;
	border:4px solid #6E0A0A;
	border-right:0px;
	border-top:0px;
	border-left:0px;
	font-size:29px;
	line-height:50px;
	color:#6E0A0A;
}
.secondlefttitle2 img{
	margin-top:10px;
}
#secfont{
	color:#595959;
	font-family:方正大标宋简体;
}
#secfont3{
	color:#6e0a0a;
}
.secfont1{
	margin-top:38px;
	height:23px;
	width:480px;
	float:left;
	font-size:21px;
	line-height:21px;
	font-weight:600;
}
.secfont1_1{
	margin-top:20px;
	height:23px;
	width:480px;
	float:left;
	font-size:21px;
	line-height:21px;
}
.secfont2{
	margin-top:20px;
	height:130px;
	width:631px;
	float:left;
	font-size:21px;
	border:1px solid #CECECE;
	line-height:21px;
	border-top:0px;
	border-left:0px;
	border-right:0px;
}
.secfont2{
	margin-top:20px;
	height:130px;
	width:631px;
	float:left;
	font-size:21px;
	border:1px solid #CECECE;
	line-height:21px;
	border-top:0px;
	border-left:0px;
	border-right:0px;
}
.secfont2_2{
	margin-top:20px;
	height:130px;
	width:631px;
	float:left;
	font-size:21px;
	line-height:21px;
}
.mb2left4_22{
	margin-left:40px;
	height:185px;
	width:300px;
	float:left;
}
.secfont2img{
height:110px;
	width:166px;
	float:left;
	border:1px solid #F1F1F1;
}
.secfont2font{
	height:110px;
	width:440px;
	float:left;
	margin-left:20px;
	text-indent:2em;
	font-size:16px;
	color:#6C6C6C;
	line-height:27px;
}
.secfont2font1{
	height:110px;
	width:430px;
	float:left;
	margin-Top:15px;
	margin-left:20px;
	text-indent:2em;
	font-size:16px;
	color:#6C6C6C;
	line-height:27px;
}
.main-left1{ position:relative; float:left;margin-left:100px; margin:15px 15px 0 0; width:164px; height:107px; overflow:hidden; }
</style>