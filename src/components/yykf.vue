<template>
  <div class="yykf" @click.self="bgFn">
    <div class="yykf_box">
      <div class="close" @click="bgFn">
        <i class="iconfont iconguanbi_huaban1"></i>
      </div>
      <div v-if="$store.state.isLogin">
        <h3>预约看房</h3>
        <p class="yykf_box_des">用心服务是我们的核心宗旨</p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请输入您的姓名" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">姓名不能为空</span>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请输入您的手机号" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">手机号格式错误</span>
        </p>
        <button class="button is-primary">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yykf',
  data () {
    return {
      
    }
  },
  methods: {
    bgFn(){
      this.$store.commit('SET_YYKF_FLAG', false)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/color.scss";
.yykf{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  &_box{
    width: 600px;
    // height: 300px;
    padding: 40px;
    border-radius: 10px;
    background: #ffffff;
    position: relative;
    .close{
      width: 30px;
      height: 30px;
      position: absolute;
      top: 10px;
      right: 10px;
      .iconfont{
        font-size: 25px;
      }
    }
    h3{
      font-size: 26px;
      text-align: center;
      font-weight: bold;
    }
    &_des{
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
    .control{
      margin-top: 20px;
      // .input{
      //   font-size: 12px !important;
      // }
    }
    .button{
      width: 100%;
      margin: 20px auto;
      background: $btn-color;
    }
  }
}
</style>
