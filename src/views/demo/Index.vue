<template>
  <div>
    <div class="swiper-container1" id="gallery">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, index) in list" :key="index">
					<img :src="item.url" alt="轮播图">
				</div>
			</div>
			<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
		</div>
		<div class="swiper-container2 swiper-container-thumbs" id="thumbs">
       <!-- style="transition-duration: 0ms;" -->
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item, index) in list" :key="index">
					<img :src="item.url" alt="轮播图">
				</div>
			</div>
			<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
		</div>
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
     list: [{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204310304.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204311867.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204312804.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204314367.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204310304.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204311867.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204312804.JPG'
     },{
       url: 'http://www.shanxiwenbow.com:3306//upload/201912/09/201912092204314367.JPG'
     }]
    };
  },
  watch: {
    // UpId() {
    //   this.init()
    // }
  },
  created() {
    _that = this
    // this.init()
    setTimeout(()=>{
      var thumbsSwiper = new Swiper('#thumbs', {
				spaceBetween: 10,
        slidesPerView: 5,
        observer: true,
        observeParents:true,
				watchSlidesVisibility: true, //防止不可点击
			})
			var gallerySwiper = new Swiper('#gallery', {
				direction: 'horizontal', // 水平切换选项
				spaceBetween: 10, //缩略图间距
				slidesPerView: 1,
				centeredSlides: true,
        initialSlide :2,
        loop: true,
        autoplay: true,
        observer: true,
        observeParents:true,
				thumbs: {
					swiper: thumbsSwiper,
				}
			})
    },1000)
  },
  methods: {
    
  },
};
</script>
<style lang="scss" scoped>
img{
  width: 100%;
}

#gallery {
  width: 1200px;
}

#thumbs {
  width: 1000px;
  margin-top: 50px;
}

#thumbs .swiper-slide {
  opacity: 0.3;
}

#thumbs .swiper-slide-thumb-active{
  opacity: 1;
}
</style>