<template>
  <div class="mb1left">
    <div class="mb1left1">
      <div id="header">
        <div class="wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item, index) in ListsData"
                :key="index"
              >
                <div class="swiper-slide">
                  <img :src="item.imgUrl" />
                  <div class="swiper-tit">
                    {{ item.title }}
                  </div>
                </div>
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb1left2">
      <div class="redb">
        <router-link :to="{ path: 'article', query: {} }"
          ><img src="../assets/SXWB/img/s1.jpg"
        /></router-link>
      </div>
      <div class="garyb"></div>
    </div>
    <div class="mb1314">
      <div
        class="mbl3"
        v-if="item.id === 60 || item.id === 61"
        v-for="(item, index) in listData"
        :key="index"
      >
        <div class="mb1left3">
          <!--产业咨询-->
          <div class="mbr3left1">
            <div class="redb3">
              <div v-if="item.id === 60">
                <router-link :to="{ path: 'article', query: {} }">{{
                  item.title
                }}</router-link>
                <span id="red3">Focus </span>
              </div>
              <div v-if="item.id === 61">
                <router-link :to="{ path: 'article', query: {} }">{{
                  item.title
                }}</router-link>
                <span id="red3">Information </span>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(item1, index1) in item.content"
          :key="index1"
          v-if="index1 === 0 || index1 !== 0 || index1 < 5"
        >
          <div class="main-left ilist" v-if="index1 === 0">
            <router-link :to="{ path: 'detail', query: { id: item1.id } }">
              <span class="mb1left4_2">{{ item1.title }}</span>
              <img :src="item1.imgUrl"
            /></router-link>
          </div>
          <div class="mb1left5" v-if="index1 !== 0 && index1 < 5">
            <p>
              <router-link :to="{ path: 'detail', query: { id: item1.id } }">{{
                item1.title
              }}</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { pictureCarousel } from "@/utils/api";
import "../../node_modules/swiper/css/swiper.min.css";
// import { tab } from "@/utils/util.js";
// import Swiper from 'swiper/js/swiper.min.js'
// import 'swiper/css/swiper.min.css'
let _that;
export default {
  name: "IndexMb1Left",
  props: {
    listData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      ListsData: [],
    };
  },
  components: {},
  created() {
    _that = this;
    this.pictureCarousel(),
      setTimeout(() => {
        var mySwiper = new Swiper(".swiper-container", {
          direction: "horizontal", // 垂直切换选项
          loop: true, // 循环模式选项
          speed: 2000,
          observer: true,
          observeParents: true,
          autoplayDisableOnInteraction: false,
          autoplay: 1500,
          effect: "fade",
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
        // new tab("test1_li_now_", "_", null, "onmouseover");
        // new tab("test2_li_now_", "_", null, "onmouseover");
        // new tab("test3_li_now_", "_", null, "onmouseover");
        // new tab("test4_li_now_", "_", null, "onmouseover");
        // new tab("test5_li_now_", "_", null, "onmouseover");
      }, 1000);
  },
  methods: {
    async pictureCarousel() {
      const data = await pictureCarousel({ id: 0 });
      (_that.ListsData = data.data), console.log("接口数据59", data);
    },
  },
};
</script>
<style>
.mb1left {
  height: 840px;
  width: 691px;
  float: left;
}
.mb1left1 {
  height: 370px;
  width: 691px;
  float: left;
}

/*滚图完成*/
.mb1left2 {
  margin-top: 45px;
  height: 52px;
  width: 691px;
  float: left;
}
.redb {
  height: 45px;
  width: 165px;
  border: 5px solid #6e0a0a;
  float: left;
  line-height: 35px;
  font-size: 40px;
  font-weight: bold;
  color: #6e090a;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
#redb1 {
  color: #7e8285;
}
.garyb {
  margin-left: 7px;
  height: 45px;
  width: 517px;
  border: 5px solid #7e8285;
  float: left;
  line-height: 35px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.mb1314 {
  height: 400px;
  width: 691px;
  float: left;
}
.mbl3 {
  height: 400px;
  width: 345px;
  float: left;
}
.mbl4 {
  margin-left: 25px;
  height: 400px;
  width: 331px;
  float: left;
}
.mb1left3 {
  margin-top: 40px;
  height: 30px;
  width: 330px;
  float: left;
}
.redb3 {
  height: 31px;
  width: 300px;
  float: left;
  font-size: 23px;
  font-weight: bold;
  color: #6e090a;
}
.redb3 a {
  color: #6e090a;
  text-decoration: none;
}
.redb3 a:link {
  color: #6e090a;
  text-decoration: none;
}
.redb3 a:visited {
  color: #6e090a;
}
.redb3 a:hover {
  color: #6e090a;
}
.redb3 a:active {
  color: #6e090a;
}
.redb3-1 {
  height: 21px;
  width: 185px;
  float: left;
  font-size: 23px;
  font-weight: bold;
  color: #6e090a;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  line-height: 3px;
  margin-top: 20px;
}
#red3 {
  color: #7e8285;
  font-size: 15px;
}
#red4 {
  height: 20px;
  width: 50px;
  color: #7e8285;
  font-size: 15px;
  line-height: 20px;
  margin-left: 1px;
}
.mb1left4 {
  margin-top: 15px;
  height: 186px;
  width: 331px;
  float: left;
}
.mb1left6 {
  margin-top: 15px;
  height: 186px;
  width: 331px;
  float: left;
  /* background:url('~@/assets/SXWB/cyzx.jpg'); */
}
.mb1left4_1 {
  height: 153px;
  width: 331px;
  float: left;
}
.mb1left4_2 {
  padding-left: 4px;
  line-height: 35px;
  height: 33px;
  width: 326px;
  float: left;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
}
.mb1left4_6 {
  padding-left: 4px;
  line-height: 35px;
  height: 33px;
  width: 326px;
  float: left;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
}
.mb1left5 {
  padding-top: 6px;
  padding-left: 5px;
  width: 326px;
  float: left;
  font-size: 15px;
  line-height: 28px;
}
.ilist a img {
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  _height: 100%;
}
.main-left {
  position: relative;
  float: left;
  margin: 15px 15px 0 0;
  width: 331px;
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
.ilist .abs-bg {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  height: 125px;
  /* background: url('~@/assets/SXWB/pic-bg.png') 0 bottom repeat-x; */
  width: 100%;
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
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
}
.ilist a img {
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  _height: 100%;
}
/* .mb1left5 {
    padding-top: 10px;
    padding-left: 5px;
    margin-top: 5px;
    height: 105px;
    width: 326px;
    float: left;
    font-size: 15px;
    line-height: 28px;
} */
#header {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 690px;
  height: 380px;
  position: relative;
  overflow: hidden;
}
.wrap {
  position: relative;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-slide {
  /* width: 690px;
  height: 380px; */
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-slide .swiper-tit {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  display: block;
  padding: 0 5px;
  line-height: 40px;
  height: 38px;
  float: left;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
}
.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  width: auto !important;
  right: 10px !important;
  left: inherit !important;
}
.swiper-pagination {
  /* width: 690px;
  height: 40px; */
  position: absolute;
  bottom: 16px;
  right: 5px;
  z-index: 10;
  display: flex;
  text-align: right;
}
.swiper-pagination-bullet {
  display: block;
  width: 8px;
  height: 8px;
  text-indent: -9999px;
  border: 1px solid #999;
  border-radius: 8px;
  margin: 0 5px 0 0;
  cursor: pointer;
  overflow: hidden;
}
.swiper-pagination-bullet-active {
  background: #f90;
  border-color: #f90;
  cursor: default;
}
</style>
