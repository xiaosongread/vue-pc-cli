<template>
  <div class="wrapper">
    <!-- <sidebar v-if="!pwdStatus" class="sidebar-container"/>
    <div :class="{'noMarginL':pwdStatus===1}" class="main-container" >
      <navbar/>
      <app-main/>
    </div> -->
    <app-main/>
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

<style rel="stylesheet/scss" lang="scss">
  @import "src/styles/reset.scss";
  @import "src/styles/class.scss";
  @import "src/styles/animation.scss";
</style>
