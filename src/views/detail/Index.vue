<template>
  <div>
    <Header></Header>
    <div class="detail">
      <div class="detail_header">
        <div class="detail_header_left">
          <img :src="require('../../../static/room.jpg')">
        </div>
        <div class="detail_header_riight">
          <h3>名称</h3>
          <div>
            <p>建筑面积：120㎡</p>
            <p>单价：12000元/㎡</p>
            <p>300人浏览过</p>
          </div>

        </div>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
let that
export default {
  data () {
    return {

    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    that = this
  },
  methods: {
    durationNotify () {
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 1000
      })
    }
  }
}
</script>
<style scoped lang="scss">
.detail{
  height: 500px;
  background: url(https://life.vanke.com/assets/images/other-images/prod-banner.png) no-repeat top center;
  background-size: 1920px 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  &_header{
    width: 600px;
    margin: 0 auto;
    display: flex;
    &_left{
      width: 60%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>