<template>
  <!-- 图文 -->
	<div class="tssxpart">
		<div class="tssxpart1" v-for="(item, index) in listData" :key="index" v-if="index<3">
			<div class="tssxpart1img">
				<a :title="item.title" href="/photos/show-4805.html" target="_blank">
					<img :src="item.imgUrl">
				</a>
			</div>
			<div class="tssxpart1font">
				<div class="tssxpart1font1">
					<a :title="item.title" href="/photos/show-4805.html" target="_blank">{{item.title}}</a></div>
				<div class="tssxpart1font2">{{item.zhaiyao}}</div>
				<div class="tssxpart1font3">
					2019年12月09日
					<div class="tssxxx">
						<a href="/photos/show-4805.html">
							<img src="../assets/SXWB/img/xx.jpg"></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'PhotoTw',
	props: {
		listData: {
			type: Array,
			default: []
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
<style scoped>
.tssxpart{
	height:auto;
	width:1080px;
	margin-top:30px;
	overflow: hidden;
}
.tssxpart1{
	height:auto;
	width:360px;
	float:left;
	padding: 0px 10px 0px 10px;
}
.tssxpart2{
	margin-left:15px;
	margin-right:15px;
	height:450px;
	width:350px;
	float:left;
}
.tssxpart3{
	margin-left:15px;


	float:left;
}
.tssxpart1img{
	height:230px;
	width:350px;
	float:left;
	margin-left:0px;
}
.tssxpart1img img{
	height:230px;
	width:340px;
}
.tssxpart1font{
	height:147px;
	width:333px;
	float:left;
	margin-left:5px;
}
.tssxpart1font1{
	margin-top:18px;
	height:15px;
	width:333px;
	float:left;
	font-size:15px;
	font-weight:bold;
	line-height:20px;
}
.tssxpart1font a:link{
	color:#6E0A0A;
}
.tssxpart1font2{
	margin-top:8px;
	height:70px;
	width:333px;
	float:left;
	font-size:14px;
	
	color:#6C6C6C;
	line-height:24px;
}
.tssxpart1font3{
	margin-top:15px;
	height:15px;
	width:333px;
	float:left;
	font-size:13px;
	color:#6C6C6C;
	line-height:15px;
}
.tssxxx{
	height:15px;
	width:34px;
	float:right;
	margin-right:13px;
}
</style>