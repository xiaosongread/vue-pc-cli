// import {
//   defaultMixins
// } from '@/mixins/index'

// mixins: [defaultMixins],

const scrollMixins = {
  data () {
    return {
      barNameArr: ['xmld','hxjs','zbgk','fwzx','lpxq'],
      barLiHeightArr: [],
    }
  },
  created () {
    
  },
  mounted() {
    this.listenerFunction();
    this.barNameArr.forEach((item) => {
      let itemScrollHeight = document.querySelector('#info_' + item).offsetTop - 95
      let obj = {
        key: item,
        itemScrollHeight,
      }
      this.barLiHeightArr.push(obj)
    })
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
      if (!this.barLiHeightArr.length) return
      if(window.pageYOffset < this.barLiHeightArr[0].itemScrollHeight) {
        this.$store.dispatch('TOGGLE_SUB_BAR_ACTIVE', this.barLiHeightArr[0].key)
      } else if(window.pageYOffset > this.barLiHeightArr[0].itemScrollHeight && window.pageYOffset < this.barLiHeightArr[1].itemScrollHeight) {
        this.$store.dispatch('TOGGLE_SUB_BAR_ACTIVE', this.barLiHeightArr[1].key)
      } else if(window.pageYOffset > this.barLiHeightArr[1].itemScrollHeight && window.pageYOffset < this.barLiHeightArr[2].itemScrollHeight) {
        this.$store.dispatch('TOGGLE_SUB_BAR_ACTIVE', this.barLiHeightArr[2].key)
      } else if (window.pageYOffset > this.barLiHeightArr[2].itemScrollHeight && window.pageYOffset < this.barLiHeightArr[3].itemScrollHeight) {
        this.$store.dispatch('TOGGLE_SUB_BAR_ACTIVE', this.barLiHeightArr[3].key)
      } else if (window.pageYOffset > this.barLiHeightArr[3].itemScrollHeight && window.pageYOffset < this.barLiHeightArr[4].itemScrollHeight) {
        this.$store.dispatch('TOGGLE_SUB_BAR_ACTIVE', this.barLiHeightArr[4].key)
      }
      // let activeItem = this.barLiHeightArr.filter((item, index)=>{
      //   return item.itemScrollHeight == window.pageYOffset
      // })
      // console.log(123, activeItem )
      // if(activeItem.length) this.$store.dispatch('TOGGLE_SUB_BAR_ACTIVE', activeItem[0].key)
      // switch window.pageYOffset
    }
  }
}

export {
  scrollMixins
}