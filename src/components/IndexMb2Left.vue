<template>
  <div class="mb2left">
    <div class="mb2left1">
      <div class="redb">
        <router-link :to="{ path: 'photos', query: {} }">
          <img src="../assets/SXWB/img/s2.jpg"/>
        </router-link>
      </div>
      <div class="garyb"></div>
    </div>
    <div class="mb2left2">
      <div id="ifocus">
        <div
          id="ifocus_pic"
          v-if="item.id === 87"
          v-for="(item, index) in listMLSXData"
          :key="index"
        >
          <div id="ifocus_piclist">
            <ul>
              <li
                v-for="(item1, index1) in item.dataList"
                :key="index1"
                v-if="index1 < 5 && bannerIndex === index1"
              >
                <router-link :to="{ path: 'detail', query: { id: item1.id } }"
                  ><img :src="item1.imgUrl" alt=""
                /></router-link>
              </li>
            </ul>
          </div>
          <div id="ifocus_opdiv"></div>
          <div id="ifocus_opdiv1"></div>
          <div id="ifocus_tx">
            <ul>
              <li
                class=""
                v-for="(item1, index1) in item.dataList"
                :key="index1"
                v-if="index1 < 5 && bannerIndex === index1"
              >
                {{ item1.title }}
              </li>
            </ul>
          </div>
        </div>
        <div id="ifocus_btn">
          <ul
            v-if="item.id === 87"
            v-for="(item, index) in listMLSXData"
            :key="index"
          >
            <div
              v-for="(item1, index1) in item.dataList"
              :key="index1"
              v-if="index1 < 5"
            >
              <li
                :class="[index1 === bannerIndex ? 'current' : 'normal']"
                @mouseover="mouseOver(index1)"
              >
                <img :src="item1.imgUrl" alt="" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!--特色文化-->
    <!--遍游山西-->
    <div
      class="mb2left3"
      v-for="(item, index) in listMLSXData"
      :key="index"
      v-if="item.id === 75 || item.id === 76"
    >
      <div class="mb2left3img1">
        <router-link :to="{ path: 'photoList', query: {id:item.id,type:'photoList'} }">
          <div class="mb2left3img_1">
            <img src="../assets/SXWB/img/tswh.jpg" v-if="item.id === 75" />
            <img src="../assets/SXWB/img/bysj.jpg" v-if="item.id === 76" />
          </div>
        </router-link>
      </div>
      <div class="mb2left3text">
        <div
          v-for="(item1, index1) in item.topData"
          :key="index1"
          v-if="index1 === 0"
        >
          <div class="mb1right2">
            <router-link :to="{ path: 'detail', query: { id: item1.id } }">{{
              item1.title
            }}</router-link>
          </div>
          <div class="mb1right3-1">
            <p>{{ item1.zhaiyao }}</p>
          </div>
        </div>

        <span id="mblr3">
          <p></p>
          <ul>
            <li
              v-for="(item2, index2) in item.dataList"
              :key="index2"
              v-if="index2 === 0 || index2 < 2"
            >
              <img src="../assets/SXWB/img/dian.jpg" />
              <router-link :to="{ path: 'detail', query: { id: item2.id } }">{{
                item2.title
              }}</router-link>
            </li>
          </ul>
          <p></p>
        </span>
      </div>
    </div>

    <!--文化会馆开始-->
    <div class="mb2left1_1">
      <div class="redb">
        <router-link :to="{ path: 'hall', query: {} }"
          ><img src="../assets/SXWB/img/s3.jpg"
        /></router-link>
      </div>
      <div class="garyb"></div>
    </div>
    <div class="mb2left4">
      <div class="mb2left4_1">
        <ul id="test1_li_now_">
			<div v-for="(item, index) in listWHHGData">
          <router-link :to="{ path: 'secondIndex', query: {id:item.id,type:'article'} }" >
            <li class="" @mouseover="mouseOverWhhg(index)">{{ item.title }}</li>
          </router-link>
		  </div>
        </ul>
      </div>
      <div
        class="tablist"
        v-for="(item, index) in listWHHGData"
        :key="index"
        v-if="index === whhgIndex"
      >
        <div
          class="tablistItem"
          v-for="(item1, index1) in item.dataList"
          :key="index1"
          v-if="index1 < 4"
        >
          <div class="tablistItemTit l2danghan">
            <router-link :to="{ path: 'detail', query: { id: item1.id } }">{{
              item1.title
            }}</router-link>
          </div>
          <div class="tablistItemdes l2duohan">{{ item1.zhaiyao }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var _that;
export default {
  name: "IndexMb2Left",
  props: {
    listMLSXData: {
      type: Array,
      default: [],
    },
    listWHHGData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      mlsxBanner: [],
      bannerIndex: 0,
      whhgIndex: 0,
      tswh: [],
      bysj: [],
    };
  },
  components: {},

  created() {
    _that = this;
    console.log("banner1", this.listMLSXData);
    this.listMLSXData.forEach((item, index) => {
      switch (item.id) {
        case 87:
          _that.mlsxBanner = item.content;
          break;
        case 75:
          _that.tswh = item.content;
          break;
        case 76:
          _that.bysj = item.content;
          break;
      }
    });
    console.log("banner", _that.mlsxBanner);
  },
  methods: {
    mouseOver(index) {
      this.bannerIndex = index;
    },
    mouseOverWhhg(index) {
      this.whhgIndex = index;
    },
  },
};
</script>
<style>
.mb2left {
  height: 1245px;
  width: 691px;
  float: left;
  margin-top: 4px;
}

