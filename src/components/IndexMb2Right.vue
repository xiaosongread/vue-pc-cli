<template>
  <div class="mb2right">
    <div class="mb2right1">
      <div class="redb2">
        <router-link :to="{ path: 'photoList' , query: {id:'90',type:'photoList' } }">
          视觉三晋
        </router-link>
        <span id="redb2"> Video</span>
      </div>
      <div class="garyb2"></div>
    </div>
    <!--视频-->

    <div class="mb2right2">
      <div
        class="tssxpart1"
        v-if="item.id === 5418"
        v-for="(item, index) in sjsjData"
        :key="index"
      >
        <div class="tssxpart1img">
          <router-link :to="{ path: 'detail' , query: {id : item.id } }">
          <img :src="item.imgUrl" class="tssxpart1img1"
          />
        </router-link>
        </div>
        <div class="tssxpart1font">
          <router-link class="tssxpart1fonttitle" :to="{ path: 'detail', query: { id: item.id } }">{{
            item.title
          }}</router-link>
          <p>{{ item.zhaiyao }}</p>
          <div class="tssxpart1font1"></div>
        </div>
      </div>
      <div class="mb2right2_3">
        <div
          class="mb2left4_23"
          v-for="(item, index) in sjsjData"
          :key="index"
          v-if="index === 0 || index < 2"
        >
          <div class="main-left-4 ilist">
            <router-link :to="{ path: 'detail' , query: {id:item.id } }">
              <span class="mb1left4_2_1">{{ item.title }}</span>
              <img :src="item.imgUrl" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mb2right1">
      <div class="redb2">
        <router-link :to="{ path: 'photoList' , query: {id:'89',type:'photoList' }  }">
          非遗大展
        </router-link>
        <span id="redb2"> Video</span>
      </div>
      <div class="garyb2"></div>
    </div>
    <!--九宫格-->
    <div class="mb2right3">
      <div class="mb9-1">
        <router-link :to="{ path: 'photoList' , query: {id:'92',type:'photos'} }">
          <img src="../assets/SXWB/img/box1.jpg"
        /></router-link>
      </div>
      <div class="mb9">
        <router-link :to="{ path: 'photoList' , query: { id:'93',type:'photos'} }">
          <img src="../assets/SXWB/img/box2.jpg"
        /></router-link>
      </div>
      <div class="mb9">
        <router-link :to="{ path: 'photoList' , query: { id:'94',type:'photos'} }">
          <img src="../assets/SXWB/img/box3.jpg"
        /></router-link>
      </div>
      <div class="mb9-1">
        <router-link :to="{ path: 'photoList' , query: { id:'95',type:'photos'} }">
          <img src="../assets/SXWB/img/box4.jpg"
        /></router-link>
      </div>
      <div class="mb9">
        <router-link :to="{ path: 'photoList' , query: { id:'96',type:'photos'} }">
          <img src="../assets/SXWB/img/box5.jpg"
        /></router-link>
      </div>
      <div class="mb9">
        <router-link :to="{ path: 'photoList' , query: { id:'97',type:'photos'} }">
          <img src="../assets/SXWB/img/box6.jpg"
        /></router-link>
      </div>
      <div class="mb9-1">
      <router-link :to="{ path: 'photoList' , query: { id:'98',type:'photos'} }">
          <img src="../assets/SXWB/img/box7.jpg"
        /></router-link>
      </div>
      <div class="mb9">
        <router-link :to="{ path: 'photoList' , query: {id:'99',type:'photos' } }">
          <img src="../assets/SXWB/img/box8.jpg"
        /></router-link>
      </div>
      <div class="mb9">
        <router-link :to="{ path: 'photoList' , query: { id:'100',type:'photos'} }">
          <img src="../assets/SXWB/img/box9.jpg"
        /></router-link>
      </div>
    </div>
    <div class="mb2right4">
      <form
        id="loginform"
        name="loginform"
        url="/tools/submit_ajax.ashx?action=user_login&amp;site=SXWB"
      >
        <div class="form1">
          <center>文化产业信息收录平台</center>
        </div>
        <div class="form2">
          <div class="form2_1"></div>
          <div class="form2_2">
            <input
              type="text"
              id="txtUserName"
              name="txtUserName"
              placeholder="用户名"
            />
          </div>
        </div>
        <div class="form3">
          <div class="form2_1"></div>
          <div class="form2_2">
            <input
              type="password"
              id="txtPassword"
              name="password"
              placeholder="密码"
            />
          </div>
        </div>
        <div class="form4">
          <div class="form4_1">
            <input type="checkbox" id="chkRemember" name="chkRemember" />
          </div>
          <div class="form4_2">记住密码</div>
        </div>
        <div class="form5">
          <div class="form5_1">
            <button type="checkbox" id="btnSubmit" name="chkRemember">
              登 录
            </button>
          </div>
          <div class="form5_2">
            <a href="register.html">注册账号</a><br />
            <a href="/repassword.html">忘记密码</a>
          </div>
        </div>
        <input
          id="turl"
          name="turl"
          type="hidden"
          value="/user/center/index.html"
        />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexMb2Right",
  props: {
    sjsjData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {},
};
</script>
<style>
.mb2right {
  height: 1245px;
  width: 350px;
  float: left;
  margin-left: 34px;
}
.mb2right1 {
  margin-top: 5px;
  height: 45px;
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
.mb2right2 {
  margin-top: 30px;
  height: 388px;
  width: 350px;
  float: left;
  margin-bottom: 20px;
}

.mb2right2_1 {
  height: 210px;
  width: 350px;
  float: left;
}
.tssxpart1 {
  margin-top: 5px;
  height: 285px;
  width: 350px;
  float: left;
  margin-bottom: 20px;
}
.tssxpart2 {
  margin-left: 15px;
  margin-right: 15px;
  height: 450px;
  width: 350px;
  float: left;
}
.tssxpart3 {
  margin-left: 15px;
  float: left;
}
.tssxpart1img {
  height: 210px;
  width: 350px;
  float: left;
}
.tssxpart1img1 {
  height: 230px;
}
.tssxpart1font {
  margin-top: 0px;
  height: 19px;
  width: 350px;
  float: left;
  line-height: 15px;
  text-align: center;
  color: #000;
}
.tssxpart1font p {
  padding-top: 5px;
  margin-top: 5px;
  font-size: 14px;
  height: 50px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-indent: 2em;
  color: #7e8186;
}
.tssxpart1fonttitle {
  font-weight: bold;
}
.tssxpart1font a:link {
  color: #fff;
}
.tssxpart1font a:visited {
  color: #fff;
}
.tssxpart1font1 {
  margin-top: 18px;
  height: 15px;
  width: 333px;
  float: left;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
}
.tssxpart1font a:link {
  color: #fff;
}
.tssxpart1font2 {
  margin-top: 8px;
  height: 70px;
  width: 333px;
  float: left;
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  line-height: 24px;
}
.tssxpart1font3 {
  margin-top: 15px;
  height: 15px;
  width: 333px;
  float: left;
  font-size: 13px;
  color: #000000;
  line-height: 15px;
}
.mb1left2_11 {
  height: 185px;
  width: 350px;
  float: left;
}
.playbutton {
  height: 95px;
  width: 94px;
  float: left;
  margin-left: 120px;
  margin-top: 50px;
  opacity: 0.6;
}
.mb1left2_12 {
  padding-left: 4px;
  line-height: 28px;
  height: 25px;
  width: 346px;
  float: left;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
}
.mb2right2_2 {
  margin-top: 15px;
  height: 45px;
  width: 350px;
  float: left;
  font-size: 15px;
}
.mb2right2_3 {
  margin-top: 8px;
  height: 105px;
  width: 350px;
  float: left;
}
.mb2right2_31 {
  width: 170px;
  height: 105px;
  float: left;
  /* // background:url(../img/xypy.jpg); */
}
.mb2right2_32 {
  width: 170px;
  height: 105px;
  float: right;
  /* background:url(../img/tgqq.jpg); */
}
.mb2right2_311 {
  width: 170px;
  height: 85px;
  float: left;
}
.playbutton2 {
  height: 48px;
  width: 48px;
  float: left;
  margin-left: 61px;
  margin-top: 30px;
  opacity: 0.6;
}
.mb2right2_312 {
  padding-left: 5px;
  width: 165px;
  height: 20px;
  float: left;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
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
  margin-left: 6px;
  margin-bottom: 6px;
}

.mb2right4 {
  margin-top: 30px;
  margin-left: 5px;
  height: 290px;
  width: 340px;
  border: 2px solid #d9d9d9;
  float: left;
  border-radius: 5px;
}
.form1 {
  margin-top: 25px;
  height: 30px;
  width: 330px;
  font-size: 23px;
  font-weight: bold;
  color: #006ac0;
  float: left;
}
.form2 {
  margin-top: 23px;
  height: 38px;
  width: 270px;
  border: 1px solid #006ac0;
  border-radius: 5px;
  margin-left: 38px;
  float: left;
}
.form2_1 {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  height: 16px;
  width: 15px;
  float: left;
  background: url("../assets/SXWB/img/username.jpg");
  background-repeat: no-repeat;
}
.form2_2 {
  height: 38px;
  width: 230px;
  float: left;
}
.form2_2 input {
  padding-top: 0px;
  padding-left: 0px;
  height: 36px;
  width: 233px;
  border: 0px;
  font-size: 14px;
}
.form3 {
  margin-top: 15px;
  height: 38px;
  width: 270px;
  border: 1px solid #006ac0;
  border-radius: 5px;
  margin-left: 38px;
  float: left;
}
.form3_1 {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  height: 16px;
  width: 15px;
  float: left;
  background: url("../assets/SXWB/img/username.jpg");
  background-repeat: no-repeat;
}
.form3_2 {
  height: 38px;
  width: 230px;
  float: left;
}
.form3_2 input {
  padding-top: 0px;
  padding-left: 0px;
  height: 36px;
  width: 233px;
  border: 0px;
  font-size: 14px;
}
.form4 {
  margin-top: 10px;
  height: 35px;
  width: 270px;
  border-radius: 5px;
  margin-left: 38px;
  float: left;
  line-height: 10px;
}
.form4 input {
  height: 20px;
  width: 20px;
  margin-top: 6px;
}
.form4_1 {
  height: 33px;
  width: 33px;
  float: left;
}
.form4_1 input {
  height: 20px;
  width: 20px;
  margin-top: 6px;
}
.form4_2 {
  color: #6b5e55;
  height: 23px;
  width: 200px;
  float: left;
  padding-top: 10px;
  font-size: 14px;
}
.form5 {
  margin-top: 10px;
  height: 38px;
  width: 270px;
  border-radius: 5px;
  margin-left: 38px;
  float: left;
}
.form5_1 {
  height: 38px;
  width: 149px;
  float: left;
}
.form5_1 input {
  height: 35px;
  width: 150px;
}
.form5_2 {
  font-size: 13px;
  height: 35px;
  width: 65px;
  float: right;
  padding-top: 10px;
  padding-top: 0px;
  line-height: 17px;
}
.form5_2 a:link {
  color: #006ac0;
  text-decoration: none;
}
.mb2right2_3 {
  margin-top: 8px;
  height: 105px;
  width: 350px;
  float: left;
}
.mb2left4_23 {
  height: 125px;
  width: 175px;
  float: left;
}
.main-left-4 {
  position: relative;
  float: left;
  margin: -15px 0px 0 0;
  width: 170px;
  height: 100px;
  overflow: hidden;
}
.ilist a {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid #f7f7f7;
  cursor: pointer;
  _position: relative;
  overflow: hidden;
}
.ilist .abs-bg {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  height: 125px;
  background: url("../assets/SXWB/img/mbimg31.jpg") 0 bottom repeat-x;
  width: 100%;
  _height: 50px;
}
.ilist .mb1left4_2_1 {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  display: block;
  padding: 0 0px;
  line-height: 20px;
  height: 20px;
  width: 170px;
  float: left;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
}
#btnSubmit {
  height: 35px;
  width: 150px;
  border-radius: 5px;
  background: #006ac0;
  font-size: 16px;
  color: #ffffff;
}
</style>
