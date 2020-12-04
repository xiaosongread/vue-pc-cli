<template>
  <div class="body">
    <Header></Header>
    <div class="agent">
      <div class="agent_info">
        <div class="agent_info_img">
          <img :src="agentInfo.headerPath">
        </div>
        <div class="agent_info_des">
          <p class="name">{{agentInfo.name}}<span>{{ agentInfo.agentType | dictT('agentType')}}</span></p>
          <div class="agent_service"><span>服务商圈：</span>{{agentInfo.serviceShop}}</div>
          <div class="agent_service"><span>熟悉楼盘：</span>{{agentInfo.serviceLp}}</div>
          <div class="agent_history_total">历史成交{{agentInfo.okNumber}}套</div>
          <ul class="agent_tag">
            <li v-for="(item,index) in agentInfo.tag" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="agent_w" v-html="agentInfo.des"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { getAgentInfo } from '@/utils/api'
import Header from '@/components/header'
import Footer from '@/components/footer'
let that
export default {
  data () {
    return {
      id: this.$route.query.id || '',
      agentInfo: null
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    that = this
    this.getAgentInfo()
  },
  methods: {
    async getAgentInfo() {
      const data = await getAgentInfo(this.id)
      if (data.code === 1 && data.data) {
        this.agentInfo = data.data.agentInfo
      }
    }
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
    padding: 20px;
  }
}
</style>