.mb2left1 {
  height: 50px;
  width: 691px;
  float: left;
  margin-bottom: 40px;
}

.mb2left1_1 {
  margin-top: 60px;
  height: 50px;
  width: 691px;
  float: left;
  margin-bottom: 0px;
}

.mb2left2 {
  margin-top: 5px;
  height: 340px;
  width: 691px;
  float: left;
  margin-left: 20px;
}

#ifocus {
  margin: -20px 0 0 -30px;
}

#ifocus_pic {
  display: inline;
  position: relative;
  float: left;
  width: 570px;
  height: 330px;
  overflow: hidden;
  margin: 10px 0 0 10px;
  padding: 0;
}

#ifocus_piclist {
  position: absolute;
}

#ifocus_piclist {
  position: absolute;
}

#ifocus_piclist li {
  width: 570px;
  height: 380px;
  overflow: hidden;
}

#ifocus_piclist img {
  width: 570px;
  height: 380px;
}

#ifocus_btn {
  display: inline;
  float: right;
  width: 130px;
  margin: 10px 0px 0 0;
}

#ifocus_btn li {
  width: 104px;
  height: 55px;
  cursor: pointer;
  opacity: 0.5;
  -moz-opacity: 0.5;
  filter: alpha(opacity=50);
  margin-bottom: 12px;
}

#ifocus_btn img {
  width: 90px;
  height: 57px;
  margin: 4px 0 0 10px;
}

#ifocus_btn .current {
  /* background: url('images/ifocus_btn_bg1.gif') no-repeat; */
  opacity: 1;
  -moz-opacity: 1;
  filter: alpha(opacity=100);
}

#ifocus_opdiv {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35px;
  background: #000;
  opacity: 0.5;
  -moz-opacity: 0.5;
  filter: alpha(opacity=50);
}

#ifocus_tx {
  position: absolute;
  left: 8px;
  bottom: 8px;
  color: #fff;
}
#ifocus_tx li {
  font-weight: bold;
}
#ifocus_tx .normal {
  display: none;
}

#ifocus_tx1 {
  position: absolute;
  left: 168px;
  bottom: 8px;
  color: #fff;
}

#ifocus_tx .normal {
  display: none;
}

.pikachoose {
  width: 683px;
  height: 340px;
}

/* Style the thumbnails */

.pika-thumbs li {
  width: 75px;
  height: 55px;
  overflow: hidden;
  float: left;
  list-style-type: none;
  background: #fafafa;
  border: 1px solid #e5e5e5;
  cursor: pointer;
}

