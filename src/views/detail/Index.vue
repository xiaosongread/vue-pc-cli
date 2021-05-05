<template>
  <div>
    <LogoHeader />
    <Header :list="headerListData"/>
    <div class="listmain1">
      <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg" />
      <div class="path" v-if="articleData.length">
        {{articleData[0].position}}
      </div>
      <div class="listmain1left">
        <div v-if="articleData.length">
          <div class="title">{{ articleData[0].title }}</div>
          <div class="time">
            <span>时间：{{ articleData[0].addtime }}</span>
            <span>作者：{{ articleData[0].userName }}</span>
          </div>
          <div class="cons" v-html="articleData[0].content"></div>
          <div class="subTit">
            <span>来源：山西日报</span>
            <span>【责任编辑：lcx】</span>
          </div>
          <div class="thirdtext2" v-if="articleData.length">
            <p
              style="
                width: 800px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              【上一篇】<a @click="loadFn(articleData[0].UpId)">{{articleData[0].UpTitle}}</a>
            </p>
            <p
              style="
                width: 800px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              "
            >
              【下一篇】<a @click="loadFn(articleData[0].DownId)">{{articleData[0].DownTitle}}</a>
            </p>
          </div>
        </div>
      </div>
      <SecondNav></SecondNav>
    </div>
    <Footer />
  </div>
</template>

<script>
import { articleData,secondLeveldata } from "@/utils/api";
import LogoHeader from "@/components/LogoHeader";
import Header from "@/components/Header";
import SecondItem from "@/components/SecondItem";
import SecondNav from "@/components/SecondNav";

import Footer from "@/components/Footer";
let _that
export default {
  components: {
    LogoHeader,
    Header,
    SecondNav,
    SecondItem,
    Footer,
  },
  data() {
    return {
      UpId: '',
      articleData: [],
      headerListData: []
    };
  },
  watch: {
    // UpId() {
    //   this.init()
    // }
  },
  created() {
    _that = this
    this.init()
  },
  methods: {
    init() {
      // this.secondLeveldata()
      this.getarticleData()
    },
    async getarticleData() {
      var id = this.$route.query.id
      const {data, channerData} = await articleData({ id });
      console.log('详情的数据', data)
      this.articleData = data
      this.headerListData = channerData
      this.UpId = data.UpId
    },
    async secondLeveldata () {
      var id = this.$route.query.id
      const data = await secondLeveldata({
        categoryId: id,
      })
      this.headerListData = data.data
    },
    loadFn(id) {
      this.$router.push({ path:'detail',query: {
        id
      }})
    }
  },
};
</script>
<style scoped>
.conBox {
  overflow: hidden;
}
.path{
  padding-left: 30px;
  margin: 20px auto 0;
  width: 1050px;
  height: 32px;
  background: #EEEEEE;
  font-size: 15px;
  line-height: 33px;
}
.listmain1 {
  width: 1080px;
  /* height: 2040px; */
  margin: 0 auto;
  margin-top: 5px;
  overflow: hidden;
}
.headerImg {
  margin-top: 10px;
  width: 1080px;
  height: 114px;
}
.listmain1left {
  width: 691px;
  min-height: 400px;
  float: left;
  font-size: 14px;
}
.title {
  line-height: 39px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 37px;
}
.cons {
  margin-left: 30px;
}
.time,
.subTit {
  height: 40px;
  margin-left: 30px;
  margin-top: 35px;
  border-bottom: 3px solid #efefef;
}
.subTit {
  display: flex;
  justify-content: space-between;
}
.thirdtext2 {
  padding-left: 45px;
  height: 14px;
  width: 691px;
  float: left;
  font-size: 16px;
  line-height: 32px;
  color: #6e0a0a;
  margin-bottom: 40px;
}
</style>