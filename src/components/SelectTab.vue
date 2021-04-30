<template>
<div>
	<!--产业对接-->	
	<div class="mb3left1">
		<div class="redb">
			<a href="/dock.html"><img src="../assets/SXWB/img/s4.jpg"></a>
		</div>
		<div class="garyb">
		</div>
	</div>
	<div class="mb3left2">
		<div class="mb2left4_1">
			<ul id="test2_li_now_" v-for="(item, index) in listCYDJData" :key="index">
				<a href="/dock/69.html" target="_blank">
					<li class=""  @mouseover="mouseOver(index)">{{item.title}}</li>
				</a>
			</ul>
		</div>
		<div class="tablist" >
			<div class="mb2left3_2" v-for="(item, index) in listCYDJData" :key="index" v-if="index === mouseIndex">
				<div class="mb2left3_21">
					<div v-for="(item1, index1) in item.content" :key="index1" v-if="index1 < 2">
						<div class="mb2le3_211 danhang">
							<ul>
								<li  class="danhang" width="300px" >
									<router-link :to="{path: 'detail', query: {id: item1.id }}">{{item1.title}}</router-link>
								</li>
							</ul>
						</div>
						<div class="mb2le3_212">
							<p>
								{{item1.zhaiyao}}</p>
						</div>
					</div>	
				</div>
				<div class="mb2left3_22">
					<div class="main-left1 ilist">
						<router-link :to="{path: 'detail', query: {id: (listCYDJData[0]).content[0].id }}">
								<span
								class="mb1left4_2 danhang" >{{(listCYDJData[0]).content[0].title}}</span>
							<img :src="(listCYDJData[0]).content[0].imgUrl" />
						</router-link>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</div>
</template>
<script>
export default {
  name: 'SelectTab',
  props: {
    listCYDJData: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      mouseIndex: 0
    }
  },
  components: { },
  created () {

  },
  methods: {
		mouseOver(index) {
			this.mouseIndex = index
		}
  }
}
</script>
<style scoped>
	.mb3left {
		height: 1115px;
		width: 691px;
		float: left;
	}

	.mb3left1 {
		height: 50px;
		width: 691px;
		float: left;
	}

	.mb3left1_1 {
		margin-top: 50px;
		height: 50px;
		width: 691px;
		float: left;
	}

	.mb3left2 {
		margin-top: 35px;
		height: 300px;
		width: 691px;
		float: left;
	}

	.box1 {
		height: 40px;
		width: 691px;
		float: left;
	}

	.box2 {
		margin-top: 30px;
		height: 175px;
		width: 691px;
		float: left;
	}

	.box2_1 {
		height: 175px;
		width: 375px;
		float: left;
	}

	.box2_2 {
		margin-left: 10px;
		height: 175px;
		width: 294px;
		float: right;
		/* background: url(../img/xmtj.jpg); */
	}

	.box2_11 {
		font-size: 20px;
		height: 27px;
		width: 375px;
		float: left;
		font-weight: bold;
		padding-top: 3px;
	}

	.box2_11_1 {
		font-size: 20px;
		height: 27px;
		width: 350px;
		float: left;
		font-weight: bold;
		padding-top: 3px;
	}

	.space3 {
		height: 30px;
		width: 350px;
		float: left;
	}

	.box2_11 ul {
		padding-left: 15px;
	}

	.box2_11_1 ul {
		padding-left: 15px;
	}

	#box2_11font {
		color: #71090A;
	}

	.box2_12 {
		margin-left: 15px;
		margin-top: 10px;
		height: 40px;
		width: 360px;
		float: left;
		font-size: 15px;
		color: #707070;
		line-height: 22px;
		margin-bottom: 5px;
	}

	.box2_12_1 {
		margin-left: 15px;
		margin-top: 10px;
		height: 40px;
		width: 335px;
		float: left;
		font-size: 15px;
		color: #707070;
		line-height: 22px;
		margin-bottom: 5px;
	}

	.box2_21 {
		height: 150px;
		width: 294px;
		float: left;
	}

	.box2_22 {
		font-size: 15px;
		height: 21px;
		width: 294px;
		float: left;
		background: rgba(0, 0, 0, 0.5);
		color: #FFFFFF;
		padding-top: 4px;
	}

	.mb3left3 {
		margin-top: 5px;
		height: 200px;
		width: 590px;
		border: 1px solid #D9D9D9;
		float: left;
	}

	.box2_3 {
		margin-left: 10px;
		height: 175px;
		width: 294px;
		border: 1px solid #D9D9D9;
		float: right;
		/* background: url(../img/dej.jpg); */
	}

	.mb3left4 {
		margin-top: 5px;
		height: 200px;
		width: 590px;
		border: 1px solid #D9D9D9;
		float: left;
	}

	.box2_4 {
		margin-left: 10px;
		height: 175px;
		width: 294px;
		border: 1px solid #D9D9D9;
		float: right;
		/* background: url(../img/whrp.jpg); */
	}

	.main-left1 {
		position: relative;
		float: left;
		margin-left: 100px;
		margin: 15px 15px 0 0;
		width: 300px;
		height: 186px;
		overflow: hidden;
	}

	.ilist a {
		position: absolute;
		display: block;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 2px solid #f7f7f7;
		cursor: pointer;
		_position: relative;
		overflow: hidden;
	}

	.ilist .mb1left4_2 {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0px;
		display: block;
		padding: 0 5px;
		line-height: 35px;
		height: 33px;
		width: 295px;
		float: left;
		color: #FFFFFF;
		font-size: 16px;
		font-weight: bold;
		background: rgba(0, 0, 0, 0.6);
	}
	
	.danhang{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.mb2le3_212 p{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;/*显示几行*/
		overflow: hidden;
	}

	.mb2left3_2 {
		margin-top: 5px;
		height: 220px;
		width: 691px;
		float: left;
	}

	.mb2left3_21 {
		height: 220px;
		width: 300px;
		float: left;
	}

	.mb2left3_22 {
		margin-left: 40px;
		height: 220px;
		width: 300px;
		float: left;
	}

	.mb2left3_23 {
		height: 125px;
		width: 175px;
		float: left;
	}

	.mb2le3_211 {
		margin-top: 23px;
		height: 27px;
		width: 300px;
		float: left;
		font-size: 17px;
		font-weight: bold;
		padding-top: 3px;
	}

	.mb2le3_211 ul {
		padding-left: 15px;
	}

	.mb2le3_212 {
		margin-top: 0px;
		padding-left: 15px;
		height: 50px;
		width: 285px;
		float: left;
		font-size: 15px;
		color: #707070;
		line-height: 31px;
	}
</style>