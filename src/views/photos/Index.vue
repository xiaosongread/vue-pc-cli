<template>
  <div>
    <LogoHeader type="photos" />
    <Header :list="menuList" type="photoList" />
    <SwiperBanner :id="id"></SwiperBanner>
    <!-- 主内容 -->
    <!-- 图说文博 -->
    <div class="photoBox">
      <PhotoTit titlog="tswb" id="148" type="photoList"></PhotoTit>
      <PhotoTw :listData="tswb"></PhotoTw>
    </div>
    <!-- 图说山西 -->
    <div class="photoBox">
      <PhotoTit titlog="mm1" id="87" type="photoList"></PhotoTit>
      <PhotoTw :listData="tssx"></PhotoTw>
    </div>
    <!-- 视觉三晋 -->
  <div class="photoBox">
    <PhotoTit titlog="mm2" id="90" type="photoList"></PhotoTit>
    <div class="mlsxpart3">
      <div class="mlsxpart2-video">
          <router-link target="_blank"  tag="a" :to="{ path: 'detail', query: { id: item.id } }" v-for="(item, index) in sjsj" :key="index" v-if="index === 0">
            <img :src="item.imgUrl" >
            <div class="sjsj-title">{{item.title}}</div>
            </router-link>
      </div>
      <div class="mlsxpart2-font">
        <div v-for="(item, index) in sjsj" :key="index" v-if="index !== 0 && index < 4">
          <div class="mlsxpart2-font1">
            <router-link target="_blank"  tag="a" :to="{ path: 'detail', query: { id: item.id } }">{{
              item.title
            }}</router-link>
            </div>
          <div class="mlsxpart2-font2">{{item.zhaiyao}}</div>
        </div>
      </div>
    </div>
  </div>
    <!-- 非遗大展 -->
    <div class="photoBox">
      <PhotoTit titlog="mm3" id="89" type="photoList"></PhotoTit>
      <PhotoTwTab :listData="fydz" type="one"></PhotoTwTab>
    </div>
    <!-- 特色文化 -->
    <div class="photoBox">
      <PhotoTit titlog="mm4" id="75" type="photoList"></PhotoTit>
      <PhotoTwTab :listData="tswh"></PhotoTwTab>
    </div>
    <!-- 网上展馆 
    <div class="photoBox">
      <PhotoTit type="wszg"></PhotoTit>
      <PhotoTw :listData="wszg"></PhotoTw>
    </div>-->
    <!-- 便游三晋 -->
    <div class="photoBox">
      <PhotoTit titlog="mm5" id="76" type="photoList"></PhotoTit>
      <PhotoTwTab :listData="bysj"></PhotoTwTab>
    </div>
    <Footer />
  </div>
</template>

<script>
import { redDataListJson, menuDataList,dataToJsonThreeAndArticle } from "@/utils/api";
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
    this.DataListJson();
    this.tswhdataToJsonThreeAndArticle();
    this.bysjdataToJsonThreeAndArticle();
    this.fydzdataToJsonThreeAndArticle();
  },
  methods: {
    async menuDataList() {
      const data = await menuDataList();
      this.menuList = data.data.filter((item, index) => {
        return item.id === 15;
      })[0].data;
    },
    async tswhdataToJsonThreeAndArticle() {
      const data = await dataToJsonThreeAndArticle({ categoryId: 75 });
      _that.tswh = data.data;
    },
    async bysjdataToJsonThreeAndArticle() {
      const data = await dataToJsonThreeAndArticle({ categoryId: 76 });
      _that.bysj = data.data;
    },
    async fydzdataToJsonThreeAndArticle() {
      const data = await dataToJsonThreeAndArticle({ categoryId: 89 });
      _that.fydz = data.data;
    },
    async DataListJson() {
      const data = await redDataListJson({ channelId: 15 });
      _that.mlsxData = data.data[0].data;
      this.mlsxData.forEach((item, index) => {
        switch (item.id) {
          case 148:
            _that.tswb = item.data;
            break;
          case 87:
            _that.tssx = item.data;
            break;
          case 90:
            _that.sjsj = item.data;
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
.sjsj-title{
  padding: 5px 10px;
  margin-top: -35px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
}
.mlsxpart3 {
  margin-left: 10px;
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