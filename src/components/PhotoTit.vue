<template>
  <!-- 标题 -->
  <div class="secondlefttitle">
    <div class="secondlefttitle1"></div>
    <div class="secondlefttitle2">
      <a href="/photos/148.html" target="_blank"><img src="../assets/SXWB/img/tswb.jpg" alt=""></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PhotoTit',
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
.photoBox{
	width: 1060px;
	margin: 0 auto;
}
/* 标题 */
.secondlefttitle{
	margin-left:20px;
	margin-top:50px;
	height:54px;
	width:1080px;
}
.secondlefttitle-1{
	margin-top:0px;
	height:54px;
	width:1080px;
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
}
</style>