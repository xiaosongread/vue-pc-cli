<template>
  <div class="header">
    <div class="header_cons">
      <img src="//webimg.ziroom.com/a8f8d17a-229b-4246-a856-6c9aee9d7323.png" class="header_cons_logo">
      <div class="header_cons_location">北京</div>
      <ul>
        <li>首页</li>
        <li>二手房</li>
        <li>新房</li>
        <li>经纪人</li>
        <li>服务</li>
        <li>关于我们</li>
      </ul>
      <div class="header_cons_lr">
        <div class="login">登录</div>
        <div>注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header{
  width: 100%;
  height: 50px;
  display: flex;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.08);
  position: fixed;
  top: 0;
  left: 0;
  &_cons{
    width: 1150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    &_logo{
      width: 160px;
      height: 35px;
    }
    &_location{
      margin-left: 20px;
      padding: 5px 10px;
      border-radius: 10px;
      background: rgba(0,0,0,.08);
    }
    ul{
      display: flex;
      flex: 1;
      margin-left: 200px;
      // width: 760px;
      align-items: center;
      li{
        // flex: 1;
      }
    }
    &_lr{
      display: flex;
      .login{
        display: flex;
        &::after{
          content: "|";
          display: block;
          margin: 0 15px;
        }
      }
    }
  }
}
</style>
