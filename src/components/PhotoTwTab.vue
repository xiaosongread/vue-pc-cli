<template>
  <div>
    <div class="mlsxpart5" v-if="type === 'one'">
      <div class="mlsxpart5-2">
        <ul
          id="test1"
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          "
        >
          <li
            v-for="(item, index) in listData"
            :key="index"
            @mouseover="mouseOver(index)"
          >
            <div class="mlsxpart5-2-1">
              <a href="/photoss/92.html" target="_blank">
                <img v-if="item.id === 92" src="../assets/SXWB/img/box1.jpg" />
                <img v-if="item.id === 93" src="../assets/SXWB/img/box2.jpg" />
                <img v-if="item.id === 94" src="../assets/SXWB/img/box3.jpg" />
                <img v-if="item.id === 95" src="../assets/SXWB/img/box4.jpg" />
                <img v-if="item.id === 96" src="../assets/SXWB/img/box5.jpg" />
                <img v-if="item.id === 97" src="../assets/SXWB/img/box6.jpg" />
                <img v-if="item.id === 98" src="../assets/SXWB/img/box7.jpg" />
                <img v-if="item.id === 99" src="../assets/SXWB/img/box8.jpg" />
                <img v-if="item.id === 100" src="../assets/SXWB/img/box9.jpg" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 标题2 -->
    <div class="mb2left40" v-if="type === 'two'">
      <div class="mb2left40_1">
        <ul id="test2_li_now_">
          <a
            href="/photoss/102.html"
            target="_blank"
            v-for="(item, index) in listData"
            :key="index"
            @mouseover="mouseOver(index)"
            ><li class="now">{{ item.title }}</li></a
          >
        </ul>
      </div>
    </div>
    <!-- 内容 -->
    <div
      class=""
      v-for="(item, index) in listData"
      :key="index"
      v-if="index === mouseIndex"
    >
      <PhotoTw :listData="item.content"></PhotoTw>
    </div>
  </div>
</template>
<script>
import PhotoTw from "@/components/PhotoTw";

export default {
  name: "PhotoTwTab",
  props: {
    listData: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default: "two",
    },
  },
  data() {
    return {
      mouseIndex: 0,
    };
  },
  components: {
    PhotoTw,
  },
  created() {},
  methods: {
    mouseOver(index) {
      this.mouseIndex = index;
    },
  },
};
</script>
<style scoped>
.mb2left40 {
  margin-left: 25px;
  margin-top: 35px;
  height: 45px;
  width: 1075px;
}
.mb2left40_1 {
  height: 45px;
  width: 1030px;
  float: left;
}
.mb2left40_1 ul {
  color: #ffffff;
  list-style: none;
}
.mb2left40_1 li {
  padding: 5px 7px 5px 7px;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: 18px;
  background: #6e0a0a;
  color: #ffffff;
}
.mb2left40_1 li.now {
  font-size: 20px;
  font-weight: bold;
  background: #6e0a0a;
  color: #ffffff;
}

.mb2left41 {
  margin-left: 25px;
  margin-top: 35px;
  height: 45px;
  width: 1075px;
  float: left;
}

.tablist {
  width: 1080px;
  height: 100px;
  padding: 0px;
  font-size: 14px;
  line-height: 24px;
  border-top: 0;
  display: none;
  margin-left: 20px;
}
.block {
  display: block;
}
.tssxpart1 {
  height: auto;
  width: 350px;
  float: left;
}
.tssxpart1img {
  height: 230px;
  width: 350px;
  float: left;
  margin-left: 20px;
}
.tssxpart1font {
  height: 147px;
  width: 333px;
  float: left;
  margin-left: 25px;
}
.tssxpart1font1 {
  margin-top: 18px;
  height: 15px;
  width: 333px;
  float: left;
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
}
.tssxpart1font a:link {
  color: #6e0a0a;
}
.tssxpart1font2 {
  margin-top: 8px;
  height: 70px;
  width: 333px;
  float: left;
  font-size: 14px;

  color: #6c6c6c;
  line-height: 24px;
}
.tssxpart1font3 {
  margin-top: 15px;
  height: 15px;
  width: 333px;
  float: left;
  font-size: 13px;
  color: #6c6c6c;
  line-height: 15px;
}
.tssxxx {
  height: 15px;
  width: 34px;
  float: right;
  margin-right: 13px;
}
</style>