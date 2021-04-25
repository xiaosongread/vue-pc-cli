<template>
<div>
    <div class="listItem" v-for="(item, index) in list" :key="index">
        <div class="listdet1">
            <div class="listdet1-11">
                <p style="width: 590px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                    <a href="/article/show-5718.html" target="_blank">{{item.title}}</a>
                </p>
            </div>
            <div class="buttonxx">
                <a href="/article/show-5718.html" target="_blank">
                    <img src="../assets/SXWB/img/buttonxx.jpg">
                </a>
            </div>
        </div>
        <div class="listdet2">{{item.zhaiyao}}</div>
        <div class="listdet3">
            <div class="underline"></div>
            <div class="underdata">2021年04月22日</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'SecondItem',
  props: {
      list: {
          type: Array,
          default: []
      }
  },
  data () {
    return {
      
    }
  },
  components: {

  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.listdet1 {
    margin-top: 50px;
    padding-left: 15px;
    width: 650px;
    height: 30px;
    float: left;
    font-size: 20px;
    font-weight: bold;
    line-height: 30px;
}
.listdet1-11 {
    width: 590px;
    height: 30px;
    float: left;
		p{
			width: 590px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
}
.buttonxx {
    margin-top: 6px;
    height: 20px;
    width: 40px;
    float: right;
}
.listdet2 {
    margin-top: 16px;
    padding-left: 15px;
    padding-right: 50px;
    width: 650px;
    height: 50px;
    float: left;
    font-size: 16px;
    color: #525252;
    line-height: 28px;
    text-indent: 2em;
}
.listdet3 {
    margin-top: 18px;
    width: 631px;
    height: 20px;
    float: left;
}
.underline {
    margin-top: 10px;
    width: 518px;
    height: 2px;
    border: 2px solid #F2F2F2;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
    float: left;
}
.underdata {
    height: 20px;
    width: 108px;
    float: right;
    font-size: 14px;
    color: #5E5E5E;
}
</style>