<template>
  <div>
    <LogoHeader :type="Jumptype"/>
    <Header :list="headerListData" :type="Jumptype"/>
    <div class="listmain1">
      <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg" />
      <div class="path" v-if="articleData.length">
        {{articleData[0].position}}
      </div>
      <div v-if="type===1" style="display: flex">
        <div class="listmain1left">
        <div v-if="articleData.length">
          <div class="title">{{ articleData[0].title }}</div>
          <div class="time">
            <span style="float: left;">时间：{{ articleData[0].addtime }}</span>
            <span style="float: right;">作者：{{ articleData[0].userName }}</span>
          </div>
          <div class="cons" v-html="articleData[0].content"></div>
          <div class="subTit">
            <span style="flex-grow: 1">来源：山西日报</span>
            <span style="">【责任编辑：lcx】</span>
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
        <FirstRightNav></FirstRightNav>
      </div>
      <div v-if="type===2">
        <div>
          <div class="video_box">
            <video controls="controls" src="https://www.shanxiwenbow.com/upload/202007/13/202007131041525992.mp4" id="video_v1" width="100%" height="100%"></video>
            <div class="video_box_meta">
              <h1>《晋阳传奇·古墓幻影》</h1>
              <p>1979年的春天是个充满希望的季节，这一年，刚成立的山西省考古研究所正在对省内的文物进行普查，太原市郊的晋源区是晋阳古城遗址的所在地，当地还流传着晋王陵就在这里的说法，因此，自然成了这次普查的一个重点。地方志上说，晋王陵位于悬瓮山麓，晋祠以南五里路是晋人祖先唐叔虞的墓。</p>
              <div class="video_box_meta_text">
                责任编辑：冯江涛<br/>
                发布时间：2020年05月26日
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="type===3">
        <div class="photo-swiper">
          <h1>媒体深度融合，打造中央厨房</h1>
          <div class="photo-swiper-tim">内容来源：山西文博网责任编辑：冯江涛发布时间：2019年12月10日</div>
          <div>
            <div class="swiper-container1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://www.shanxiwenbow.com/upload/202007/13/202007130940259742.jpg">
                  <p>媒体深度融合展区重点展示近年来我省在推动传统媒体与新兴媒体深度融合、打造新型传播平台、建设新型主流媒体等方面取得的新突破，由山西日报、山西广播电视台和山西云媒体发展有限公司共同布展。</p>
                </div>
                <div class="swiper-slide">
                  <img src="https://www.shanxiwenbow.com/upload/202008/27/202008272103045210.png">
                  <p>媒体深度融合展区重点展示近年来我省在推动传统媒体与新兴媒体深度融合、打造新型传播平台、建设新型主流媒体等方面取得的新突破，由山西日报、山西广播电视台和山西云媒体发展有限公司共同布展。</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="photo-swiper-trol">
            <div>
              <div class="photo-swiper-trol-per">
                <img src="https://www.shanxiwenbow.com/upload/201912/23/201912231147134515.JPG">
              </div>
              <p class="nextp">上一篇</p>
            </div>
            <div class="photo-swiper-trol-cons">
              123123
            </div>
            <div>
              <div class="photo-swiper-trol-next">
                <img src="https://www.shanxiwenbow.com/upload/201912/23/201912231147134515.JPG">
              </div>
              <p class="nextp">下一篇</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="swiper_trol" v-if="type===2">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202007/13/202007130940259742.jpg">
            </div>
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202007/13/202007130940259742.jpg">
            </div>
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202007/13/202007130940259742.jpg">
            </div>
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202007/13/202007130940259742.jpg">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202008/27/202008272103045210.png">
            </div>
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202008/27/202008272103045210.png">
            </div>
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202008/27/202008272103045210.png">
            </div>
            <div class="swiper-slide-item">
              <img src="https://www.shanxiwenbow.com/upload/202008/27/202008272103045210.png">
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Swiper from "swiper"
import { pictureCarousel } from '@/utils/api'
import "../../../node_modules/swiper/css/swiper.min.css";
import { articleData,secondLeveldata,formArticleIdToChannelData } from "@/utils/api";
import LogoHeader from "@/components/LogoHeader";
import Header from "@/components/Header";
import SecondItem from "@/components/SecondItem";
import FirstRightNav from "@/components/FirstRightNav";

