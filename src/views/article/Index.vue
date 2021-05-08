<template>
  <div>
    <LogoHeader type="article" />
    <Header :list="menuList" type="article" />
    <SwiperBanner :id="id"></SwiperBanner>
    <div class="secondnav">
      <div class="secondnavimg">
        <router-link :to="{ path: 'secondIndex', query: { id: '59',type: 'article' } }"><img src="@/assets/SXWB/img/secondnav1.jpg" /></router-link>
      </div>
      <div v-for="(item, index) in ywsd" :key="index" v-if="index < 3">
        <div class="secondli1"></div>
        <div class="secondli2">
          <router-link :to="{ path: 'detail', query: { id: item.id } }">{{
            item.title
          }}</router-link>
        </div>
      </div>
    </div>
    <!-- 主内容 -->
    <div class="secondm">
      <div class="secondleft">
        <ArticleLeft :listData="whjj" type="article" id="60" titlog="w1" ></ArticleLeft>
        <ArticleLeft
          :listData="cyzx"
          type="article"
          id="61"
          titlog="w2"
        ></ArticleLeft>
        <ArticleLeft
          :listData="hyqy"
          type="article"
          id="77"
          titlog="w3"
        ></ArticleLeft>
        <ArticleLeft
          :listData="dsdt"
          type="article"
          id="78"
          titlog="w4"
        ></ArticleLeft>
      </div>
      <div class="secondright">
        <FirstRightNav></FirstRightNav>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {
  channelDataListJson,
  menuDataList,
  redDataListJson,
} from "@/utils/api";
import LogoHeader from "@/components/LogoHeader";
import Header from "@/components/Header";
import SwiperBanner from "@/components/SwiperBanner";
import ArticleLeft from "@/components/ArticleLeft";
import FirstRightNav from "@/components/FirstRightNav";
import Footer from "@/components/Footer";
let _that;
export default {
  components: {
    LogoHeader,
    Header,
    SwiperBanner,
    ArticleLeft,
    FirstRightNav,
    Footer,
  },
  data() {
    return {
      menuList: [],
      wczxData: [],
      ywsd: [],
      whjj: [],
      cyzx: [],
      hyqy: [],
      dsdt: [],
      id: "13",
    };
  },
  created() {
    _that = this;
    this.menuDataList();
    this.DataListJson();
  },
  methods: {
    async menuDataList() {
      const data = await menuDataList();
      this.menuList = data.data.filter((item, index) => {
        return item.id === 13;
      })[0].data;
    },
    async DataListJson() {
      const data = await redDataListJson({ channelId: 13 });
      _that.wczxData = data.data[0].data;
      console.log("------------",data.data[0].data);
      _that.wczxData.forEach((item, index) => {
        switch (item.id) {
          case 59:
            _that.ywsd = item.data;
            
            break;
          case 60:
            _that.whjj = item.data;
            break;
          case 61:
            _that.cyzx = item.data;
            break;
          case 77:
            _that.hyqy = item.data;
            break;
          case 78:
            _that.dsdt = item.data;
            break;
        }
      });
      console.log("接口数据", this.ywsd);
    },
  },
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.mbmain {
  margin-top: 25px;
  width: 1080px;
  margin: 0px auto;
}
.mb1 {
  margin-top: 95px;
  width: 1080px;
}
.mbimg1 {
  margin-top: 60px;
  margin-bottom: 45px;
  height: 162px;
  width: 1080px;
}
.mb2 {
  height: 1245px;
  width: 1080px;
}
.mg3 {
  margin-top: 35px;
  height: 546px;
  width: 1080px;
}
.secondnav {
  margin: 30px auto 0;
  height: 45px;
  width: 1080px;
}
.secondnavimg {
  margin-left: 30px;
  margin-right: 28px;
  height: 45px;
  width: 45px;
  float: left;
}
.secondli1 {
  margin-top: 5px;
  margin-right: 5px;
  height: 15px;
  width: 15px;
  float: left;
  background: url("~@/assets/SXWB/img/菱形.png");
}
.secondli1_1 {
  margin-left: 65px;
  margin-top: 5px;
  margin-right: 5px;
  height: 15px;
  width: 15px;
  float: left;
  background: url("~@/assets/SXWB/img/菱形.png");
}
.secondli2 {
  height: 45px;
  width: 300px;
  float: left;
  font-size: 19px;
  font-weight: bold;
  line-height: 25px;
  padding-top: 0px;
}
.secondm {
  // height: 2070px;
  width: 1080px;
  margin: 0 auto;
  overflow: hidden;
}
.secondleft {
  margin-left: 30px;
  margin-right: 30px;
  height: 2070px;
  width: 631px;
  float: left;
}
.secondright {
  height: 2070px;
  width: 350px;
  float: left;
  margin-left: 34px;
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