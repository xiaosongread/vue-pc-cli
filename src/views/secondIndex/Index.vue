<template>
<div>
  <IndexLogoHeader/>
  <Header/>
  <div class="conBox">
    <SecondNav></SecondNav>
  </div>
  <Footer/>
</div>
</template>

<script>
import { getAllDict, getDouBanMovieList } from '@/utils/api'
import IndexLogoHeader from '@/components/IndexLogoHeader'
import Header from '@/components/Header'
import SecondNav from '@/components/SecondNav'




import Footer from '@/components/Footer'
let that
export default {
  components: {
    IndexLogoHeader,
    Header,
    SecondNav,

    Footer
  },
  data () {
    return {

    }
  },
  created () {
    this.getDict()
    that = this
    // this.getDouBanMovieList()
  },
  methods: {
    addAppCount () {
      this.$store.commit('ADD_COUNT', 1)
    },
    deieteAppCount () {
      if (this.$store.state.appConut) this.$store.commit('DELETE_COUNT', 1)
    },
    // 获取热门电影
    getDouBanMovieList () {
      getDouBanMovieList().then(function (data) {
        that.$store.dispatch('RESET_ACCTION_APP_COUNT', data.title)
      })
    },
    async getDict () {
      const data = await getAllDict()
      if (data.code === 1 && data.data) {
        console.log('接口数据', data)
      }
    },
    durationNotify () {
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 1000
      })
    }
  }
}
</script>
<style scoped>
.conBox{
  overflow: hidden;
}
</style>