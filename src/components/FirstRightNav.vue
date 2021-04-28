<template>
  <div>
    <div class="smb1right1">
      <a href="/article/62.html">
        <div class="redb2">政策法规<span id="redb2"> Law</span></div>
      </a>
      <div class="garyb2"></div>
    </div>
    <div class="mb1right4">
      <ul
        v-for="(item, index) in zcfgData"
        :key="index"
        v-if="index === 0 || index < 5"
      >
        <li>
          <p
            style="
              width: 335px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
          >
            <img src="../assets/SXWB//img/dian.jpg" />&nbsp;<a
              title=""
              href="/article/show-5678.html"
              target="_blank"
              >{{ item.title }}</a
            >
          </p>
        </li>
      </ul>
    </div>
    <div class="smb1right1">
      <a href="/photos/89.html " target="_blank"> </a>
      <div class="redb2">
        <a href="/photos/89.html " target="_blank">
          非遗大展<span id="redb2"> Video</span></a
        >
      </div>
      <div class="garyb2"></div>
    </div>
    <!--九宫格-->
    <div class="mb2right3">
      <div class="mb9-1">
        <a href="/photos/92.html" target="_blank">
          <img src="../assets/SXWB//img/box1.jpg"
        /></a>
      </div>
      <div class="mb9">
        <a href="/photos/93.html" target="_blank">
          <img src="../assets/SXWB//img/box2.jpg"
        /></a>
      </div>
      <div class="mb9">
        <a href="/photos/94.html" target="_blank">
          <img src="../assets/SXWB//img/box3.jpg"
        /></a>
      </div>
      <div class="mb9-1">
        <a href="/photos/95.html" target="_blank">
          <img src="../assets/SXWB//img/box4.jpg"
        /></a>
      </div>
      <div class="mb9">
        <a href="/photos/96.html" target="_blank">
          <img src="../assets/SXWB//img/box5.jpg"
        /></a>
      </div>
      <div class="mb9">
        <a href="/photos/97.html" target="_blank">
          <img src="../assets/SXWB//img/box6.jpg"
        /></a>
      </div>
      <div class="mb9-1">
        <a href="/photos/98.html" target="_blank">
          <img src="../assets/SXWB//img/box7.jpg"
        /></a>
      </div>
      <div class="mb9">
        <a href="/photos/99.html" target="_blank">
          <img src="../assets/SXWB//img/box8.jpg"
        /></a>
      </div>
      <div class="mb9">
        <a href="/photos/100.html" target="_blank">
          <img src="../assets/SXWB//img/box9.jpg"
        /></a>
      </div>
    </div>
    <div class="slistad3">
      <img src="../assets/SXWB//img/listad3.jpg" />
    </div>
    <div class="smb3right1">
      <div class="mb3right11">
        <center>文化产业项目库</center>
      </div>
      <div class="mb3right12">
        <center>
          <a href="#"> <img src="../assets/SXWB//img/xmsb.jpg" /></a>&nbsp;<a
            href=""
            ><img src="../assets/SXWB//img/xmcx.jpg"
          /></a>
        </center>
      </div>
    </div>
    <div class="secondright0">
      <div class="redb3">文化热评<span id="redb3">Comment</span></div>
      <div class="garyb3"></div>
      <div
        v-for="(item, index) in zcfgData"
        :key="index"
        v-if="index === 0 || index < 3"
      >
        <div class="sbox2_11">
          <ul>
            <li>
              <span id="sbox2_11font">热评：</span
              ><a
                title="“平遥之夜”点亮首届平遥国际电影展"
                href="/article/show-2397.html"
                target="_blank"
                >{{ item.title }}</a
              >
            </li>
          </ul>
        </div>
        <div class="sbox2_12">{{ item.zhaiyao }}</div>
      </div>
    </div>
    <div class="smb3right4">
      <div class="mb3r4_1">
        <div class="mb3r4_11"></div>
        <div class="mb3r4_12">
          <img src="../assets/SXWB//img/ewm1.jpg" />
        </div>
        <div class="mb3r4_13">
          <center>【山西文博会官方订阅号】</center>
          <br />
          <center>
            <span id="mbr4_f"></span>
          </center>
        </div>
      </div>
      <div class="mb3r4_2">
        <div class="mb3r4_21"></div>
        <div class="mb3r4_12">
          <img src="../assets/SXWB//img/ewm2.jpg" />
        </div>
        <div class="mb3r4_13">
          <center>【山西文博会官方服务号】</center>
          <br />
          <center>
            <span id="mbr4_f"></span>
          </center>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dataToJsonArticle } from "@/utils/api";
