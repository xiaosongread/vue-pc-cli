<template>
  <div class="wrapper">
    <!-- <sidebar v-if="!pwdStatus" class="sidebar-container"/>
    <div :class="{'noMarginL':pwdStatus===1}" class="main-container" >
      <navbar/>
      <app-main/>
    </div> -->
    <div>
      <img src="../../assets/logo.png">
    </div>
    <div class="con_box">
      <div class="con_box_left">
        123
      </div>
      <div class="con_box_right">
        <app-main/>
      </div>
    </div>
  </div>
</template>

<script>
import { AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain
  },
  mixins: [],
  computed: {

  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  // @import "src/styles/mixin.scss";
  .wrapper{
    width: 1200px;
    margin: 0 auto;
    .con_box{
      overflow: hidden;
      height: 100%;
      .con_box_left{
        width: 250px;
        height: 100%;
        background: #ddd;
        float: left;
      }
      .con_box_right{
        width: 950px;
        float: left;
      }
    }
  }
</style>