import Footer from "@/components/Footer";
let _that
export default {
  components: {
    LogoHeader,
    Header,
    FirstRightNav,
    SecondItem,
    Footer,
  },
  data() {
    return {
      type: 1, // 1 富文本；2 视频 3 图片
      UpId: '',
      Jumptype:'',
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
    setTimeout(()=>{
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      var mySwiper = new Swiper ('.swiper-container1', {
        direction: 'horizontal', // 水平切换选项
        autoplay:true,
      })
    },1000)
  },
  methods: {
    init() {
      this.formArticleIdToChannelData()
      this.getarticleData()
    },
    async getarticleData() {
      var id = this.$route.query.id
      const {data, channerData} = await articleData({ id });
      console.log('详情的数据', channerData)
      this.articleData = data
      this.UpId = data.UpId
    },
    async formArticleIdToChannelData () {
      var id = this.$route.query.id
      const data = await formArticleIdToChannelData({
        articleId: id,
      })
      this.Jumptype=data.data[0].templateAlias
      this.headerListData = data.data[0].data
       console.log('--------------', this.headerListData)
    },
    loadFn(id) {
      this.$router.push({ path:'detail',query: {
        id
      }})
    }
  },
};
</script>
<style lang="scss" scoped>
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
  display: flex;
  margin-right: 35px;
}
.title {
  line-height: 39px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 37px;
}
.cons {
      height: auto;
    width: 661px;
    float: left;
    margin-left: 30px;
    margin-top: 5px;
    font-size: 15px;
    line-height: 30px;
    text-indent: 2em;
    font-family: SimSun;
    letter-spacing: 0.5px;
    font-weight: bold;
    color: #000;
}
.time{
  height: 40px;
  margin-left: 30px;
  margin-top: 35px;
  border-bottom: 3px solid #efefef;
}
.subTit {
  height: 40px;
  width: 661px;
  margin-left: 30px;
  margin-top: 35px;
  display: inline-flex;
  border-bottom: 3px solid #efefef;
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
  margin-top: 30px;
}
.secondright{
	height:2100px;
	width:350px;
	float:left;
	margin-left:34px;
}

.video_box{
  width: 1080px;
  margin: 30px auto 0;
  display: flex;
  #video_v1{
    width: 650px;
    height: 420px;
    background-color: rgb(0, 0, 0);
    cursor: pointer;
    margin-right: 40px;
  }
  &_meta{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    h1{
      padding: 0 0 15px 0;
      color: #3b8dd1;
      font-size: 22px;
      line-height: 30px;
    }
    p{
      color: #333333;
      line-height: 30px;
    }
    &_text{
      margin-top: 30px;
      text-align: center;
      color: #777;
      font-size: 12px;
      line-height: 24px
    }
  }
}
.swiper_trol{
  width: 100%;
  height: 280px;
  margin-top: 30px;
  background: #000000;
  display: flex;
  align-items: center;
  .swiper-container{
    width: 940px;
    height: 175px;
    padding: 20px 0;
    border-top: 2px solid #454545;
    border-bottom: 2px solid #454545;
    margin: 0 auto;
    overflow: hidden;
    .swiper-slide{
      width: 220px;
      height: 135px;
      display: flex;
      .swiper-slide-item{
        margin: 0 10px;
        img{
          width: 220px;
          height: 135px;
        }
      }
    }
  }
  .swiper-button-prev,.swiper-button-next{
    background: #777;
  }
  .swiper-button-next:after, .swiper-button-prev:after{
    color: #999;
    font-size: 22px;
  }
}
.photo-swiper{
  width: 1080px;
  margin-top: 30px;
  padding: 15px;
  border: 2px solid #EFEFEF;
  h1{
    margin-top: 30px;
    width: 1012px;
    height: 23px;
    font-size: 23px;
    color: #6F0B0B;
    font-weight: bold;
    line-height: 22px;
  }
  &-tim{
    margin-top: 15px;
    margin-bottom: 20px;
    width: 1012px;
    height: 14px;
    font-size: 14px;
    color: #8C8C8C;
    line-height: 14px;
  }
  .swiper-container1{
    width: 1040px;
    overflow: hidden;
  }
  img{
    max-width: 1012px;
    max-height: 690px;
  }
  .photo-swiper-trol{
    display: flex;
    &-cons{
      flex: 1;
    }
    &-per,&-next{
      width: 135px;
      height: 105px;
      background: url('~@/assets/SXWB/img/tttz.jpg') no-repeat;
      img{
        width: 122px;
        height: 72px;
        margin-top: 5px;
        margin-left: 5px;
      }
    }
    .nextp{
      text-align: center;
    }
  }
}
</style>