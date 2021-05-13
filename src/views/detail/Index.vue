<template>
  <div>
    <LogoHeader :type="Jumptype"/>
    <Header :list="headerListData" :type="Jumptype"/>
    <div class="listmain1">
      <img src="../../assets/SXWB/img/listad1.jpg" class="headerImg" />
      <div class="path" v-if="articleData.length">
        <router-link :to="{ path: 'index', query: { } }" >首页</router-link> >
        <router-link :to="{ path: articleData[0].channelTemplateAlias, query: {id:articleData[0].categoryId, type:articleData[0].channelTemplateAlias} }" >{{articleData[0].channelTitle}}</router-link> >
        <router-link :to="{ path: articleData[0].categoryTemplateAlias, query: {id:articleData[0].categoryId,type:articleData[0].channelTemplateAlias } }" >{{articleData[0].categoryTitle}}</router-link> 
      </div>
      <div v-if="type==1" style="display: flex">
        <div class="listmain1left">
        <div v-if="articleData.length">
          <div class="title">{{ articleData[0].title }}</div>
          <div class="time">
            <span style="float: left;margin-left: 25px;">时间：{{ articleData[0].addtime }}</span>
            <span style="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者：{{ articleData[0].author }}</span>
          </div>
          <p class="cons1" v-html="articleData[0].content"></p>
          <div class="subTit">
            <span style="flex-grow: 1;font-weight: bold;">来源：{{ articleData[0].source }}</span>
            <span style="font-weight: bold;margin-right: 55px;">【责任编辑：{{ articleData[0].zb }}】</span>
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
      <div v-if="type==3">
        <div>
          <div class="video_box">
            <video controls="controls" :src="articleData[0].videoSrc" id="video_v1" width="100%" height="100%"></video>
            <div class="video_box_meta">
              <h1>{{ articleData[0].title }}</h1>
              <p v-html="articleData[0].content"></p>
              <div class="video_box_meta_text">
                责任编辑：{{ articleData[0].zb }}<br/>
                发布时间：{{ articleData[0].addtime }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="type==2">
        <div class="photo-swiper">
          <h1>{{ articleData[0].title }}</h1>
          <div class="photo-swiper-tim">内容来源：{{ articleData[0].source }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    责任编辑：{{ articleData[0].zb }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间：{{ articleData[0].addtime }}</div>
          <div>
            <div class="swiper-container1">
              <div class="swiper-wrapper">
                <div class="swiper-slide setwh" v-for="(item, index) in articleData[0].dataImg" :key="index">
                  <img :src="item.originalPath"/>
                  <p>{{item.remark}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="photo-swiper-trol" v-if="articleData[0].dataImg && articleData[0].dataImg.length">
            <div>
              <div class="photo-swiper-trol-per">
                <img src="https://www.shanxiwenbow.com/upload/201912/23/201912231147134515.JPG">
              </div>
              <p class="nextp">上一篇</p>
            </div>
            <div class="photo-swiper-trol-cons">
              <div class="swiper-container2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in articleData[0].dataImg" :key="index">
                    <img :src="item.originalPath" @click="lineTo(index)">
                  </div>
                </div>
                <div class="swiper-button-prev">
                  <img src="../../assets/SXWB/img/prevBtn.png">
                </div>
                <div class="swiper-button-next">
                  <img src="../../assets/SXWB/img/nextBtn1.png">
                </div>
              </div>
            </div>
            <div>
              <div class="photo-swiper-trol-next">
                <img src="https://www.shanxiwenbow.com/upload/201912/23/201912231147134515.JPG">
              </div>
              <p class="nextp">下一篇</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper_trol" v-if="type==3">
      <div class="swiper-container">
        <div class="swiper-wrapper" v-for="(item, index) in secondListData" :key="index">
          <div class="swiper-slide"  v-for="(item, index1) in secondListData" :key="index1" :v-if="index1<4">
            <div class="swiper-slide-item" >
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
import { dataToJsonArticlePage } from '@/utils/api'
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
      type: "1", // 1 图文； 2 图片； 3 视频；
      UpId: '',
      Jumptype:'',
      articleData: [],
      secondListData:[],
      headerListData: [],
      page: 1,	//默认第一页
      perPage:8,//每页多少条
      pageNo:1,//当前页
      records: 0,//总数
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
      this.mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        autoplay:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      this.mySwiper1 = new Swiper ('.swiper-container1', {
        direction: 'horizontal', // 水平切换选项
        loop: true,
        autoplay:true,
      })
      this.mySwiper2 = new Swiper ('.swiper-container2', {
        direction: 'horizontal', // 水平切换选项
        slidesPerView: 5,
        loop: true,
        autoplay:true,
        on: {
          // click: function (swiper, event) {
          //   console.log('你点了Swiper', swiper, event);
          // }
        },
        navigation: {
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
        },
      })
    },1000)
  },
  methods: {
    init() {
      this.formArticleIdToChannelData()
      this.getarticleData()
      this.dataToJsonArticlePage()
    },
    async dataToJsonArticlePage () {
      var id = '90'
      const data = await dataToJsonArticlePage({
        categoryId: id,
        page: this.pageNo,
        limit: this.perPage
      })
      this.records = data.total
      this.pageNo = this.pageNo + 1
      this.secondListData = data.data
    },
    async getarticleData() {
      var id = this.$route.query.id
      const {data, channerData} = await articleData({ id });
      console.log('详情的数据', channerData)
      this.articleData = data
      this.UpId = data.UpId
      this.type = data[0].dataType
      this.Jumptype=data[0].channelTemplateAlias
    },
    async formArticleIdToChannelData () {
      var id = this.$route.query.id
      const data = await formArticleIdToChannelData({
        articleId: id,
      })
      
      this.headerListData = data.data[0].data
       console.log('--------------', this.headerListData)
    },
    lineTo(index) {
      console.log(index + 1)
      this.mySwiper1.slideTo(index+1, 500)
      this.mySwiper2.slideTo(index+1, 500)
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
span{
     font-family: SimSun;
}
.path{
  padding-left: 30px;
  margin: 20px auto 0;
  width: 1080px;
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
  margin-right: 40px;
}
.title {
  line-height: 39px;
  font-size: 28px;
  font-weight: bold;
  margin-left: 25px;
  margin-top: 37px;
}
.cons1 {
    height: auto;
    float: left;
    margin-top: 20px;
    font-size: 15px;
    line-height: 30px;
    text-indent: 2em;
    letter-spacing: 0.5px;
    font-family: SimSun;
    padding: 25px;
}
.video_box{
  padding: 0px 15px 15px 15px;
}
.video_box_meta {
  font-weight: bold;
}
.video_box_meta h1{
  font-weight: bold;
}
.video_box_meta p{
  font-weight: bold;
  font-size: 16px;
}
.video_box_meta div{
  font-weight: bold;
  font-size: 14px;
}
.setwh p{
  margin: 20px 0;
  font-weight: bold;
  font-size: 16px;
}
.time{
  height: 40px;
  margin-top: 55px;
  border-bottom: 3px solid #efefef;
}
.subTit {
  height: 40px;
  width: 661px;
  margin-left: 30px;
  margin-top: 25px;
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
  margin-top: 20px;
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
  .photo-swiper-trol-cons{
    position: relative;
    .swiper-container2{
      width: 685px;
      height: 86px;
      margin-left: 45px;
      overflow: hidden;
      .swiper-wrapper{
        width: 100%;
        height: 82px;
        .swiper-slide{
          width: 127px !important;
          height: 100%;
          padding: 0 5px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .swiper-button-prev, .swiper-button-next{
      top: 40px;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
      display: none;
    }
    .swiper-slide{
      -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
      filter: grayscale(100%);
    }
    .swiper-slide.swiper-slide-active{
      border: 2px solid #999  ;
      -webkit-filter: grayscale(0%); /* Chrome, Safari, Opera */
      filter: grayscale(0%);
    }
  }
}
</style>