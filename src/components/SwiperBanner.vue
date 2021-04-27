<template>
<div class="wrap">
  <div class="swiper-container">
    <div class="swiper-wrapper" v-for="(item, index) in ListsData" :key="index">
        <div class="swiper-slide">
          <div class="swiper-slide">
            <img src="../assets/SXWB/img/mb.jpg">
            <div class="swiper-tit">{{item.title}}</div>
          </div>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</div>
</template>
<script>
import Swiper from "swiper"
import { pictureCarousel } from '@/utils/api'
import "../../node_modules/swiper/css/swiper.min.css";
let _that
export default {
  name: 'SwiperBanner',
  data () {
    return {
      ListsData: [],
    }
  },
  components: { },
  created () {
     _that = this
    this.pictureCarousel(),
    setTimeout(()=>{
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed:2000,
        observer:true,
        observeParents:true,
        autoplayDisableOnInteraction : false,
        autoplay:1500,
        effect:'fade',
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    },1000)
  },
  methods: {
async pictureCarousel () {
      const data = await pictureCarousel({id:1})
      _that.ListsData=data,
      console.log('接口数据59', data)
    },
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.swiper-container{
  width: 1080px;
  height: 500px;
  position: relative;
  overflow: hidden;
}
.wrap{
  position: relative;
  margin-top: 17px;
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
.swiper-slide{
  /* width: 690px;
  height: 380px; */
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}
.swiper-slide .swiper-tit{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  display: block;
  padding: 0 5px;
  line-height: 40px;
  height: 38px;
  float: left;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  background: rgba(0,0,0,0.6);
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
  width: auto !important;
  right: 10px !important;
  left: inherit !important;
}
.swiper-pagination{
  /* width: 690px;
  height: 40px; */
  position: absolute;
  bottom: 16px;
  right: 5px;
  z-index: 10;
  display: flex;
  text-align: right;
}
.swiper-pagination-bullet{
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
.swiper-pagination-bullet-active{
  background: #f90;
  border-color: #f90;
  cursor: default;
}
</style>
