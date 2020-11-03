<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {

  },
  mounted () {
    // console.log('------', this.$store)
  }
}
</script>

<style scoped>
.app-main {
  margin-bottom: 3
  0px;
  /* 50 = navbar
  min-height: calc(100vh - 56px);
  position: relative;
  overflow: hidden;
  background: #f0f3f5; */
}
</style>