let _that;
export default {
  name: "FirstRightNav",
  data() {
    return {
      zcfgData: [],
      whrpData: [],
    };
  },
  components: {},
  created() {
    this.dataToJsonArticle(), this.whrpdataToJsonArticle(), (_that = this);
  },
  methods: {
    async dataToJsonArticle() {
      const data = await dataToJsonArticle({ categoryId: 62 });
      (_that.zcfgData = data), console.log("接口数据59", data);
    },
    async whrpdataToJsonArticle() {
      const data = await dataToJsonArticle({ categoryId: 82 });
      (_that.whrpData = data), console.log("接口数据59", data);
    },
  },
};
</script>
<style scoped>
.smb1right1 {
  margin-top: 50px;
  height: 47px;
  width: 350px;
  float: left;
}
.redb2 {
  height: 21px;
  width: 155px;
  border: 3px solid #6e0a0a;
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
.redb2 a:link {
  color: rgb(110, 10, 12);
}
.redb2 a:visited {
  color: rgb(110, 10, 12);
}
#redb2 {
  color: #7e8285;
  font-size: 15px;
}
.redb3 {
  height: 21px;
  width: 185px;
  border: 3px solid #6e0a0a;
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
#redb3 {
  margin-left: 5px;
  color: #7e8285;
  font-size: 15px;
}
.garyb2 {
  margin-top: 20px;
  margin-left: 3px;
  height: 21px;
  width: 177px;
  border: 3px solid #7e8285;
  float: left;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.garyb3 {
  margin-top: 20px;
  margin-left: 3px;
  height: 21px;
  width: 147px;
  border: 3px solid #7e8285;
  float: left;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.mb1right4 {
  margin-top: 22px;
  height: 152px;
  width: 350px;
  float: left;
  line-height: 32px;
  font-size: 15px;
}
.mb1right4 ul {
  list-style: none;
  float: left;
  padding-left: 0px;
}
.smb2right1 {
  margin-top: 40px;
  height: 45px;
  width: 350px;
  float: left;
}
.mb2right3 {
  margin-top: 25px;
  height: 350px;
  width: 350px;
  float: left;
}
.mb9 {
  height: 108px;
  width: 108px;
  float: left;
  margin-left: 6px;
  margin-bottom: 6px;
}
.mb9-1 {
  height: 108px;
  width: 108px;
  float: left;
  margin-left: 0px;
  margin-bottom: 6px;
}
.slistad3 {
  margin-top: 40px;
  margin-bottom: 10px;
  width: 350px;
  height: 275px;
  float: left;
}
.smb3right1 {
  margin-top: 45px;
  height: 150px;
  width: 350px;
  border: 2px solid #d9d9d9;
  float: left;
  border-radius: 5px;
}
.mb3right11 {
  margin-top: 20px;
  height: 40px;
  width: 350px;
  float: left;
  color: #b28147;
  font-size: 25px;
  font-weight: bold;
}
.mb3right12 {
  margin-top: 20px;
  height: 38px;
  width: 350px;
  float: left;
}
.secondright0 {
  margin-top: 30px;
  height: 420px;
  width: 350px;
  float: left;
}
.smb3right4 {
  margin-top: 125px;
  height: 230px;
  width: 350px;
  float: left;
}
.sbox2_11 {
  margin-top: 20px;
  font-size: 18px;
  height: auto;
  width: 350px;
  float: left;
  font-weight: bold;
  padding-top: 3px;
}
.sbox2_11_1 {
  font-size: 20px;
  height: 27px;
  width: 350px;
  float: left;
  font-weight: bold;
  padding-top: 3px;
}
.space3 {
  height: 30px;
  width: 350px;
  float: left;
}
.sbox2_11 ul {
  padding-left: 15px;
}
.sbox2_11_1 ul {
  padding-left: 15px;
}
#sbox2_11font {
  color: #71090a;
}
.sbox2_12 {
  margin-left: 15px;
  margin-top: 10px;
  height: auto;
  width: 330px;
  float: left;
  font-size: 15px;
  color: #707070;
  line-height: 25px;
  text-indent: 2em;
}
.sbox2_12_1 {
  margin-left: 15px;
  margin-top: 10px;
  height: 40px;
  width: 335px;
  float: left;
  font-size: 15px;
  color: #707070;
  line-height: 22px;
  margin-bottom: 5px;
}
.mb3r4_1 {
  margin-left: 10px;
  height: 230px;
  width: 153px;
  float: left;
}
.mb3r4_11 {
  margin-left: 4px;
  height: 19px;
  width: 145px;
  float: left;
  background: url("~@/assets/SXWB/img/sxwbh.jpg");
}
.mb3r4_12 {
  margin-top: 18px;
  height: 135px;
  width: 148px;
  float: left;
  margin-left: 8px;
}
.mb3r4_13 {
  margin-top: 20px;
  height: 35px;
  width: 153px;
  float: left;
  font-size: 12px;
  line-height: 10px;
  padding-left: 0px;
  color: #6e0a0a;
}
#mbr4_f {
  font-size: 9px;
  color: black;
}
.mb3r4_2 {
  margin-left: 20px;
  height: 175px;
  width: 158px;
  float: left;
}
.mb3r4_21 {
  margin-left: 4px;
  height: 19px;
  width: 145px;
  float: left;
  background: url("~@/assets/SXWB/img/zswb.jpg");
}
</style>