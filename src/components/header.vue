<template>
  <div :class="$store.state.scrollHeaderBarFlag ? 'header header_anmation' : 'header'">
    <div class="header_cons">
      <img src="//webimg.ziroom.com/a8f8d17a-229b-4246-a856-6c9aee9d7323.png" class="header_cons_logo">
      <div class="header_cons_location">北京</div>
      <ul>
        <li class="active">首页</li>
        <li>二手房</li>
        <li>新房</li>
        <li>经纪人</li>
        <li>服务</li>
        <li>关于我们</li>
      </ul>
      <div class="header_cons_lr">
        <div class="login">登录</div>
        <div>注册</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  scrollMixins
} from '@/mixins/index'
export default {
  name: 'header',
  data () {
    return {
      // scrollFlag: false
    }
  },
  mixins: [scrollMixins],
  created () {
    // this.listenerFunction();
  },
  beforeDestroy () {
    // document.removeEventListener("scroll", this.listenerFunction);
  },
  methods:{
    // listenerFunction(e) {
    //   document.addEventListener('scroll', this.handleScroll, true);
    // },
    // handleScroll() {
    //   if(window.pageYOffset > 100) {
    //     this.scrollFlag = true
    //   } else {
    //     this.scrollFlag = false
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header{
  width: 100%;
  height: 50px;
  display: flex;
  background: rgba(0,0,0,.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &.header_anmation{
    background: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
    ul{
      color: rgba(0,0,0,.8);
    }
    .header_cons_location{
      color: #000000;
      border: 1px solid rgba(0,0,0,.4);
      background: transparent;
    }
  }
  &_cons{
    width: 1150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    &_logo{
      width: 160px;
      height: 35px;
    }
    &_location{
      color: #ffffff;
      margin-left: 20px;
      padding: 5px 10px;
      border-radius: 10px;
      background: rgba(0,0,0,.4);
    }
    ul{
      height: 100%;
      display: flex;
      flex: 1;
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
      margin-left: 100px;
      align-items: center;
      li{
        height: 100%;
        line-height: 50px;
        margin: 0 15px;
        position: relative;
        &.active::after{
          width: 100%;
        }
        &:hover{
          &::after{
            width: 100%;
          }
        }
        &::after{
          content: "";
          display: block;
          width: 0;
          height: 2px;
          position: absolute;
          bottom: 10px;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          transition: width .3s;
          background: #ffa000;
        }
      }
    }
    &_lr{
      display: flex;
      // justify-content: center;
      // align-items: center;
      .login{
        display: flex;
        &::after{
          content: "|";
          display: block;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
