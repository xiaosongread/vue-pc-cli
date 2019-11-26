<template>
  <div class="shop_cart">
    加入购物车动画(css实现):
    <div class="add">
      <button @click="addShopCart">add</button>
      <transition name="shop_cart">
        <img class="add_img" v-show="addShow" src="../assets/poster.jpg" alt="">
      </transition>
    </div>
    <div class="cart">
      <img src="../assets/shopCar.png" alt="">
    </div>
  </div>
</template>
<script>
// import Render from './Render'
export default {
  name: 'Test1',
  data () {
    return {
      addShow: false
    }
  },
  components: { },
  created () {

  },
  methods: {
    addShopCart () {
      this.addShow = true
      // 添加类名的方法没有动画结束的时机,这里我直接写了一个定时器,时机和动画时间一致,在图片移动到购物车位置时隐藏
      setTimeout(() => {
        this.addShow = false
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .transition_test {
    text-align: left;
    padding-bottom: 300px;
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
  /* 一开始调整好商品图片在购物车的位置,移入效果最后显示是在一开始定义好的位置 */
  .shop_cart .add_img {
    width: 100px;
    position: absolute;
    left: 600px;
    top: -160px;
  }
  /* 可以有两种方式实现飞入动画,用动画的效果感觉会更好一点 */
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
    transform: scale(0.1);
    transition: all 1s ease-out;
  }
  .shop_cart-enter {
    /* opacity: 0; */
    /* transform: scale(.1); */
    transform: translate(-610px, 200px);
  }
</style>
