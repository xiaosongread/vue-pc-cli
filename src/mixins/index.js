// import {
//   defaultMixins
// } from '@/mixins/index'

// mixins: [defaultMixins],

const scrollMixins = {
  created () {
    this.listenerFunction();
  },
  beforeDestroy () {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  methods:{
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true);
    },
    handleScroll() {
      this.$store.dispatch('TOGGLE_HEADER_BAR', window.pageYOffset > 100 ? true : false)
      this.$store.dispatch('TOGGLE_CONS_BAR', window.pageYOffset > 450 ? true : false)
    }
  }
}

export {
  scrollMixins
}