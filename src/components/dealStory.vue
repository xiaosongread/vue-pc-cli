<template>
  <div class="dealStory">
    <div class="dealStory_left">
      <img src="../../static/1.png" class="zoomBox">
    </div>
    <div class="dealStory_right">
      <h3>老客户介绍，最终交易成功！</h3>
      <div class="dealStory_right_price">
        <p>成交价<span>148</span>万元</p>
        <p>地域市场价<span>11</span>万元</p>
      </div>
      <div class="dealStory_right_des">客户王先生是做装潢装修的，通过老客户介绍来到的金铂顺昌，王先生意向区域是朝阳区房源，因为客户觉得住朝...</div>
      <div>经纪人：赵木木</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dealStory',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dealStory{
  width: 560px;
  height: 170px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,.2);
  &_left{
    width: 220px;
    height: 100%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  &_right{
    flex: 1;
    text-align: left;
    margin-left: 20px;
    display: flex;
    // justify-content: center;
    flex-direction: column;
    h3{
      font-size: 18px;
      color: rgba(0,0,0,.8);
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    &_price{
      display: flex;
      margin-bottom: 10px;
      span{
        color: salmon;
        font-weight: bold;
        font-size: 18px;
      }
    }
    &_des{
      font-size: 12px;
      color: rgba(0,0,0,.4);
      margin-bottom: 20px;
    }
  }
}

</style>
