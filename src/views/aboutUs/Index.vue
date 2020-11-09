<template>
  <div class="body">
    <Header></Header>
    <div>关于我们</div>
    <Footer></Footer>
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
    
  }
}
</script>
<style scoped lang="scss">
@import "src/styles/color.scss";
.body{
  background: #ebebeb;
}
.agent{
  width: 1150px;
  margin: 0 auto;
  padding-top: 70px;
  &_info{
    display: flex;
    padding: 15px;
    background: #ffffff;
    &_img{
      width: 200px;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &_des{
      padding: 15px 30px;
      flex: 1;
      .name{
        font-size: 20px;
        margin-bottom: 20px;
        position: relative;
        &:after{
          content: "";
          display: block;
          width: 130px;
          height: 2px;
          background: $red_color;
          bottom: 0;
          left: 0;
        }
        span{
          font-size: 14px;
          margin-left: 10px;
          color: $sub_title_color;
        }
      }
      .agent_service{
        font-size: 14px;
        margin-top: 5px;
        span{
          color: $sub_title_color;
        }
      }
      .agent_history_total{
        font-size: 12px;
        margin-top: 10px;
        color: $sub_title_color;
      }
      .agent_tag{
        display: flex;
        margin-top: 15px;
        li{
          color: #ffffff;
          font-size: 12px;
          padding: 2px 4px;
          margin: 0 8px 8px 0;
          background: $btn-color;
        }
      }
    }
  }
  &_w{
    background: #ffffff;
    margin-top: 20px;
  }
}
</style>