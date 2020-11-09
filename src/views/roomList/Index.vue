<template>
  <div class="roomList">
    <Header></Header>
    <RoomSearch></RoomSearch>
    <div class="roomList_items">
      <RoomItem v-for="(item, index) in 10" :key="index"></RoomItem>
    </div>
  </div>
</template>

<script>
import { getAllDict, getDouBanMovieList } from '@/utils/api'
import Header from '@/components/header'
import RoomItem from '@/components/roomItem'
import DealStory from '@/components/dealStory'
import RoomSearch from '@/components/roomSearch'
import Footer from '@/components/footer'
import SectionTitle from '@/components/sectionTitle'
let that
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    RoomSearch,
    RoomItem,
    Footer
  },
  created () {
    that = this
    
  },
  methods: {
    
    // 获取热门电影
    // getDouBanMovieList () {
    //   getDouBanMovieList().then(function (data) {
    //     that.$store.dispatch('RESET_ACCTION_APP_COUNT', data.title)
    //   })
    // },
    // async getDict () {
    //   const data = await getAllDict()
    //   if (data.code === 1 && data.data) {
    //     console.log('接口数据', data)
    //   }
    // },
    // durationNotify () {
    //   this.$notify.open({
    //     content: '10秒后自动关闭！',
    //     duration: 1000
    //   })
    // }
  }
}
</script>
<style scoped lang="scss">
.roomList{
  padding-top: 70px;
  &_items{
    width: 1250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    .roomItem{
      margin-bottom: 20px;
    }
  }
}
</style>