/* The stage is the wrapper. The image fills 100% the height of the stage */
.pika-stage {
  position: relative;
  background: #fafafa;
  height: 340px;
  width: 550px;
}

/*阴影*/
.pika-stage .caption {
  position: absolute;
  background: #000;
  background: rgba(173, 15, 6, 0.9);
  font-size: 20px;
  color: #fafafa;
  padding: 10px;
  bottom: 40px;
  left: 0px;
  width: 160px;
}

.pika-stage .caption p {
  padding: 0;
  margin: 0;
  line-height: 12px;
}

/* The previous and next textual buttons */
.pika-textnav {
  overflow: hidden;
  margin: 10px 0 0 0;
  bottom: 10px;
  position: absolute;
}

.pika-textnav a {
  font-size: 12px;
  text-decoration: none;
  color: #333;
  padding: 4px;
}

.pika-textnav a.previous {
  float: left;
  width: auto;
  display: block;
}

.pika-textnav a.next {
  float: right;
  width: auto;
  display: block;
}

/*for the tool tips*/
.pika-tooltip {
  font-size: 12px;
  position: absolute;
  color: white;
  padding: 3px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 3px solid black;
}

.pika-counter {
  position: absolute;
  bottom: 45px;
  left: 15px;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  font-size: 11px;
  padding: 3px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

/* If using user thumbnails there's a pause well the new large image loads. This is the loader for that */
.pika-loader {
  /* background: url(loading.gif) 3px 3px no-repeat #000; */
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  width: 60px;
  font-size: 11px;
  padding: 5px 3px;
  text-align: right;
  position: absolute;
  top: 15px;
  right: 15px;
}

/*if you just want to adjust the size of the stage and the thumbnails, you can do so by editing the following lines: */
.pika-thumbs li {
  width: 75px;
  height: 55px;
}

.pikachoose {
  width: 683px;
  position: relative;
}

#pikame {
  width: 100px;
}

.pika-thumbs {
  margin: 0px 0 0 17px;
  width: 250px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.pika-thumbs li {
  margin: 0px 0px;
}

/* jCarousel Styles */
/*if you're not using the carousel you can delete everything below this */
.jcarousel-skin-pika {
  position: absolute;
  top: 10px;
  right: 50px;
}

.jcarousel-skin-pika .jcarousel-container-vertical {
  width: 75px;
  height: 330px;
  overflow: hidden;
}

.jcarousel-skin-pika .jcarousel-clip-vertical {
  width: 75px;
  height: 330px;
}

.jcarousel-skin-pika .jcarousel-item-vertical {
  margin-top: 5px;
}

.mb2left3 {
  margin-top: 15px;
  height: 165px;
  width: 691px;
  float: left;
}

.mb2left3-1 {
  margin-top: 30px;
  height: 165px;
  width: 691px;
  float: left;
}

.mb2left3img {
  width: 240px;
  height: 165px;
  float: left;
  color: #ffffff;
  font-weight: bold;
  /* background: url(../assets/SXWB/img/tswh.jpg) */
}

.mb2left3img1 {
  width: 240px;
  height: 165px;
  float: left;
  color: #ffffff;
  font-weight: bold;
  /* background: url(../assets/SXWB/img/bysj.jpg) */
}

.mb2left3img_1 {
  width: 240px;
  height: 140px;
}

.mb2left3img_2 {
  padding-top: 1px;
  width: 240px;
  height: 24px;
  float: left;
  background: rgba(0, 0, 0, 0.5);
}

.mb2left3text {
  margin-left: 30px;
  width: 411px;
  float: left;
  height: 165px;
}

#mblr1 {
  width: 411px;
  height: 30px;
  margin-top: 12px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
  float: left;
}

#mblr2 {
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 15px;
  color: #808183;
  float: left;
  line-height: 25px;
}

#mblr3 {
  margin-top: 5px;
  line-height: 25px;
  font-size: 14px;
  float: left;
  font-weight: bold;
}

