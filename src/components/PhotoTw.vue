<template>
  <!-- 图文 -->
	<div class="tssxpart">
		<div class="tssxpart1" v-for="(item, index) in listData" :key="index" v-if="type==='secondIndex' && index<3 || type==='list'">
			<div class="tssxpart1img">
				 <router-link :to="{ path: 'detail', query: { id: item.id } }">
					 <img :src="item.imgUrl">
				 </router-link>
			</div>
			<div class="tssxpart1font">
				<div class="tssxpart1font1 twdanghan">
					<router-link :to="{ path: 'detail', query: { id: item.id } }">
					 {{item.title}}
				 </router-link>
				</div>
				<div class="tssxpart1font2 twduohan">{{item.zhaiyao}}</div>
				<div class="tssxpart1font3">
					{{item.addtime}}
					<div class="tssxxx">
						 <router-link :to="{ path: 'detail', query: { id: item.id } }">
					 <img src="../assets/SXWB/img/xx.jpg">
				 </router-link>
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
		},
		type: {
			type: String,
			default: 'secondIndex'
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
	padding:15px 10px 15px 10px;
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
	height:20px;
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
.twdanghan {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.twduohan {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /*显示几行*/
  overflow: hidden;
}
</style>