<template>
  <div class="transition_test">
    <h2>   过渡效果</h2>

    <button @click="show = !show">click</button>
    <!-- <transition name="slide-fade">
      <div v-if="show" class="circle"></div>
    </transition> -->
    <div>
      图片放大效果:
      <transition name="img-fade">
        <img class="bigimg" v-if="show" src="../assets/poster.jpg" alt="">
      </transition>
    </div>
    <div class="shop_cart">
      加入购物车动画(css实现):
      <div class="add">
        <button @click="addShopCart">add</button>
        <transition name="shop_cart">
          <img class="add_img" v-if="addShow" src="../assets/poster.jpg" alt="">
        </transition>
      </div>
      <div class="cart">
        <img src="../assets/shopCar.png" alt="">
      </div>
    </div>

    <div class="shop_cart">
      加入购物车动画(JavaScript钩子函数实现):
      <div class="add">
        <button @click="addShopCart1">add</button>
        <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <img class="add_img_js" v-if="addShow1" src="../assets/poster.jpg" alt="">
        </transition>
      </div>
      <div class="cart">
        <img src="../assets/shopCar.png" alt="">
      </div>
    </div>
    <!-- 动画数组效果 -->
    <ul class="group_list">
      <button @click="addItem">addItem</button>
      <button @click="removeItem">removeItem</button>
      <transition-group name="list">
        <li class="group_item" v-for="item in list" :key="item">{{item}}</li>
      </transition-group>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'myTransition',
  components: {

  },
  data () {
    return {
      show: false,
      addShow: false,
      addShow1: false,
      list: [1, 2, 3]
    }
  },
  created () {

  },

  methods: {
    addShopCart () {
      this.addShow = true
      setTimeout(() => {
        this.addShow = false
      }, 1000)
    },
    addShopCart1 () {
      this.addShow1 = true
    },

    // 动画钩子函数
    // 进入前状态
    beforeEnter (el) {
      el.style.left = '-20px'
      el.style.top = '-15px'
      el.style.transform = 'scale(1)'
    },
    // 进入中
    enter (el, done) {
      // 需要调用元素的offset操作,才有过渡的效果,否则会马上实现过渡
      // el.offsetWidth
      el.style.left = '600px'
      el.style.top = '-160px'
      el.style.transform = 'scale(.5)'
      done()
    },
    // 进入后
    afterEnter () {
      this.addShow1 = false
    },

    // 新增
    addItem () {
      this.list.push(this.list.length + 1)
    },
    // 删除
    removeItem () {
      if (this.list.length > 1) {
        this.list.pop()
      }
    }
  }

}
</script>
<style scoped>
  .transition_test {
    text-align: left;
    padding-bottom: 300px;
  }
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: aquamarine;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .5s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    /* transform: translateX(500px); */
    opacity: 0;
  }
  .bigimg {
    width: 300px;
  }

  .img-fade-enter-active {
    transition: all 1s ease-out;
  }
  .img-fade-enter {
    transform: scale(.5);
    /* width: 50px; */
  }

  .shop_cart {
    padding: 20px;
  }
  .shop_cart .add {
    position: relative;
    margin-top: 100px;
    width: 500px;
    display: inline-block;
  }
  .shop_cart .add button {
    position: absolute;
    z-index: 99;
  }
  .shop_cart .cart{
    width: 300px;
    display: inline-block;
  }
  .shop_cart .cart img {
    width: 100%;
  }
  .shop_cart .add_img {
    width: 100px;
    position: absolute;
    left: 600px;
    top: -160px;
  }
  /* 动画效果实现 */
  /* @keyframes bounce-in {
    0% {
      transform: scale(1);
      transform: translate(-610px, 100px);
    }
    100% {
      transform: scale(.5);
      transform: translate(0px, 0px);
    }
  }
  .shop_cart-enter-active {
    animation: bounce-in 1s;
  } */

  /* CSS类名实现 */
  .shop_cart-enter-active {
    transition: all 1s ease-out;
  }
  .shop_cart-enter {
    opacity: 0;
    transform: scale(.5);
    transform: translate(-610px, 100px);
  }
/* // JavaScript函数 */
  .shop_cart .add_img_js {
    width: 100px;
    position: absolute;
    left: 600px;
    top: -160px;
    transition: all 1s;
  }
/* // 动态列表 */
  .group_list {
    padding: 30px;
  }
  .group_list .group_item {
    width: 200px;
    height: 100px;
    border: 1px solid orangered;
    margin: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all .8s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(40px);
  }
</style>
