<template>
  <div style="overflow: hidden">
  <div class="search-titlie">
    <div style="float: left;font-size: 26px;">站内搜索</div>
    <div style="float: left;font-size: 15px;margin-top: 12px;margin-left:150px">搜索关健字： &nbsp;&nbsp;</div>
    <div style="float: left;font-size: 15px;margin-top: 12px;color: #1E7BB3">{{searchContent}}</div>
    <div style="float: left;font-size: 15px;margin-top: 12px;"> &nbsp;&nbsp;，共有</div>
    <div style="float: left;font-size: 15px;margin-top: 12px;color: #F00;"> &nbsp;&nbsp;{{records}} &nbsp;&nbsp;</div>
    <div style="float: left;font-size: 15px;margin-top: 12px;">条记录</div>
  </div>
    <div class="listItem" v-for="(item, index) in list" :key="index">
      <div class="listdet1">
        <div class="listdet1-11">
          
          <p
            style="
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              
            "
          >
            <img src="../assets/SXWB/img/dian.jpg">&nbsp;
            <router-link target="_blank"  tag="a" :to="{ path: 'detail', query: { id: item.id } }">{{
              item.title
            }}</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SecondItem",
  props: {
    list: {
      type: Array,
      default: [],
    },
    searchContent:{
      type: String,
      default: "",
    },
    records:{
      type: Number,
      default: "",
    },
  },
  data() {
    return {
    };
  },
  components: {},
  created() {
    console.log(this.searchContent+"``````````````````````")
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.search-titlie{
  padding: 20px;
  margin-top: 35px;
}
.listItem{
  margin-top: 50px;
}
.listdet1 {
  width: 650px;
  padding: 20px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  border-bottom: 1px solid #f0f0f0;
}
.listdet1-11 {
  width: 590px;
  height: 30px;
  float: left;
  p {
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
  border: 2px solid #f2f2f2;
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
  color: #5e5e5e;
}
</style>