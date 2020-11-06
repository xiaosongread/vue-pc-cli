<template>
  <div class="body">
    <Header></Header>
    <div class="detail">
      <div class="detail_header">
        <div class="detail_header_left">
          <img :src="require('../../../static/room.jpg')">
        </div>
        <div class="detail_header_right">
          <h3>名称</h3>
          <div class="detail_header_right_des">
            <div class="detail_header_right_des_price">
              <p>建筑面积均价：<span>12000</span> 元/㎡</p>
              <p class="views">300人浏览过</p>
            </div>
            <div class="room_detail">
              <p>
                <i class="iconfont icondingwei"></i>
                <span>房屋地址：温州瓯海区三垟街道吕家岸村</span>
              </p>
              <p>
                <i class="iconfont iconfl-huxing"></i>
                <span>房屋户型：三室两厅</span>
              </p>
              <p>
                <i class="iconfont icongongnuan"></i>
                <span>供暖方式：集体供暖</span>
              </p>
              <p>
                <i class="iconfont icondianti"></i>
                <span>电梯：有</span>
              </p>
              <p>
                <i class="iconfont iconlvhua"></i>
                <span>小区绿化面积：30%</span>
              </p>
            </div>
            <div class="yykf">预约看房</div>
          </div>
        </div>
      </div>
    </div>
    <div :class="!$store.state.scrollConsBarFlag ? 'detail_bar' : 'detail_bar detail_bar_fix'">
      <ul class="detail_bar_box">
        <li>项目亮点</li>
        <li>周边概括</li>
        <li>户型介绍</li>
        <li>房屋装修</li>
        <li>楼盘详情</li>
      </ul>
    </div>
    <div class="detail_des">
      <section>
        <p class="section_title">项目亮点</p>
        <h3>家境龙源 - 法式大花园</h3>
        <p class="detail_des_det">万科翡翠天地，是万科高端“翡翠系”作品，建筑面积约150-450㎡奢景大宅，屹立中央绿轴，市政府、博物馆、大剧院等城市资源环伺，世纪公园、三垟湿地公园、中央度假都市公园三园汇聚，兼得都市繁华与自然生态</p>
        <ul>
          <li>
            <i class="iconfont iconjiaotong"></i>
            <p class="sub_title">交通配套</p>
            <p>多达17条公交线路以服务刷新生活高度</p>
          </li>
          <li>
            <i class="iconfont iconeducation_icon"></i>
            <p class="sub_title">教育配套</p>
            <p>1500㎡阳光草坪风雨连廊、五维立体花园</p>
          </li>
          <li>
            <i class="iconfont icontubiaozhizuosvg-32"></i>
            <p class="sub_title">医疗配套</p>
            <p>公立三级甲等市医院温州市中西结合医院</p>
          </li>
          <li>
            <i class="iconfont iconxiazai3"></i>
            <p class="sub_title">购物配套</p>
            <p>国际化生活会所咖啡吧、儿童园、健身房等</p>
          </li>
          <li>
            <i class="iconfont iconsheji"></i>
            <p class="sub_title">设计风格</p>
            <p>高端改善大平层住宅简约法式风格</p>
          </li>
        </ul>
      </section>
      <section>
        <p class="section_title">户型介绍</p>
        <div class="hxjs">
          <img class="zoomBox" :src="require('../../../static/2.jpg')">
        </div>
      </section>
      <section>
        <p class="section_title">周边概括</p>
      </section>
      <section>
        <p class="section_title">房屋装修</p>
        <div class="fwzx">
          <div class="imgItem">
            <img class="zoomBox" :src="require('../../../static/3.jpg')">
          </div>
          <div class="imgItem">
            <img class="zoomBox" :src="require('../../../static/4.jpg')">
          </div>
          <div class="imgItem">
            <img class="zoomBox" :src="require('../../../static/5.jpg')">
          </div>
        </div>
      </section>
      <section>
        <p class="section_title">楼盘详情</p>
        <div class="lpxq">
          <div class="lpxq_left">
            <p>
              <span>交房时间</span>
              <span>2020-10-12</span>
            </p>
            <p>
              <span>装修标准</span>
              <span>3888或5888元/平米</span>
            </p>
            <p>
              <span>开发商</span>
              <span>温州万聚置业有限公司</span>
            </p>
            <p>
              <span>容积率</span>
              <span>4</span>
            </p>
            <p>
              <span>物业公司</span>
              <span>万科物业</span>
            </p>
            <p>
              <span>总占地面积</span>
              <span>约55896㎡</span>
            </p>
          </div>
          <div class="lpxq_right">
            <p>
              <span>绿化率</span>
              <span>40%</span>
            </p>
            <p>
              <span>物业费（住宅／别墅）</span>
              <span>6.98 元/㎡ （月）</span>
            </p>
            <p>
              <span>车位比</span>
              <span>1:1.57</span>
            </p>
            <p>
              <span>物业类型</span>
              <span>高层 , 超高层</span>
            </p>
            <p>
              <span>产权年限</span>
              <span>70年</span>
            </p>
            <p>
              <span>规划户数</span>
              <span>1089</span>
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
let that
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    that = this
  },
  methods: {
    durationNotify () {
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 1000
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/styles/color.scss";
.body{
  background: #ebebeb;
}
.detail{
  height: 500px;
  background: url(https://life.vanke.com/assets/images/other-images/prod-banner.png) no-repeat top center;
  background-size: 1920px 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  &_header{
    width: 1250px;
    height: 350px;
    margin: 0 auto;
    display: flex;
    &_left{
      width: 800px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &_right{
      flex: 1;
      padding: 15px;
      background: #ffffff;
      h3{
        font-size: 32px;
        color: $title_color;
      }
      &_des{
        color: $sub_color;
        font-size: 14px;
        &_price{
          display: flex;
          justify-content: space-between;
          align-items: center;
          p:first-child{
            font-size: 16px;
            span{
              font-size: 30px;
              font-weight: bold;
              color: $red_color;
            }
          }
          .views{
            font-size: 12px;
          }
        }
        .room_detail{
          margin-top: 20px;
          height: 160px;
          overflow: auto;
          p{
            line-height: 40px;
            border-top: 1px solid $border_color;
            &:last-child{
              border-bottom: 1px solid $border_color;
            }
            span{
              margin-right: 5px;
            }
          }
        }
        .yykf{
          width: 130px;
          line-height: 40px;
          text-align: center;
          font-size: 17px;
          font-weight: bold;
          color: #ffffff;
          background: $btn-color;
          margin: 15px auto 0;
          cursor: pointer;
        }
      }
    }
  }
}
.detail_bar{
  width: 100%;
  line-height: 45px;
  font-size: 14px;
  color: $bar-color;
  background: #ffffff;
  &.detail_bar_fix{
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0;
  }
  &_box{
    width: 1250px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    li:not(:last-child){
      padding-right: 20px;
    }
  }
}
.detail_des{
  width: 1250px;
  margin: 0 auto;
  section{
    background: #ffffff;
    padding: 20px 15px;
    margin-top: 20px;
    border: 1px solid $border_color;
    .section_title{
      font-size: 16px;
      color: $sub_title_color;
      margin-bottom: 30px;
    }
    h3{
      font-size: 36px;
      text-align: center;
    }
    .detail_des_det{
      width: 1000px;
      margin: 10px auto;
      text-align: center;
      font-size: 12px;
      color: $sub_color;
      margin-bottom: 40px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      padding-top: 25px;
      border-top: 1px solid $border_color;
      li{
        width: 370px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 20px;
        &:not(:nth-child(3n)) {
          margin-right: 5px;
        }
        .iconfont{
          font-size: 50px;
        }
        p{
          font-size: 12px;
          color: $sub_color;
        }
        .sub_title{
          font-size: 16px;
          color: $bar-color;
          margin: 10px auto 20px;
        }
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
    .hxjs{
      width: 230px;
      height: 230px;
      display: flex;
      align-content: center;
      align-items: center;
      overflow: hidden;
    }
    .fwzx{
      display: flex;
      align-items: center;
      .imgItem{
        width: 178px;
        height: 134px;
        margin-right: 10px;
        display: flex;
        align-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
    .lpxq{
      display: flex;
      color: $sub_color;
      font-size: 14px;
      p{
        display: flex;
        justify-content: space-between;
        line-height: 40px;
        span:first-child{
          color: #000000;
          font-weight: bold;
        }
      }
      &_left{
        flex: 1;
        padding: 0 30px 0 30px;
        border-right: 1px dashed $border_color;
      }
      &_right{
        flex: 1;
        padding: 0 20px;
      }
    }
  }
}
</style>