<template>
  <div class="secondleft1">
    <div class="secondlefttitle">
      <div class="secondlefttitle1"></div>
      <div class="secondlefttitle2">
        <router-link
          :to="{ path: 'secondIndex', query: { id: id, type: type } }"
        >
          <img :src="require('../assets/SXWB/img/' + titlog + '.jpg')" alt="" />
        </router-link>
      </div>
    </div>

    <div v-for="(item, index) in listData" :key="index" v-if="index < 2">
      <div class="secfont1 danhang">
        <router-link :to="{ path: 'detail', query: { id: item.id } }">{{
          item.title
        }}</router-link>
      </div>
      <div class="main-left1 ilist">
        <router-link :to="{ path: 'detail', query: { id: item.id } }"
          ><img :src="item.imgUrl"
        /></router-link>
      </div>
      <div class="secfont2font1">{{ item.zhaiyao }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleLeft",
  props: {
    listData: {
      type: Array,
      default: [],
    },
    titlog: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {},
};
</script>
<style scoped>
.secondleft1 {
  margin-top: 40px;
  height: auto;
  width: 631px;
  float: left;
  padding-bottom: 42px;
  border: 2px dashed #cecece;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.secondlefttitle {
  height: 54px;
  width: 321px;
  float: left;
}
.secondlefttitle1 {
  height: 50px;
  width: 23px;
  float: left;
  border: 4px solid #6e0a0a;
  border-right: 0px;
}
.secondlefttitle2 {
  height: 50px;
  width: 290px;
  float: left;
  border: 4px solid #6e0a0a;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  font-size: 29px;
  line-height: 50px;
  color: #6e0a0a;
}
.secondlefttitle2 img {
  margin-top: 10px;
}
#secfont {
  color: #595959;
  font-family: 方正大标宋简体;
}
#secfont3 {
  color: #6e0a0a;
}
.secfont1 {
  margin-top: 38px;
  height: 23px;
  width: 480px;
  float: left;
  font-size: 21px;
  line-height: 21px;
  font-weight: 600;
}
.secfont1_1 {
  margin-top: 20px;
  height: 23px;
  width: 480px;
  float: left;
  font-size: 21px;
  line-height: 21px;
}
.secfont2 {
  margin-top: 20px;
  height: 130px;
  width: 631px;
  float: left;
  font-size: 21px;
  border: 1px solid #cecece;
  line-height: 21px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.secfont2 {
  margin-top: 20px;
  height: 130px;
  width: 631px;
  float: left;
  font-size: 21px;
  border: 1px solid #cecece;
  line-height: 21px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.secfont2_2 {
  margin-top: 20px;
  height: 130px;
  width: 631px;
  float: left;
  font-size: 21px;
  line-height: 21px;
}
.mb2left4_22 {
  margin-left: 40px;
  height: 185px;
  width: 300px;
  float: left;
}
.secfont2img {
  height: 110px;
  width: 166px;
  float: left;
  border: 1px solid #f1f1f1;
}
.secfont2font {
  height: 110px;
  width: 440px;
  float: left;
  margin-left: 20px;
  text-indent: 2em;
  font-size: 16px;
  color: #6c6c6c;
  line-height: 27px;
}
.secfont2font1 {
  height: 110px;
  width: 430px;
  float: left;
  margin-top: 15px;
  margin-left: 20px;
  text-indent: 2em;
  font-size: 16px;
  color: #6c6c6c;
  line-height: 27px;
}
.main-left1 {
  position: relative;
  float: left;
  margin-left: 100px;
  margin: 15px 15px 0 0;
  width: 164px;
  height: 107px;
  overflow: hidden;
}
.danhang {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mb2le3_212 p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /*显示几行*/
  overflow: hidden;
}
</style>