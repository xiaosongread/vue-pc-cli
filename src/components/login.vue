<template>
  <div class="login" @click.self="bgFn">
    <div class="login_box">
      <div class="close" @click="bgFn">
        <i class="iconfont iconguanbi_huaban1"></i>
      </div>
      <div v-if="$store.state.isLogin">
        <h3>登录</h3>
        <p class="login_box_des">没有账号可以点击<span>注册</span></p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请输入您的账号" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">账号错误</span>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请输入您的密码" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">密码错误</span>
        </p>
        <button class="button is-primary">登录</button>
      </div>
      <div v-if="!$store.state.isLogin">
        <h3>注册</h3>
        <p class="login_box_des">如有账号可以点击<span>登陆</span></p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请输入您的账号" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">账号错误</span>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请输入您的密码" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">密码错误</span>
        </p>
        <p class="control has-icon has-icon-right">
          <input class="input is-success" type="text" placeholder="请确认您的密码" value="">
          <i class="fa fa-check"></i>
          <span class="help is-success">两侧输入的密码不一致</span>
        </p>
        <button class="button is-primary">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      
    }
  },
  methods: {
    bgFn(){
      this.$store.dispatch('TOGGLE_LOGIN_FLAG', false)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/color.scss";
.login{
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
      font-weight: bold;
    }
    &_des{
      font-size: 12px;
      margin-top: 10px;
      span{
        color: $btn-color;
      }
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
