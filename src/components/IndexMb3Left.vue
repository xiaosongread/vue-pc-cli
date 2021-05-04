<template>
<div class="mb3left">
	<SelectTab :listCYDJData = 'listCYDJData' id="18" titlog="s4" paths="dock"></SelectTab>
	<SelectTab :listCYDJData = 'listWSWBData' id="19" titlog="s5" paths="wenbo"></SelectTab>
	<SelectTab :listCYDJData = 'listWHLTData' id="20" titlog="s6" paths="bbs"></SelectTab>
</div>
</template>
<script>
import SelectTab from '@/components/SelectTab'
export default {
  name: 'IndexMb3Left',
  props: {
    listCYDJData: {
      type: Array,
      default: []
    },
	listWSWBData: {
      type: Array,
      default: []
    },
	listWHLTData: {
      type: Array,
      default: []
    },
  },
  data () {
    return {
      
    }
  },
  components: {
		SelectTab
	},
  created () {

  },
  methods: {
		
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
		height: 250px;
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
		width: 326px;
		float: left;
		color: #FFFFFF;
		font-size: 16px;
		font-weight: bold;
		background: rgba(0, 0, 0, 0.6);
	}
	.mb2le4_212 li .mb1left4_2{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.mb2le4_212 p{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;/*显示几行*/
		overflow: hidden;
	}
</style>