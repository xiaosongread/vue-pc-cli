<template>
  <div class="transition_test">
    <p>淡入淡出</p>
    <button @click="show = !show">click</button>
    <!-- 页面有多个transition时可以加name区分,如果没有加name,默认CSS类名为v-开头 -->
    <transition name="slide-fade">
      <div v-if="show" class="circle"></div>
    </transition>
  </div>
</template>
<script>
// import Render from './Render'
export default {
  name: 'Test',
  data () {
    return {
      show: false
    }
  },
  components: { },
  created () {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