#mblr3 ul {
  padding-left: 3px;
}

.mb2left4 {
  margin-top: 35px;
  height: 235px;
  width: 691px;
  float: left;
}

.mb2left4_1 {
  height: 45px;
  width: 691px;
}

.mb2left4_1 ul {
  margin: 0;
  padding: 0;
  color: #ffffff;
}

.mb2left4_1 li {
  padding: 2px 8px 2px 8px;
  float: left;
  text-align: center;

  font-size: 19px;
  font-weight: bold;
  margin-right: 14px;
  background: #6e0a0a;
  color: #ffffff;
}

.mb2left4_1 li.now {
  height: 30px;
  width: 105px;
  padding-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  background: #6e0a0a;
  color: #ffffff;
}

/*网上文博标签*/
mb2left4_11 li {
  height: 30px;
  width: 110px;
  padding-top: 5px;
  float: left;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  background: #6e0a0a;
  color: #ffffff;
}

.mb2left4_11 li.now {
  height: 30px;
  width: 110px;
  padding-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  background: #6e0a0a;
  color: #ffffff;
}

/*网上文博标签*/
.tablist {
  padding: 0px;
  font-size: 14px;
  line-height: 24px;
  border-top: 0;
  overflow: hidden;
}
.tablistItem {
  width: 300px;
  height: 112px;
  float: left;
}
.tablistItem:nth-of-type(2n + 1) {
  margin-right: 40px;
}
.tablistItemTit {
  margin-top: 23px;
  height: 27px;
  font-size: 17px;
  font-weight: bold;
  padding-top: 3px;
}
.tablistItemdes {
  font-size: 15px;
  color: #707070;
  line-height: 31px;
}

.block {
  display: block;
}

.backgroundred_1 {
  height: 30px;
  width: 90px;
  padding-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  background: #6e0a0a;
  color: #ffffff;
}

.backgroundred {
  height: 30px;
  width: 90px;
  padding-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}

.backgroundred a:hover {
  color: #ffffff;
  text-decoration: none;
}

.backgroundred_1_2 {
  height: 30px;
  width: 130px;
  padding-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  background: #6e0a0a;
  color: #ffffff;
}

.backgroundred_2 {
  height: 30px;
  width: 130px;
  padding-top: 5px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}

.backgroundred_2 a:hover {
  color: #ffffff;
  text-decoration: none;
}

.redj {
  height: 5px;
  width: 645px;
  float: left;
  background: url(../assets/SXWB/img/mb.jpg);
  background-repeat: no-repeat;
  margin-left: 37px;
}

.redj_1 {
  height: 5px;
  width: 430px;
  float: left;
  background: url(../assets/SXWB/img/mb.jpg);
  background-repeat: no-repeat;
  margin-left: 147px;
}

.redj_2 {
  height: 5px;
  width: 430px;
  float: left;
  background: url(../assets/SXWB/img/mb.jpg);
  background-repeat: no-repeat;
  margin-left: 210px;
}

.mb2left4_2 {
  margin-top: 5px;
  height: 185px;
  width: 691px;
  float: left;
}

.mb2left4_21 {
  height: 185px;
  width: 300px;
  float: left;
}

.mb2left4_22 {
  margin-left: 40px;
  height: 185px;
  width: 300px;
  float: left;
}

.mb2left4_23 {
  height: 125px;
  width: 175px;
  float: left;
}

.mb2le4_211 {
  margin-top: 23px;
  height: 27px;
  width: 330px;
  float: left;
  font-size: 17px;
  font-weight: bold;
  padding-top: 3px;
}

.mb2le4_211 ul {
  padding-left: 15px;
}

.mb2le4_212 {
  margin-top: 0px;
  padding-left: 15px;
  height: 50px;
  width: 285px;
  float: left;
  font-size: 15px;
  color: #707070;
  line-height: 31px;
}
.l2danghan {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.l2duohan {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /*显示几行*/
  overflow: hidden;
}
</style>
