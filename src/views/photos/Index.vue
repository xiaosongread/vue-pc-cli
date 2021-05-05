<template>
  <div>
    <LogoHeader type="photos" />
    <Header :list="menuList" />
    <SwiperBanner :id="id"></SwiperBanner>
    <!-- 主内容 -->
    <!-- 图说文博 -->
    <div class="photoBox">
      <PhotoTit type="tswb"></PhotoTit>
      <PhotoTw :listData="tswb"></PhotoTw>
    </div>
    <!-- 图说山西 -->
    <div class="photoBox">
      <PhotoTit type="tssx"></PhotoTit>
      <PhotoTw :listData="tssx"></PhotoTw>
    </div>
    <!-- 视觉三晋 -->
  <div class="photoBox">
    <PhotoTit type="sjsj"></PhotoTit>
    <div class="mlsxpart3">
      <div class="mlsxpart2-video">
          <a href="/videos/show-5417.html" target="_blank" v-for="(item, index) in sjsj" :key="index" v-if="index === 0">
            <img :src="item.imgUrl" >
          </a>
      </div>
      <div class="mlsxpart2-font">
        <div v-for="(item, index) in sjsj" :key="index" v-if="index !== 1 && index < 4">
          <div class="mlsxpart2-font1">
            <a :title="item.title" href="/videos/show-5550.html" target="_blank">{{item.title}}</a></div>
          <div class="mlsxpart2-font2">{{item.zhaiyao}}</div>
        </div>
      </div>
    </div>
  </div>
    <!-- 非遗大展 -->
    <div class="photoBox">
      <PhotoTit type="fydz"></PhotoTit>
      <PhotoTwTab :listData="fydz" type="one"></PhotoTwTab>
    </div>
    <!-- 特色文化 -->
    <div class="photoBox">
      <PhotoTit type="tswh"></PhotoTit>
      <PhotoTwTab :listData="tswh"></PhotoTwTab>
    </div>
    <!-- 网上展馆 -->
    <div class="photoBox">
      <PhotoTit type="wszg"></PhotoTit>
      <PhotoTw :listData="wszg"></PhotoTw>
    </div>
    <!-- 便游三晋 -->
    <div class="photoBox">
      <PhotoTit type="bysj"></PhotoTit>
      <PhotoTwTab :listData="bysj"></PhotoTwTab>
    </div>
    <Footer />
  </div>
</template>

<script>
import { channelDataListJson, menuDataList } from "@/utils/api";
import LogoHeader from "@/components/LogoHeader";
import Header from "@/components/Header";
import SwiperBanner from "@/components/SwiperBanner";
import PhotoTit from "@/components/PhotoTit";
import PhotoTw from "@/components/PhotoTw";
import PhotoTwTab from "@/components/PhotoTwTab";
import Footer from "@/components/Footer";
let _that;
export default {
  components: {
    LogoHeader,
    Header,
    SwiperBanner,
    PhotoTit,
    PhotoTw,
    PhotoTwTab,

    Footer,
  },
  data() {
    return {
      menuList: [],
      mlsxData: [],
      tswb: [],
      tssx: [],
      tswh: [],
      wszg: [],
      bysj: [],
      sjsj: [],
      fydz: [],
      id: "15",
    };
  },
  created() {
    _that = this;
    this.menuDataList();
    this.channelDataListJson();
  },
  methods: {
    async menuDataList() {
      const data = await menuDataList();
      this.menuList = data.data.filter((item, index) => {
        return item.id === 15;
      })[0].data;
    },
    async channelDataListJson() {
      const data = await channelDataListJson();
      data.data.forEach((item, index) => {
        if (item.id === 15) {
          _that.mlsxData = item.data;
        }
      });
      this.mlsxData.forEach((item, index) => {
        switch (item.id) {
          case 148:
            _that.tswb = item.content;
            break;
          case 87:
            _that.tssx = item.content;
            break;
          case 183:
            _that.wszg = item.data;
            break;
          case 75:
            _that.tswh = item.data;
            break;
          case 76:
            _that.bysj = item.data;
            break;
          case 90:
            _that.sjsj = item.content;
            break;
          case 89:
            _that.fydz = item.data;
            break;
        }
      });
      console.log("接口数据", this.sjsj);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.photoBox {
  width: 1060px;
  margin: 0 auto;
}

.mlsxpart3 {
  margin-left: 20px;
  margin-top: 33px;
  height: 450px;
  width: 1080px;
}
.mlsxpart2-video {
  float: left;
  height: 420px;
  width: 700px;
}
.mlsxpart2-video img {
  height: 420px;
  width: 700px;
}
.mlsxpart2-font {
  margin-left: 35px;
  float: left;
  height: 490px;
  width: 325px;
}
.mlsxpart2-font1 {
  margin-top: 1px;
  float: left;
  height: 18px;
  width: 325px;
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
}
.mlsxpart2-font1 a:link {
  color: #6e0a0a;
}
.mlsxpart2-font2 {
  float: left;
  height: 110px;
  width: 320px;
  font-size: 14px;
  line-height: 28px;
  margin-top: 20px;
  color: #878787;
}
.mlsxpart2-font3 {
  margin-top: 45px;
  float: left;
  height: 18px;
  width: 325px;
  font-size: 18px;
  font-weight: bold;
  line-height: 18px;
}
.mlsxpart2-font3 a:link {
  color: #6e0a0a;
}
.mlsxpart2-font4 {
  float: left;
  height: 50px;
  width: 320px;
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  margin-top: 25px;
  color: #878787;
}
</style>