<template>
  <div class="index">
    <Header></Header>
    <div class="index_banner">
      <img src="//public.danke.com.cn/public-20200326-Fkn8aiQeF2EiRi46JhC37emlVsRb">
    </div>
    <SectionTitle title="特价房源"
                  subTitle="特价房源，限时秒杀"
                  url="https:www.baidu.com">
    </SectionTitle>
    <div class="index_good_properties">
      <div v-for="(item, index) in 3" :key="index" class="index_good_properties_item">
        <RoomItem></RoomItem>
      </div>
    </div>
    <SectionTitle title="优质房源"
                  subTitle="优质房源，选到就是赚到"
                  url="https:www.baidu.com">
    </SectionTitle>
    <div class="index_good_properties">
      <div v-for="(item, index) in 6" :key="index" class="index_good_properties_item">
        <RoomItem></RoomItem>
      </div>
    </div>
    <SectionTitle title="成交故事"
                  subTitle="您的认可，是对我们最大的鼓励"
                  url="https:www.baidu.com">
    </SectionTitle>
    <div class="index_story">
      <div v-for="(item, index) in 4" :key="index" class="index_story_item">
        <DealStory></DealStory>
      </div>
    </div>
    <SectionTitle title="优秀经纪人"
                  subTitle="您的认可，是对我们最大的鼓励">
    </SectionTitle>
    <div class="index_agent">
      <div v-for="(item, index) in 8" :key="index" class="index_agent_item">
        <img src="https://img.dyrs.cc/store/626/623/000/8185b51457fd7ca1.jpg!zmm">
        <div class="index_agent_item_des">
          <p class="name">张三</p>
          <p class="motto">您的认可是我最大的鼓励</p>
          <div class="index_agent_item_des_btn">查看详情</div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { getAllDict, getDouBanMovieList } from '@/utils/api'
import Header from '@/components/header'
import RoomItem from '@/components/roomItem'
import DealStory from '@/components/dealStory'
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
    SectionTitle,
    RoomItem,
    DealStory,
    Footer
  },
  created () {
    // this.getDict()
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
.index{
  &_banner{
    width: 100%;
  }
  &_section{
    width: 1150px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    &_sub_title{
      text-align: center;
      color: rgba(0,0,0,.4);
      margin-top: 6px;
    }
    &_title{
      margin: 60px auto 0;
      padding: 0 40px;
      position: relative;
      display: inline-block;
      height: 36px;
      font-size: 30px;
      color: rgba(0,0,0,.85);
      &::after{
        content: "";
        position: absolute;
        top: 0;
        width: 36px;
        height: 36px;
        right: 0;
        background: url(//static8.ziroom.com/phoenix/pc/images/2019/title_bg2.png) no-repeat 50%;
        background-size: 100%;
      }
      &::before{
        content: "";
        position: absolute;
        top: 0;
        width: 36px;
        height: 36px;
        left: 0;
        background: url(//static8.ziroom.com/phoenix/pc/images/2019/title_bg1.png) no-repeat 50%;
        background-size: 100%;
      }
    }
  }
  &_good_properties{
    width: 1150px;
    margin: 40px auto 0;
    display: flex;
    flex-wrap: wrap;
    &_item{
      margin: 0 6px 12px;
    }
  }
  &_story{
    width: 1150px;
    margin: 40px auto 0;
    display: flex;
    flex-wrap: wrap;
    &_item{
      &:nth-child(2n) {
        margin-left: 20px;
      }
      margin-bottom: 20px;
    }
  }
  &_agent{
    display: flex;
    flex-wrap: wrap;
    width: 1150px;
    margin: 40px auto 0;
    &_item{
      width: 287px;
      height: 242px;
      position: relative;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
      &_des{
        width: 287px;
        height: 242px;
        position: absolute;
        top: 242px;
        left: 0;
        color: #ffffff;
        background: rgba(0,0,0,.4);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: top .5s;
        &::before{
          content: "";
          width: 100%;
          height: 5px;
          background: #ffa000;
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }
        .name{
          font-size: 20px;
          font-weight: bold;
        }
        .motto{
          font-size: 12px;
          margin: 20px auto;
        }
        &_btn{
          width: 100px;
          line-height: 30px;
          text-align: center;
          border-radius: 10px;
          background: #ffa000;
        }
      }
      &:hover{
        .index_agent_item_des{
          top: 0;
        }
      }
    }
  }
}
</style>